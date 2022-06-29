import React from 'react'
import { Link } from 'react-router-dom'
import HomePageLayout from '../Layout/HomePageLayout'
import './Footer.css'
export default function Footer() {
    const quickLink = [
        { title: "Privacy Policy", href: "/utilities/privacy" },
        { title: "Terms & Conditions", href: "/utilities/termsConditions" },
        { title: "Refund Policy", href: "/utilities/refund" },
        { title: "About Us", href: "/features/about" },
        { title: "Contact Us", href: "/features/contact" }
    ]
    return (
        <div data-aos="fade-up"  data-aos-anchor-placement="center-bottom" >
            <footer className='footerSection'>
                <HomePageLayout>
                    <div className="d-md-flex flex-column flex-md-row gap-3 justify-content-between d-none" >
                        <div className="quickLink footerCard">
                            <h3 className=''>Quick Link</h3>
                            <ul className='linkList'>
                                {
                                    quickLink.map((item, index) => (
                                        <li key={index} className=""><Link to={item.href}>{item.title}</Link></li>
                                    ))
                                }

                            </ul>

                        </div>
                        <div className="contactUs footerCard">
                            <h3>Address</h3>
                            <p>Address- Plot# 1671, Nandipara, Trimuhoni Bridge, Rampura-Staff Quarter Rd, Dhaka-1214.</p>
                            <p>WhatsApp- 01977165675</p>
                            <p>Mail- contact@topgear.com.bd</p>
                        </div>
                        <div className="aboutUs footerCard">
                            <h3>About Us</h3>

                            <p>Since 2016, Barber Trading is one of the reliable companies in salon business in Bangladesh which is importing and retailing brand new, re-conditioned superior quality cars, microbus, SUVs and other cars both in Pre-Order/stock basis. We also offer dedicated service center for regular maintenance of the purchased vehicle. </p>
                        </div>
                    </div>


                </HomePageLayout>

                <div className="credit">
                    <p>COPYRIGHT © 2022-2023 - ALL RIGHTS RESERVED. BY BARBER SHOP LTD</p>
                </div>
            </footer>
        </div>

    )
}
