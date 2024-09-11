"use client"

import React from 'react';
import SocialLinksBar from './SocialLinksBar';

function Footer({ footer }: any) {
  return (
    <div className="grid grid-cols-4 gap-9 px-[10%] py-20 border">
      {footer?.map((section: any) => {
        switch (section.__component) {
          case 'footer.logo-section':
            return (
              <div key={section.id}>
                <h1 className="font-bold text-2xl">
                  <span className="text-[#1090CB]">{section.title}</span>
                </h1>
                <p className="my-6">{section.description}</p>
                <p>{section.tag}</p>
                {/* {section.logo?.data?.attributes?.url && (
                  <img
                    src={section.logo.data.attributes.url}
                    width={section.logo.data.attributes.width}
                    height={section.logo.data.attributes.height}
                    alt="Footer logo"
                  />
                )} */}
              </div>
            );
          case 'footer.footer':
            return (
              <div key={section.id}>
                <h2 className="font-semibold text-lg mb-6">{section.title}</h2>
                <ul>
                  {section.AboutLink.map((link: any) => (
                    <li key={link.id}>
                      <a href={link.url}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case 'footer.contact-section':
            return (
              <div key={section.id}>
                <h2 className="font-semibold text-lg">{section.title}</h2>
                <p className="my-6">{section.description}</p>
                <p>{section.phone}</p>
              </div>
            );
          case 'footer.social-links-section':
            return (
              <div key={section.id} className="flex items-end">
                <SocialLinksBar links={section.SocialLink} />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default Footer;
