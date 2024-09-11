import Blog from '@/components/layout/blog'
import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import { getStrapiData } from '@/lib/utils'
import React from 'react'

async function BlogPage() {
  const [mainMenuData, footerData] = (await getStrapiData([
    '/api/main-menu',
    '/api/footer',
  ])) as [any, any]

  const strapiMenuData = mainMenuData?.data?.attributes
  const footer = footerData?.data?.attributes?.Footer
  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar strapiMenuData={strapiMenuData} />
        <Blog />
        <Footer footer={footer} />
      </div>
    </main>
  )
}

export default BlogPage
