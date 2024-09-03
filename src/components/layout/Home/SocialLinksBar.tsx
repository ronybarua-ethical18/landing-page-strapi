import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const SocialLinksBar = () => {
  return (
    <div className="flex space-x-4">
      <Link href="https://www.facebook.com" passHref>
        <div
          className="p-3 bg-white rounded-full shadow-lg text-blue-600 hover:scale-110 transition-transform cursor-pointer"
        >
          <FaFacebookF size={20} />
        </div>
      </Link>
      <Link href="https://www.instagram.com" passHref>
        <div
          className="p-3 bg-white rounded-full shadow-lg text-pink-600 hover:scale-110 transition-transform cursor-pointer"
        >
          <FaInstagram size={20} />
        </div>
      </Link>
      <Link href="https://www.twitter.com" passHref>
        <div
          className="p-3 bg-white rounded-full shadow-lg text-blue-400 hover:scale-110 transition-transform cursor-pointer"
        >
          <FaTwitter size={20} />
        </div>
      </Link>
      <Link href="https://www.linkedin.com" passHref>
        <div
          className="p-3 bg-white rounded-full shadow-lg text-blue-700 hover:scale-110 transition-transform cursor-pointer"
        >
          <FaLinkedinIn size={20} />
        </div>
      </Link>
    </div>
  );
};

export default SocialLinksBar;
