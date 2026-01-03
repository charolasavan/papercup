'use client'
const GetInTouch = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '+919512121018';
        const message = encodeURIComponent(
            'Hello! I would like to inquire about your eco-friendly products.'
        );
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <>
            <button
                className="inline-flex items-center gap-2 bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
                onClick={handleWhatsAppClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-5 w-5">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                Get In Touch
            </button>
        </>
    )
}


export default GetInTouch