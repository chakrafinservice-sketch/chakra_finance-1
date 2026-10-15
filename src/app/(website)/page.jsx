import HeroSection from '@/components/HomePageSections/HeroSection'
import { StatsSection } from '@/components/HomePageSections/StatsSection'
import { ClientsCarousel } from '@/components/HomePageSections/ClientsCarousel'
import AboutSection from '@/components/HomePageSections/AboutSection'
import WhyDifferentSection from '@/components/HomePageSections/WhyDifferentSection'
import ServiceSections from '@/components/HomePageSections/ServiceSection'
// import Testmonials from '@/components/HomePageSections/Testmonials'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <ClientsCarousel/>
      <AboutSection/>
      <WhyDifferentSection/>
      <ServiceSections/>
      {/* <Testmonials/> */}
    </div>
  )
}

export default Home;
