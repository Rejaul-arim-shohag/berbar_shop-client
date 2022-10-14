import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Loader from '../../helper/Loading';
import HomePageLayout from '../Layout/HomePageLayout'
import axios from 'axios'
import Footer from '../Footer/Footer';
import StarRatings from 'react-star-ratings';
import { useQuery } from 'react-query';
import "./Services.scss";
import { Link } from "react-router-dom"
import { fromDataPost } from '../../APIRequest/ApiRequest';


export default function AllServices() {
    const [services, setServices] = useState([]);



    const baseUrl = "http://localhost:5000/api/v1";
    const [image, setImage] = useState([]);
    const [userName, setUserName] = useState("")
    const inputHandle = (e) => {
        if (e.target.files.length != 0) {
            setImage(e.target.files[0])
        }
    }
    const handleNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handlePostData = () => {
        // fromDataPost(image, userName)
        const url = baseUrl + "/readSlots";
        const formData = new FormData()
        formData.append("image", image)
        console.log(formData)
        axios.post(url, formData)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                else {
                    return false;
                }
            }).catch((err) => {
                console.log(err)
            })


    }
    // const { isLoading, error, data, isFetching } = useQuery("services", () =>
    //     axios.get(
    //         "https://testimonialapi.toolcarton.com/api"
    //     ).then(({ data }) => data)
    // );

    // useEffect(() => {
    //     setServices(data)
    // }, [data])

    // if (services?.length === 0) {
    //     return <Loader isLoading={true} />
    // }


    return (
        <>

            <div className="fileUpload">
                <input onChange={inputHandle} type="file" />
                <input onChange={handleNameChange} type="text" />
                <button onClick={handlePostData} className="btn btn-primary">Submit</button>
            </div>
            {/* <HomePageLayout title="OUR TOP RATED SERVICES" des="We are the best in our field">
                <div className="services">
                    <div data-aos="fade-up">
                        <Row xs={2} md={3} className="g-md-4 g-2">
                            {services?.map((_, idx) => (
                                <Col key={idx} className="p-3">
                                    <Card>
                                        <Link class="d-block serviceCard" to={`/booking/${_.id}`}>
                                            <div
                                                class="position-relative  h-100  bg-light border-4 border-dark rounded"
                                            >
                                                <img src={_.avatar} alt="" className='h-100 w-100 rounded' />


                                                <div class="overlayText p-md-3 p-2 pt-3 rounded" >
                                                    <p className='text-dark fw-bold fs-md-4 '>$300 - $500</p>
                                                    <p className='d-block text-dark'> Wavy hair</p>
                                                    <StarRatings
                                                        rating={_.rating}
                                                        starRatedColor="#9f0078"
                                                        starDimension='15px'
                                                        numberOfStars={5}
                                                        name='rating'
                                                    />
                                                </div>
                                                <div className="overlayButton">
                                                    <button className='navBtn booking rounded-pill fw-bold py-2 px-5 '>Book Now</button>

                                                </div>
                                            </div>
                                        </Link>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        

                    </div>

            </HomePageLayout>
            <Footer /> */}
        </>
    )
}
