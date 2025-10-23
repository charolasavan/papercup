import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        // Extract the full form data from the request body
        const { name, email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: subject,
            html: `
                <div>
                    <p style="font-size:16px;">You have a new message from your contact form:</p>
                    <p><strong>Name:</strong> <span style="font-size:18px;">${name}</span></p>
                    <p><strong>Email:</strong> <span style="font-size:18px;">${email}</span></p>
                    <p><strong>Message:</strong></p>
                    <p style="font-size:16px;">${message}</p>
                </div>
                    `,
        };


        const info = await transporter.sendMail(mailOptions);

        console.log("Message Sent:", info.messageId);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500 }
        );
    }
}
