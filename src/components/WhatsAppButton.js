import React from "react";
import {FaWhatsapp} from 'react-icons/fa'

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <a
        href="https://api.whatsapp.com/send?phone=573108252795"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-[75px]  bg-green-500 hover:bg-green-600 text-white font-bold w-16 h-16 lg:w-24 lg:mr-10 lg:h-24 flex items-center justify-center rounded-full shadow-lg animate-bounce"
      >
        <i className="text-[50px] lg:text-[100px] " ><FaWhatsapp/></i>
      </a>
    </div>
  );
};

export default WhatsAppButton;