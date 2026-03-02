import Header from "@/app/components/Header"
import HeroSection from "@/app/components/HeroSection"
import AboutUs from "@/app/components/AboutUs"
import SweetCreations from "@/app/components/SweetCreations"
import WhyChooseUs from "@/app/components/WhyChooseUs"
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />
      <AboutUs />
      <SweetCreations />
      <WhyChooseUs />
      <Contact />
    </>
  )
}