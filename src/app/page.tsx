import ContactEmail from '@/components/layout/home/ContactEmail'
import FeatureCategories from '@/components/layout/home/FeatureCategories'
import Features from '@/components/layout/home/Features'
import Footer from '@/components/layout/home/Footer'
import Hero from '@/components/layout/home/Hero'
import Services from '@/components/layout/home/Services'
import TopBar from '@/components/layout/home/Topbar'
import { TrustedCompanies } from '@/components/layout/home/TrustedCompanies'

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
