import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSaction/HeroSection'
import Mentor from '../components/Mentor/Mentor'

import AboutUs from '../components/AboutUs/AboutUs'
import Testimonial from '../components/Testimonial/Testimonial'
import Gallery from '../components/Gellary/Gellary.home'
import { Link } from "react-router-dom"
import BookNowBadge from '../components/BookNowBadge/BookNowBadge'
export default function Home() {
  return (
    <div className='position-relative'>

      <BookNowBadge />
      <HeroSection />

      <AboutUs />
      {/* <Services />
      <Models /> */}
      <Gallery />
      <Mentor />
      <Testimonial />
      <Footer />
     



    </div>
  )
}
