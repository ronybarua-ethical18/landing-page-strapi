'use client'

import React from 'react'
import HeadingWithMap from './HeadingWithMap'
import Hello from './Hello'

function Contact({ data }:any) {

  return (
    <div>
      {data?.map((component:any) => {
        switch (component.__component) {
          case 'contact.heading-with-map':
            return (
              <HeadingWithMap
                key={component.id}
               data={component}
              />
            );
          case 'contact.contact-form':
            return (
              <Hello
                key={component.id}
                data={component}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default Contact;
