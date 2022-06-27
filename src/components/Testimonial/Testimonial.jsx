import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import axios from 'axios';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi"
import { GoQuote } from "react-icons/go"
import { Stack } from "react-bootstrap"
import HomePageLayout from '../Layout/HomePageLayout';
export default function Testimonial() {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        axios('https://testimonialapi.toolcarton.com/api')
            .then(({ data }) => setTestimonial(data))
    }, [])



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <HomePageLayout>
                <Stack className="flex-wrap" direction='horizontal' gap={3}>
                    <div className="col-12 col-md-3">
                        <h3>Testimonial</h3>
                        <h4>What out customer says</h4>
                        <div className="">
                            <HiOutlineChevronLeft />
                            <HiOutlineChevronRight />
                        </div>
                    </div>
                    <div className="relative col-12 col-md-8">
                        <Slider {...settings}>
                            {
                                testimonial?.map((item, index) => {
                                    return (
                                        <div key={index} className="">
                                            <GoQuote />
                                            <p>{item.message}</p>
                                            <div className="">
                                                <img src={item.avatar} alt="" height={100} width={100} />
                                                <h5>{item.name}</h5>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>
                </Stack>
            </HomePageLayout>

        </>
    );
}
