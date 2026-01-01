4
import { FaWhatsapp } from 'react-icons/fa6'; // Popular icon library
import Link from 'next/link';
import React from 'react';

export default function WhatsAppButton() {
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
      className="whatsapp-icon"
    >
      <FaWhatsapp size={25} color="#25D366" />
    </Link>
  );
}
