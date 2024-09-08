import HeadingWithTags from '@/components/layout/blog/HeadingWithTags'
import LatestBlogs from '@/components/layout/blog/LatestBlogs'
import ContactEmail from '@/components/layout/home/ContactEmail'
import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import { getStrapiData } from '@/lib/utils'
import React from 'react'

async function BlogPage() {

  const [mainMenuData] = await getStrapiData([
    "/api/main-menu"
  ]) as [any]

  const strapiMenuData = mainMenuData?.data?.attributes
  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar strapiMenuData={strapiMenuData}/>
        <HeadingWithTags />
        <LatestBlogs />
        <ContactEmail />
        <Footer />
      </div>
    </main>
  )
}

export default BlogPage
