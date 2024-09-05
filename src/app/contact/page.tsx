import ContactDetails from '@/components/layout/contact/ContactDetails'
import Heading from '@/components/layout/contact/Heading'
import Hello from '@/components/layout/contact/Hello'
import ContactEmail from '@/components/layout/home/ContactEmail'
import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import React from 'react'

function ContactPage() {
  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar />
        <Heading />
        <Hello />
        <Footer />
      </div>
    </main>
  )
}

export default ContactPage
