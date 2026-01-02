import { FaWhatsapp } from 'react-icons/fa6'; // Popular icon library
import Link from 'next/link';
import React from 'react';

interface WhatsAppButtonProps {
  size?: number;
  className?: string;
}

export default function WhatsAppButton({ size = 20, className = "" }: WhatsAppButtonProps) {
  const rawNumber = "8767039316";
  const defaultCountryCode = "91"; // Change if you need a different default

  const sanitizeNumber = (num: string) => {
    const digits = num.replace(/\D/g, '');
    // remove leading zeros
    return digits.replace(/^0+/, '');
  };

  let phoneNumber = sanitizeNumber(rawNumber);
  // If the number doesn't start with the country code and looks like a local number (<=10 digits), prepend default
  if (!phoneNumber.startsWith(defaultCountryCode) && phoneNumber.length <= 10) {
    phoneNumber = defaultCountryCode + phoneNumber;
  }

  const message = "Hello, I am interested in your services!";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link 
      href={waUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`whatsapp-icon text-zinc-300 hover:text-green-500 transition-colors duration-300 flex items-center justify-center ${className}`}
    >
      <FaWhatsapp size={size} />
    </Link>
  );
}
