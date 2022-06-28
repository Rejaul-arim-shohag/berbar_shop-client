import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import StarRatings from 'react-star-ratings';
import HomePageLayout from '../Layout/HomePageLayout';
import "./Services.css";
import { Link } from "react-router-dom"
import Slider from 'react-slick';
export default function Services() {
    const [services, setServices] = useState([]);
    const slider = useRef()

    const { isLoading, error, data, isFetching } = useQuery("services", () =>
        axios.get(
            "https://testimonialapi.toolcarton.com/api"
        ).then(({ data }) => data)
    );

    useEffect(() => {
        setServices(data)
    }, [data])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // if (services?.length === 0) {
    //     return <Loader isLoading={true} />
    // }
    return (
        <>
            <HomePageLayout title="OUR TOP RATED SERVICES" des="We are the best in our field">
                <div className="services">
                    <div data-aos="fade-up">
                        <Row xs={2} md={3} className="g-2 g-md-4">
                            {services?.slice(0, 6).map((_, idx) => (
                                <Col key={idx}>
                                    <Card>
                                        <Link class="d-block serviceCard" to="/">
                                            <div
                                                class="position-relative  h-100  bg-light border-4 border-dark rounded"
                                            >
                                                <img src={_.avatar} alt="" className='h-100 w-100 rounded' />


                                                <div class="overlay p-md-3 p-2 pt-3 rounded" >
                                                    <p className='text-dark fw-bold fs-md-4 '>$323</p>
                                                    <p className='d-block text-dark'> Wavy hair</p>
                                                    <StarRatings
                                                        rating={_.rating}
                                                        starRatedColor="#9f0078"
                                                        starDimension='15px'
                                                        numberOfStars={5}
                                                        name='rating'
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                    </Card>
                                </Col>
                            ))}

                            {/* <Slider ref={c => (slider.current = c)} {...settings}>
                                {services?.slice(0, 6).map((_, idx) => (
                                    <Col key={idx}>
                                        <Card>
                                            <Link class="d-block serviceCard" to="/">
                                                <div
                                                    class="position-relative  h-100  bg-light border-4 border-dark rounded"
                                                >
                                                    <img src={_.avatar} alt="" className='h-100 w-100 rounded' />


                                                    <div class="overlay p-md-3 p-2 pt-3 rounded" >
                                                        <p className='text-dark fw-bold fs-md-4 '>$323</p>
                                                        <p className='d-block text-dark'> Wavy hair</p>
                                                        <StarRatings
                                                            rating={_.rating}
                                                            starRatedColor="#9f0078"
                                                            starDimension='15px'
                                                            numberOfStars={5}
                                                            name='rating'
                                                        />
                                                    </div>
                                                </div>
                                            </Link>
                                        </Card>
                                    </Col>
                                ))}

                            </Slider> */}

                        </Row>
                    </div>

                </div>


            </HomePageLayout>

        </>
    )
}
