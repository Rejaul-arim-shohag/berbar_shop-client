import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSaction/HeroSection'
import Mentor from '../components/Mentor/Mentor'

import AboutUs from '../components/AboutUs/AboutUs'
import BookNowBadge from '../components/BookNowBadge/BookNowBadge'
import GalleryHome from '../components/Gellary/Gellary.home'
import Testimonial from '../components/Testimonial/Testimonial'
import Stats from '../components/Stats/Stats'
import Products from '../components/Products/Products'
export default function Home() {
  return (
    <div className='position-relative'>

      <BookNowBadge home />
      <HeroSection />
      <Products />
      <AboutUs />
      {/* <Services />
      <Models /> */}

      <GalleryHome />
      <Mentor />
      <Testimonial />
      <Footer />




    </div>
  )
}
