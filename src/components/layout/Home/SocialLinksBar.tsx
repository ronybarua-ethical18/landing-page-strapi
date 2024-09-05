import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const SocialLinksBar = () => {
  return (
    <div className="flex space-x-4">
      <Link href="https://www.facebook.com" passHref>
        <div
          className="p-2 bg-white rounded-full shadow-lg  hover:scale-110 transition-transform cursor-pointer"
        >
          <FaFacebookF size={18} />
        </div>
      </Link>
      <Link href="https://www.instagram.com" passHref>
        <div
          className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
        >
          <FaInstagram size={18} />
        </div>
      </Link>
      <Link href="https://www.twitter.com" passHref>
        <div
          className="p-2 bg-white rounded-full shadow-lg  hover:scale-110 transition-transform cursor-pointer"
        >
          <FaTwitter size={18} />
        </div>
      </Link>
      <Link href="https://www.linkedin.com" passHref>
        <div
          className="p-2 bg-white rounded-full shadow-lg  hover:scale-110 transition-transform cursor-pointer"
        >
          <FaLinkedinIn size={18} />
        </div>
      </Link>
    </div>
  );
};

export default SocialLinksBar;
