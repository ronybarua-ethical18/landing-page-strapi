"use client";

import React from 'react';
import HeadingWithTags from './HeadingWithTags';
import FeaturedBlog from './FeaturedBlog';
import LatestBlogs from './LatestBlogs';
import ContactEmail from '../home/ContactEmail';

function Blog({ data }:any) {
  return (
    <div>
      {data?.map((component:any) => {
        switch (component.__component) {
          case 'blog.heading-with-tags':
            return (
              <HeadingWithTags
                key={component.id}
               data={component}
              />
            );
          case 'blog.featured-blog':
            return (
              <FeaturedBlog
              key={component.id}
              data={component}
              />
            );
          case 'blog.latest-blogs':
            return (
              <LatestBlogs
              key={component.id}
              data={component}
              />
            );
          case 'landing-page.contact':
            return (
              <ContactEmail
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

export default Blog;
