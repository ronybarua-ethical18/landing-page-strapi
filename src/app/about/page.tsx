import About from '@/components/layout/about'
import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import { getStrapiData } from '@/lib/utils'
import React from 'react'

async function AboutPage() {
  const [mainMenuData, footerData] = (await getStrapiData([
    '/api/main-menu',
    '/api/footer',
  ])) as [any, any]

  const strapiMenuData = mainMenuData?.data?.attributes
  const footer = footerData?.data?.attributes?.Footer

  console.log("strapi menu data", strapiMenuData)

  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar strapiMenuData={strapiMenuData} />
        <About />
        <Footer footer={footer} />
      </div>
    </main>
  )
}

export default AboutPage
