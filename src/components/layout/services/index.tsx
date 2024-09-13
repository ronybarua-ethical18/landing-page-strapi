'use client'

import React from 'react'
import Heading from './Heading'
import ServiceDescription from './ServiceDescription'
import Statistics from './Statistics'
import LatestProjects from './LatestProjects'
import ContactEmail from '../home/ContactEmail'
import ServiceList from './ServiceList'

const renderComponent = (component: any) => {
  switch (component.__component) {
    case 'service.heading':
      return <Heading key={component.id} data={component} />
    case 'service.services':
      return <ServiceList key={component.id} data={component} />
    case 'service.service-description':
      return <ServiceDescription key={component.id} data={component} />
    case 'service.statistics':
      return <Statistics key={component.id} data={component} />
    case 'service.projects':
      return <LatestProjects key={component.id} data={component} />
    case 'landing-page.contact':
      return <ContactEmail key={component.id} data={component} />
    default:
      return null
  }
}

function Services({ data }: any) {
  return <div>{data?.map((component: any) => renderComponent(component))}</div>
}

export default Services
