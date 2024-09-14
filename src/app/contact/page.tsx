import Contact from '@/components/layout/contact'
import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import { getStrapiData } from '@/lib/utils'
import React from 'react'

async function ContactPage() {
  const [mainMenuData, contactData, footerData] = (await getStrapiData([
    '/api/main-menu',
    '/api/contact-page',
    '/api/footer',
  ])) as [any, any, any]

  const strapiMenuData = mainMenuData?.data?.attributes
  const footer = footerData?.data?.attributes?.Footer
  const contact = contactData?.data?.attributes?.contactPage


  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar strapiMenuData={strapiMenuData} />
        <Contact data={contact}/>
        <Footer footer={footer} />
      </div>
    </main>
  )
}

export default ContactPage
