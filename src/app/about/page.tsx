import Description from '@/components/layout/about/Description'
import Heading from '@/components/layout/about/Heading'
import ServicesWithTitle from '@/components/layout/about/ServicesWithTitle'
import { Teams } from '@/components/layout/about/Teams'
import ContactEmail from '@/components/layout/home/ContactEmail'
import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import React from 'react'

function AboutPage() {
  return (
    <main className="w-full grid place-items-center">
    <div className="max-w-[2100px]">
      <TopBar />
      <Heading />
      <Description />
      <ServicesWithTitle />
      <Teams />
      <ContactEmail />
      <Footer />
    </div>
  </main>
  )
}

export default AboutPage