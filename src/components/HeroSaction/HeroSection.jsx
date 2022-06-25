import React from 'react'
import { BsFillTelephoneFill, BsEnvelopeFill, BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs"
import Navbar from '../Navbar/Navbar'
import "./HeroSection.css"
export default function HeroSection() {
    return (
        <section>
            <main className='mainHero'>
                <div className=" container px-5">
                    <div className="mainTop d-none text-light d-md-flex justify-content-between pt-4">
                        <div className="d-flex gap-3">
                            <p> <BsFillTelephoneFill /> <span>+12 345 678 9</span> </p>
                            <p> <BsEnvelopeFill /> <span>+12 345 678 9</span> </p>

                        </div>
                        <div className="">
                            <ul className='d-flex gap-3'>
                                <li><a className=' text-light' href="https://www.instagram.com" target="_blank" rel='noreferrer'> <BsInstagram /></a></li>
                                <li><a className=' text-light' href="https://www.facebook.com" target="_blank" rel='noreferrer'> <BsFacebook /></a></li>
                                <li><a className=' text-light' href="https://www.twitter.com" target="_blank" rel='noreferrer'> <BsTwitter /></a></li>
                                <li><a className=' text-light' href="https://www.linkedin.com" target="_blank" rel='noreferrer'> <BsLinkedin /></a></li>

                            </ul>
                        </div>

                    </div>
                    <Navbar/>
                </div>

            </main>

        </section>
    )
}
