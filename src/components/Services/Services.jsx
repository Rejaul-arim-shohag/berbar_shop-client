import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import StarRatings from 'react-star-ratings';
import HomePageLayout from '../Layout/HomePageLayout';
import "./Services.css";
import {Link} from "react-router-dom"
export default function Services() {
    const [services, setServices] = useState([]);
    const { isLoading, error, data, isFetching } = useQuery("services", () =>
        axios.get(
            "https://testimonialapi.toolcarton.com/api"
        ).then(({ data }) => data)
    );

    useEffect(() => {
        setServices(data)
    }, [data])

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
                                        {/* <Card.Img variant="top bg-image hover-zoom" src={_.avatar} /> */}
                                        <div className="bg-image hover-zoom">
                                           
                                            <img src={_.avatar} alt="" className='h-100 w-100 ' />

                                        </div>
                                        {/* <Link class="d-block h-56 group serviceCard" href="/">
                                            <div
                                                class="relative flex items-end h-full transition bg-white border-4 border-black group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-3xl group-hover:shadow-[8px_8px_0_0_#000] p-8"
                                            >
                                                <div class="lg:group-hover:opacity-0 lg:group-hover:absolute">
                                                    <span class="text-3xl sm:text-4xl" role="img" aria-hidden="true">📆</span>
                                                    <p class="mt-4 text-xl font-bold sm:text-2xl">Datepicker Clear</p>
                                                </div>

                                                <div
                                                    class="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative"
                                                >
                                                    <p class="text-2xl font-bold">Datepicker Clear</p>

                                                    <p class="mt-4 text-lg font-medium leading-relaxed">
                                                        Datepicker input using Flatpickr with a button that clears the selected
                                                        date.
                                                    </p>
                                                </div>
                                            </div>
                                        </Link> */}


                                        <Card.Body>
                                            <Card.Title>$323</Card.Title>
                                            <span className='d-block'> Wavy hair</span>
                                            <StarRatings
                                                rating={_.rating}
                                                starRatedColor=""
                                                starDimension='15px'
                                                numberOfStars={5}
                                                name='rating'
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>

                </div>


            </HomePageLayout>

        </>
    )
}
