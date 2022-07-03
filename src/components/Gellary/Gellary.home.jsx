import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { useQuery } from 'react-query';
import HomePageLayout from "../Layout/HomePageLayout";
import { Link } from 'react-router-dom'
import './ViewImage.scss'

import './gallery.scss';
import ViewImage from './ViewImage';

export default function Gallery() {
    const [modelPhotos, setModelPhotos] = useState();
    const { isLoading, error, data, isFetching } = useQuery("models", () =>
        axios.get(
            "data/models.json"
        ).then(({ data }) => data)
    );

    useEffect(() => setModelPhotos(data), [data])



    return (
        <>
            <div className="">
                <HomePageLayout title="Our Gallery" des="We never forget our beloved clients">
                    <Row className="" md={5} xs={3}>
                        {
                            modelPhotos?.slice(0,5).map((_, index) => (
                                // <Col className="position-relative" key={index}>
                                //     <div className="my-2 rounded-6">
                                //         <Card className="bg-dark   galleryCard text-white">
                                //             <img
                                //                 src={_.avatar}
                                //                 className="rounded bruh"
                                //                 alt="Gallery"
                                //             />
                                //             <Card.ImgOverlay className=' galleryOverlayText d-none d-md-flex align-items-end'>
                                //                 {/* <Card.Title>Hairy Style</Card.Title> */}
                                //                 {/* <p style={{ fontSize: ".7em" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt dolore rerum in a ipsum.</p> */}
                                //                 <div className="d-flex gap-2">
                                //                     {/* <Link to={`/booking/${_.id}`} className="navBtn booking rounded fw-bolder py-1 px-2">Book Now</Link> */}
                                //                     {/* <button className='navBtn booking rounded fw-bolder py-1 px-2 '>View</button> */}

                                //                 </div>

                                //             </Card.ImgOverlay>
                                //         </Card>
                                //     </div>


                                // </Col>
                                <ViewImage item={_}/>
                            ))
                        }


                    </Row>
                </HomePageLayout>
               

            </div>
        </>
    )
}
