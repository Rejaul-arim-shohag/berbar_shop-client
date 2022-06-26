import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroContent from './HeroContent'
import "./HeroSection.css"
import UpperNav from './UpperNav'
export default function HeroSection() {
    return (
        <section>
            <main className='mainHero'>
                <div className=" container px-5">
                    <UpperNav />
                    <Navbar />
                    <HeroContent />
                </div>

            </main>

        </section>
    )
}
