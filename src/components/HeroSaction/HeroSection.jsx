import React from 'react'
import {BsFillTelephoneFill,BsEnvelopeFill,BsInstagram,BsFacebook,BsTwitter,BsLinkedin} from "react-icons/bs"
import "./HeroSection.css"
export default function HeroSection() {
    return (
        <section>
            <main className='mainHero'>
                <div className="mainTop text-light">
                    <div className="">
                        <p> <BsFillTelephoneFill/> <span>+12 345 678 9</span> </p>
                        <p> <BsEnvelopeFill/> <span>+12 345 678 9</span> </p>

                    </div>
                    <div className="">
                        <ul>
                            <li><a href="https://www.instagram.com" target="_blank" rel='noreferrer'> <BsInstagram/></a></li>
                            <li><a href="https://www.facebook.com" target="_blank" rel='noreferrer'> <BsFacebook/></a></li>
                            <li><a href="https://www.twitter.com" target="_blank" rel='noreferrer'> <BsTwitter/></a></li>
                            <li><a href="https://www.linkedin.com" target="_blank" rel='noreferrer'> <BsLinkedin/></a></li>
                          
                        </ul>
                    </div>

                </div>

            </main>

        </section>
    )
}
