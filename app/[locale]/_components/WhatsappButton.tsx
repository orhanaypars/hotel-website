import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "905525845941";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-5 left-5 z-50 md:bottom-4 md:left-4">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative bg-[#25D366] text-white p-3 rounded-full flex items-center justify-center w-16 h-16 shadow-lg cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 animate-bounce md:w-14 md:h-14"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
