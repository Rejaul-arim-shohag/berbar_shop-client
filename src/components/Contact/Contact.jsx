import React from 'react'
import './Contact.css'
export default function Contact() {
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
                            <h2 className=" mt-4">PHONE</h2>
                            <p className="">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm ">
                    <form>
                        {/* <!-- Name input --> */}
                        <div className="form-outline mb-4">
                            <input type="text" id="form4Example1" className="form-control border" />
                            <label className="form-label" for="form4Example1">Name</label>
                        </div>

                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-4">
                            <input type="email" id="form4Example2" className="form-control border" />
                            <label className="form-label" for="form4Example2">Email address</label>
                        </div>

                        {/* <!-- Message input --> */}
                        <div className="form-outline mb-4">
                            <textarea className="form-control border" id="form4Example3" rows="4"></textarea>
                            <label className="form-label" for="form4Example3">Message</label>
                        </div>

                        {/* <!-- Checkbox --> */}
                        <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                            <label className="form-check-label" for="form4Example4">
                                Send me a copy of this message
                            </label>
                        </div>

                        {/* <!-- Submit button --> */}
                        <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
