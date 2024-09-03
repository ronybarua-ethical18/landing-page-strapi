import ContactEmail from '@/components/layout/Home/ContactEmail'
import FeatureCategories from '@/components/layout/Home/FeatureCategories'
import Features from '@/components/layout/Home/Features'
import Footer from '@/components/layout/Home/Footer'
import Hero from '@/components/layout/Home/Hero'
import Services from '@/components/layout/Home/Services'
import TopBar from '@/components/layout/Home/Topbar'
import { TrustedCompanies } from '@/components/layout/Home/TrustedCompanies'

export default function Home() {
  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar />
        <Hero />
        <Services />
        <Features />
        <div className="grid grid-cols-2 gap-14 px-[10%] my-40">
          <FeatureCategories />
          <FeatureCategories />
        </div>
        <TrustedCompanies />
        <ContactEmail />
        <Footer />
      </div>
    </main>
  )
}
