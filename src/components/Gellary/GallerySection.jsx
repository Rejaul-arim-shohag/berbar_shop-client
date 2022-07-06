import Footer from '../Footer/Footer'
import "../HeroSaction/HeroSection.scss"
import UpperNav from '../HeroSaction/UpperNav'
import Navbar from '../Navbar/Navbar'
import SalonGallery from './Gellary'
export default function GallerySection() {
    return (
        <section className=''>
            
            <main className='mainHero relative '>
                <div className="container px-5 position-relative" >
                    <UpperNav />
                    <Navbar />
                    <div data-aos="zoom-in">
                        <SalonGallery />
                    </div>

                </div>
            <Footer />



            </main>
        </section>
    )
}
