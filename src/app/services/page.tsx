import ContactEmail from '@/components/layout/home/ContactEmail'
import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import Heading from '@/components/layout/services/Heading'
import LatestProjects from '@/components/layout/services/LatestProjects'
import ServiceDescription from '@/components/layout/services/ServiceDescription'
import Statistics from '@/components/layout/services/Statistics'
import { getStrapiData } from '@/lib/utils'
import React from 'react'

async function ServicePage() {
  const [mainMenuData] = await getStrapiData([
    "/api/main-menu"
  ]) as [any]

  const strapiMenuData = mainMenuData?.data?.attributes
  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar strapiMenuData={strapiMenuData}/>
        <Heading />
        <ServiceDescription />
        <Statistics />
        <LatestProjects />
        <ContactEmail />
        <Footer />
      </div>
    </main>
  )
}

export default ServicePage
