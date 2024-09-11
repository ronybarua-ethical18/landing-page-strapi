"use client"

import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Features from './Features'
import FeatureCategories from './FeatureCategories'
import { TrustedCompanies } from './TrustedCompanies'
import ContactEmail from './ContactEmail'

const renderComponent = (zone: any) => {
  switch (zone.__component) {
    case 'landing-page.hero':
      return <Hero data={zone} />
    case 'landing-page.service-list':
      return <Services data={zone} />
    case 'landing-page.feature-list':
      return <Features data={zone} />
    case 'landing-page.feature-categories':
      return (
        <div className="grid grid-cols-2 gap-14 px-[10%] my-40">
          <FeatureCategories data={zone} />
        </div>
      )
    case 'landing-page.trusted-companies':
      return <TrustedCompanies data={zone} />
    case 'landing-page.contact':
      return <ContactEmail data={zone} />
    default:
      return null
  }
}

function Home({ landingPageZones }: any) {
  return (
    <div>
      {landingPageZones?.map((zone: any, index: number) => (
        <div key={index}>{renderComponent(zone)}</div>
      ))}
    </div>
  )
}

export default Home
