import About from '@/components/layout/about'
import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import { getStrapiData } from '@/lib/utils'
import React from 'react'

async function AboutPage() {
  const [mainMenuData, footerData, aboutData] = (await getStrapiData([
    '/api/main-menu',
    '/api/footer',
    '/api/about-us'
  ])) as [any, any, any]

  const strapiMenuData = mainMenuData?.data?.attributes
  const footer = footerData?.data?.attributes?.Footer
  const about = aboutData?.data?.attributes?.about

  console.log("about", about)

  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar strapiMenuData={strapiMenuData} />
        <About data={about}/>
        <Footer footer={footer} />
      </div>
    </main>
  )
}

export default AboutPage
