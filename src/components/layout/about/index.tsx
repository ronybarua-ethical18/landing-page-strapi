"use client"

import React from 'react'
import Heading from './Heading'
import Description from './Description'
import ServicesWithTitle from './ServicesWithTitle'
import { Teams } from './Teams'
import ContactEmail from '../home/ContactEmail'

function About() {
  return (
    <div>
      <Heading />
      <Description />
      <ServicesWithTitle />
      <Teams />
      {/* <ContactEmail /> */}
    </div>
  )
}

export default About
