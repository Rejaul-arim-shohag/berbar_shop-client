import Navbar from '../Navbar/Navbar'
import Contact from './Contact'
import "../HeroSaction/HeroSection.scss"
import UpperNav from '../HeroSaction/UpperNav'
import Footer from '../Footer/Footer'
export default function ContactSection() {
    return (
        <section className=''>
            
            <main className='mainHero relative '>
                <div className="container px-5 position-relative" >
                    <UpperNav />
                    <Navbar />
                    <div data-aos="zoom-in">
                        <Contact />
                    </div>

                </div>
            <Footer />



            </main>
        </section>
    )
}
