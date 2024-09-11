"use client"

import React from 'react'
import HeadingWithTags from './HeadingWithTags'
import LatestBlogs from './LatestBlogs'
import ContactEmail from '../home/ContactEmail'

function Blog() {
  return (
    <div>
        <HeadingWithTags />
        <LatestBlogs />
        {/* <ContactEmail /> */}
    </div>
  )
}

export default Blog