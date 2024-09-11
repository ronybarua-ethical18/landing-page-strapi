import Home from '@/components/layout/home'
import Footer from '@/components/layout/home/Footer'
import TopBar from '@/components/layout/home/Topbar'
import { getStrapiData } from '@/lib/utils'

export default async function HomePage() {
  const [mainMenuData, landingPageContent, footerData] = (await getStrapiData([
    '/api/main-menu',
    '/api/landing-page',
    '/api/footer',
  ])) as [any, any, any]

  const landingPageZones =
    landingPageContent?.data?.attributes?.PageContent || []
  const strapiMenuData = mainMenuData?.data?.attributes
  const footer = footerData?.data?.attributes?.Footer

  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar strapiMenuData={strapiMenuData} />
        <Home landingPageZones={landingPageZones} />
        <Footer footer={footer} />
      </div>
    </main>
  )
}
