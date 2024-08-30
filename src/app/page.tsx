import Features from '@/components/layout/Home/Features'
import Hero from '@/components/layout/Home/Hero'
import Services from '@/components/layout/Home/Services'
import TopBar from '@/components/layout/Home/Topbar'

export default function Home() {
  return (
    <main className="w-full grid place-items-center">
      <div className="max-w-[2100px]">
        <TopBar />
        <Hero />
        <Services />
        <Features />
      </div>
    </main>
  )
}
