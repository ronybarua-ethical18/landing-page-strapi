import ContactEmail from '@/components/layout/home/ContactEmail'
import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import Heading from '@/components/layout/services/Heading'
import LatestProjects from '@/components/layout/services/LatestProjects'
import ServiceDescription from '@/components/layout/services/ServiceDescription'
import Statistics from '@/components/layout/services/Statistics'
import React from 'react'

function ServicePage() {
  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar />
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
