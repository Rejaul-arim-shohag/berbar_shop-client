import Navbar from '../Navbar/Navbar'
import HeroContent from './HeroContent'
import "./HeroSection.scss"
import HeroSlider from './HeroSlider'
import UpperNav from './UpperNav'
export default function HeroSection() {
    return (
        <section className=''>
            
            <main className='mainHero relative '>
                <div className="container px-5 position-relative" >
                    <UpperNav />
                    <Navbar />
                    <HeroSlider/>

                </div>


            </main>
        </section>
    )
}
