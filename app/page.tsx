import Hero from '@/components/Hero'
import Properties from '@/components/Properties'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '@/components/About'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Properties />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
