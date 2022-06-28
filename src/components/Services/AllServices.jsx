import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Loader from '../../helper/Loading';
import HomePageLayout from '../Layout/HomePageLayout'
import axios from 'axios'
import Footer from '../Footer/Footer';
import StarRatings from 'react-star-ratings';
import { useQuery } from 'react-query';

export default function AllServices() {
    const [services, setServices] = useState([]);
    const { isLoading, error, data, isFetching } = useQuery("services", () =>
        axios.get(
            "https://testimonialapi.toolcarton.com/api"
        ).then(({ data }) => data)
    );

    useEffect(() => {
        setServices(data)
    }, [data])

    if (services?.length === 0) {
        return <Loader isLoading={true} />
    }
    return (
        <>
            <HomePageLayout title="OUR TOP RATED SERVICES" des="We are the best in our field">
                <div className="">
                    <div data-aos="fade-up">
                        <Row xs={1} md={3} className="g-4">
                            {services?.map((_, idx) => (
                                <Col key={idx}>
                                    <Card>
                                        {/* <Card.Img variant="top " src={_.avatar} /> */}
                                        <div className="bg-image hover-zoom">
                                            <img src={_.avatar} alt="" className='h-100 w-100 ' />

                                        </div>
                                        <Card.Body>
                                            <Card.Title>$323</Card.Title>
                                            <Card.Text>
                                                <p> Wavy hair</p>
                                                <StarRatings
                                                    rating={_.rating}
                                                    starRatedColor=""
                                                    starDimension='15px'
                                                    numberOfStars={5}
                                                    name='rating'
                                                />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>

                </div>

            </HomePageLayout>

            <Footer />
        </>
    )
}
