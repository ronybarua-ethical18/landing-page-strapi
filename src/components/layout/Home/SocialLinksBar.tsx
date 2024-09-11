import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const SocialLinksBar = ({ links }: any) => {
  // A function to return the appropriate icon for each social platform
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'facebook':
        return <FaFacebookF size={18} />;
      case 'instagram':
        return <FaInstagram size={18} />;
      case 'twitter':
        return <FaTwitter size={18} />;
      case 'linkedin':
        return <FaLinkedinIn size={18} />;
      default:
        return null; // Handle other cases if needed
    }
  };

  return (
    <div className="flex space-x-4">
      {links.map((link: any) => (
        <Link href={link.url} passHref key={link.id}>
          <div
            className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
            aria-label={link.title}
          >
            {getIcon(link.title)}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinksBar;
