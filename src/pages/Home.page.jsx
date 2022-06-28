import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSaction/HeroSection'
import Mentor from '../components/Mentor/Mentor'
import Models from '../components/Models/Models'

import AboutUs from '../components/AboutUs/AboutUs'
import Services from '../components/Services/Services'
import Testimonial from '../components/Testimonial/Testimonial'

export default function Home() {
  return (
    <div className=''>
      <HeroSection />
      <AboutUs />
      <Services />
      <Models />
      <Mentor />
      <Testimonial />
      <Footer />


    </div>
  )
}
