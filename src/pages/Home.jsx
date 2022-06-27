import React, { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSaction/HeroSection'
import Mentor from '../components/Mentor/Mentor'
import Models from '../components/Models/Models'
import Services from '../components/Services/Services'
import Testimonial from '../components/Testimonial/Testimonial'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <Fragment>
       <HeroSection />
        <Services />
        <Models />
        <Mentor />
        <Testimonial />
        <Footer />
    

    </Fragment>
  )
}
