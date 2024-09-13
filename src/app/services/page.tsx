import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import Services from '@/components/layout/services'
import { getStrapiData } from '@/lib/utils'
import React from 'react'

async function ServicePage() {
  const [mainMenuData, footerData, serviceData] = (await getStrapiData([
    '/api/main-menu',
    '/api/footer',
    '/api/service'
  ])) as [any, any, any]

  const strapiMenuData = mainMenuData?.data?.attributes
  const footer = footerData?.data?.attributes?.Footer
  const data = serviceData?.data?.attributes?.service

  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar strapiMenuData={strapiMenuData} />
        <Services data={data} />
        <Footer footer={footer} />
      </div>
    </main>
  )
}

export default ServicePage
