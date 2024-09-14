import Blog from '@/components/layout/blog'
import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import { getStrapiData } from '@/lib/utils'
import React from 'react'

async function BlogPage() {
  const [mainMenuData, footerData, blogData] = (await getStrapiData([
    '/api/main-menu',
    '/api/footer',
    '/api/blog-page'
  ])) as [any, any, any]

  const strapiMenuData = mainMenuData?.data?.attributes
  const footer = footerData?.data?.attributes?.Footer
  const blog = blogData?.data?.attributes?.blog


  console.log("blog data", blog)


  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar strapiMenuData={strapiMenuData} />
        <Blog data={blog}/>
        <Footer footer={footer} />
      </div>
    </main>
  )
}

export default BlogPage
