import Description from '@/components/layout/AboutUs/Description'
import Heading from '@/components/layout/AboutUs/Heading'
import ServicesWithTitle from '@/components/layout/AboutUs/ServicesWithTitle'
import ContactEmail from '@/components/layout/Home/ContactEmail'
import Footer from '@/components/layout/Home/Footer'
import TopBar from '@/components/layout/Home/Topbar'
import React from 'react'

function AboutPage() {
  return (
    <main className="w-full grid place-items-center">
    <div className="max-w-[2100px]">
      <TopBar />
      <Heading />
      <Description />
      <ServicesWithTitle />
      <ContactEmail />
      <Footer />
    </div>
  </main>
  )
}

export default AboutPage