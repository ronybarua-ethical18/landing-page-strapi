'use client'

import React from 'react'
import Heading from './Heading'
import Description from './Description'
import ServicesWithTitle from './ServicesWithTitle'
import ContactEmail from '../home/ContactEmail'
import { Teams } from './Teams'

const renderComponent = (component: any) => {
  switch (component.__component) {
    case 'about.heading':
      return <Heading key={component.id} data={component} />
    case 'about.description':
      return <Description key={component.id} data={component} />
    case 'about.services-with-title':
      return <ServicesWithTitle key={component.id} data={component} />
    case 'about.team-list':
      return <Teams key={component.id} data={component} />
    case 'landing-page.contact':
      return <ContactEmail key={component.id} data={component} />
    default:
      return null
  }
}

function About({ data }: any) {
  return (
    <div>{data?.map((component: any) => renderComponent(component))}</div>
  )
}

export default About
