import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { useQuery } from 'react-query';
import Footer from '../Footer/Footer';
import HomePageLayout from "../Layout/HomePageLayout"
import Models from '../Models/Models';
import './Gallery.css'
export default function Gallery() {
    const [modelPhotos, setModelPhotos] = useState();
    const { isLoading, error, data, isFetching } = useQuery("models", () =>
        axios.get(
            "https://testimonialapi.toolcarton.com/api"
        ).then(({ data }) => data)
    );

    useEffect(() => setModelPhotos(data), [data])



    return (
        <>
            <div className="">
                <HomePageLayout title="Our Gallery" des="We never forget our beloved clients">
                    <Row className="" md={5} xs={3}>
                        {
                            modelPhotos?.map((_, index) => (
                                <Col className="position-relative" key={index}>
                                    <div className="my-2    rounded-6">
                                        <Card className="bg-dark   galleryCard text-white">
                                            <img
                                                src={_.avatar}
                                                className="rounded"
                                                alt="Gallery"
                                            />
                                            <Card.ImgOverlay className=' galleryOverlayText d-none d-md-block'>
                                                <Card.Title>{_.name}</Card.Title>
                                                <p style={{ fontSize: ".7em" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt dolore rerum in a ipsum.</p>
                                                <BsFacebook />
                                                <BsInstagram className='ms-3' />
                                            </Card.ImgOverlay>
                                        </Card>
                                    </div>


                                </Col>
                            ))
                        }


                    </Row>
                </HomePageLayout>
                <div className="my-5 mt-5">
                    <Models />
                </div>
                <Footer />
            </div>
        </>
    )
}
