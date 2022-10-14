import React from 'react';
import Footer from '../Footer/Footer';
import UpperNav from '../HeroSaction/UpperNav';
import Navbar from '../Navbar/Navbar';
import BookAppointment from '../BookAppointment/BookAppointment';

const BookingByUser = () => {
    return (
        <section className=''>
            <main className='mainHero relative '>
                <div className="container px-5 position-relative" >
                    <UpperNav />
                    <Navbar />
                    <div data-aos="zoom-in">
                        <BookAppointment />
                    </div>

                </div>
            <Footer />
            </main>
        </section>
    );
};

export default BookingByUser;