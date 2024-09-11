"use client"

import React from 'react'
import Heading from './Heading'
import ServiceDescription from './ServiceDescription'
import Statistics from './Statistics'
import LatestProjects from './LatestProjects'
import ContactEmail from '../home/ContactEmail'

function Services() {
  return (
    <div>
         <Heading />
        <ServiceDescription />
        <Statistics />
        <LatestProjects />
        {/* <ContactEmail /> */}
    </div>
  )
}

export default Services