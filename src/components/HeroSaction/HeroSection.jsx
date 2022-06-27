import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroContent from './HeroContent'
import "./HeroSection.css"
import UpperNav from './UpperNav'
import { motion } from "framer-motion"
export default function HeroSection() {
    return (
        <section>
            <main className='mainHero relative overflow-hidden'>
                <div className="container px-5" >
                    <UpperNav />
                    <Navbar />
                    <motion.div
                        animate={{ scale: 1.33 }}
                        // animate={{ x: [0, 100, 0] }}
                        transition={{ duration: .75 }}
                        layout 
                    >
                        <div className="" style={{ transform: " scale(.75)" }}>
                            <HeroContent />
                        </div>

                    </motion.div>
                </div>


            </main>
        </section>
    )
}
