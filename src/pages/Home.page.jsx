import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSaction/HeroSection'
import Mentor from '../components/Mentor/Mentor'

import AboutUs from '../components/AboutUs/AboutUs'
import Testimonial from '../components/Testimonial/Testimonial'
import Gallery from '../components/Gellary/Gellary.home'
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className='position-relative'>
      <HeroSection />
      <AboutUs />
      {/* <Services />
      <Models /> */}
      <Gallery />
      <Mentor />
      <Testimonial />
      <Footer />

      {/* <div className="position-absolute">
        <Link to={`/booking/1`} className="navBtn booking rounded fw-bolder py-1 px-2">Book Now</Link>

      </div> */}
    </div>
  )
}
