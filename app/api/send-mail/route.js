import nodemailer from "nodemailer";

// In-memory rate limiter (reset on server restart)
const rateLimitMap = new Map();

function rateLimit(ip) {
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hour
    const maxRequests = 5;

    const record = rateLimitMap.get(ip) || { count: 0, time: now };

    if (now - record.time > windowMs) {
        rateLimitMap.set(ip, { count: 1, time: now });
        return true;
    }

    if (record.count >= maxRequests) return false;

    record.count++;
    rateLimitMap.set(ip, record);
    return true;
}

// Sanitizer
const sanitize = (str = "") =>
    str.replace(/[<>]/g, "").replace(/\r|\n/g, "").trim();

// Email validation
const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(req) {
    try {
        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0] ||
            req.headers.get("x-real-ip") ||
            "unknown";

        // Rate limit
        if (!rateLimit(ip)) {
            return new Response(
                JSON.stringify({ error: "Too many requests. Try later." }),
                { status: 429 }
            );
        }

        const { name, email, subject, message, captchaToken } = await req.json();

        // Basic validation
        if (!name || !email || !message || !captchaToken) {
            return new Response(
                JSON.stringify({ error: "All fields required" }),
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return new Response(
                JSON.stringify({ error: "Invalid email address" }),
                { status: 400 }
            );
        }

        if (message.length > 1000) {
            return new Response(
                JSON.stringify({ error: "Message too long" }),
                { status: 400 }
            );
        }

        // Sanitize inputs
        const safeName = sanitize(name);
        const safeEmail = sanitize(email);
        const safeSubject = sanitize(subject || "No Subject");
        const safeMessage = sanitize(message);

        // Verify reCAPTCHA v3
        const captchaRes = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
            }
        );

        const captchaData = await captchaRes.json();

        if (!captchaData.success || captchaData.score < 0.5) {
            return new Response(
                JSON.stringify({ error: "Captcha verification failed" }),
                { status: 403 }
            );
        }

        // Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send professional email
        await transporter.sendMail({
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // receiver email
            replyTo: safeEmail,          // reply goes to user
            subject: `New Contact Form Submission: ${safeSubject}`,
            html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <img src="https://eco-papercup.vercel.app/MailLogo.png" alt="Logo"  style="display:block;border:0;outline:none;text-decoration:none;" />
          <h2 style="color: #2F855A;">📩 New Contact Form Submission</h2>
          <p>You have received a new message from your website contact form:</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; border: 1px solid #e2e8f0;">Name</td>
              <td style="padding: 8px; border: 1px solid #e2e8f0;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border: 1px solid #e2e8f0;">Email</td>
              <td style="padding: 8px; border: 1px solid #e2e8f0;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border: 1px solid #e2e8f0;">Subject</td>
              <td style="padding: 8px; border: 1px solid #e2e8f0;">${safeSubject}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border: 1px solid #e2e8f0;">Message</td>
              <td style="padding: 8px; border: 1px solid #e2e8f0;">${safeMessage.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>

          <p style="margin-top: 20px; font-size: 14px; color: #718096;">
            This email was sent automatically from your website contact form.
          </p>

          <hr style="border: none; border-top: 1px solid #CBD5E0; margin-top: 20px;" />
          <p style="font-size: 12px; color: #A0AEC0;">
            © ${new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      `,
        });

        return new Response(
            JSON.stringify({ success: true, message: "Message sent successfully" }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API Error:", error);
        return new Response(
            JSON.stringify({ error: "Server error" }),
            { status: 500 }
        );
    }
}
