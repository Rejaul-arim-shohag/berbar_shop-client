import React, { useEffect } from 'react'
import './Contact.scss'
import Footer from '../Footer/Footer';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <section className=" relative">
            <div className=" contactInformation d-flex px-5 py-3 ">
                <div className="contactMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.07013389008!2d90.35101529223687!3d23.76457835331716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1656486387691!5m2!1sen!2sbd" width="100%" height="100%" frameborder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" style={{ border: '0' }} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="contactAddress">
                        <div className="address">
                            <h2>ADDRESS</h2>
                            <p className="mt-1">Address- Plot# 1671, Nandipara, Trimuhoni Bridge, Rampura-Staff Quarter Rd, Dhaka-1214.</p>
                        </div>
                        <div className="email">
                            <h2 className="">EMAIL</h2>
                            <a href='/' className="">example@email.com</a>

                        </div>
                        <div className="phone">
                            <h2 className=" ">PHONE</h2>
                            <p className="">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm ">
                    <div className="text-center mb-5">
                        <h3 className=''>Write Us</h3>
                        <p className='text-muted text-uppercase layoutDes'>Exited to hear from you!</p>
                        <hr class="divider-horizontal-blurry " />
                    </div>
                    <form>
                        {/* <!-- Name input --> */}
                        <div className="form-outline mb-4">
                            <label className="form-label form_text fw-bolder" for="form4Example1">Your name</label>
                            <input required type="text" id="form4Example1" className="form-control border form_input rounded-pill px-3 " />
                        </div>
                        {/* <!-- Mobile number input --> */}
                        <div className="form-outline mb-4">
                            <label className="form-label form_text fw-bolder" for="form4Example1">Your mobile</label>
                            <input required type="tel" id="form4Example1" className="form-control border form_input rounded-pill px-3" />
                        </div>

                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-4">
                            <label className="form-label form_text fw-bolder" for="form4Example2">Your Email</label>
                            <input required type="email" id="form4Example2" className="form-control border form_input rounded-pill px-3" />
                        </div>

                        {/* <!-- Message input --> */}
                        <div className="form-outline mb-4">
                            <label className="form-label form_text fw-bolder" for="form4Example3">Your Message</label>
                            <textarea required className="form-control border form_input px-3" id="form4Example3" rows="4"></textarea>
                        </div>



                        {/* <!-- Submit button --> */}
                        <button type="submit" className='navBtn rounded-pill fw-bold py-2 px-5'>Send</button>

                        {/* <button  className="btn  btn-block mb-4 text-light" style={{ background: "#9f0078" }}>Send</button> */}
                    </form>
                </div>
            </div>

            <Footer />

        </section>
    )
}
