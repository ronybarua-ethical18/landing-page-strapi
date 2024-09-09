import ContactEmail from '@/components/layout/home/ContactEmail'
import FeatureCategories from '@/components/layout/home/FeatureCategories'
import Features from '@/components/layout/home/Features'
import Footer from '@/components/layout/home/Footer'
import Hero from '@/components/layout/home/Hero'
import Services from '@/components/layout/home/Services'
import TopBar from '@/components/layout/home/Topbar'
import { TrustedCompanies } from '@/components/layout/home/TrustedCompanies'
import { getStrapiData } from '@/lib/utils'

// Helper function to render components based on the dynamic zone
const renderComponent = (zone: any) => {
  switch (zone.__component) {
    case 'landing-page.hero':
      return <Hero data={zone} />
    case 'landing-page.service-list':
      return <Services data={zone} />
    case 'landing-page.feature-list':
      return <Features data={zone} />
    case 'landing-page.feature-categories':
      return <div className="grid grid-cols-2 gap-14 px-[10%] my-40">
               <FeatureCategories data={zone} />
               
             </div>
    case 'landing-page.trusted-companies':
      return <TrustedCompanies data={zone} />
    case 'landing-page.contact':
      return <ContactEmail data={zone} />
    default:
      return null
  }
}

export default async function Home() {
  const [mainMenuData, landingPageContent] = await getStrapiData([
    "/api/main-menu",
    "/api/landing-page"
  ]) as [any, any]

  const landingPageZones = landingPageContent?.data?.attributes?.PageContent || []
  const strapiMenuData = mainMenuData?.data?.attributes

  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar strapiMenuData={strapiMenuData}/>
        {landingPageZones.map((zone: any, index: number) => (
          <div key={index}>
            {renderComponent(zone)}
          </div>
        ))}
        <Footer />
      </div>
    </main>
  )
}
