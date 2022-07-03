import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import HomePageLayout from '../Layout/HomePageLayout';
import "./mentor.scss"
export default function Mentor() {
    const [mentorPhotos, setMentorPhotos] = useState([]);

    const { isLoading, error, data, isFetching } = useQuery("mentor", () =>
        axios.get(
            "https://testimonialapi.toolcarton.com/api"
        ).then(({ data }) => data)
    );

    useEffect(() => setMentorPhotos(data), [data])

    // if (mentorPhotos?.length === 0) {
    //     return <Loader isLoading={true} />
    // }
    return (
        <>
            <main>
                <HomePageLayout title="Experienced mentor team" des="We give our best service to every customer">
                    <Row className=" " xs={2} md={4}>
                        {
                            mentorPhotos?.slice(0, 4)?.map((item, index) => {
                                return (
                                    <Col className=" " key={index}>

                                        <div className=" text-center mentorCard">
                                            <div className=" mentorImg ">
                                                {/* <img src={item.avatar} alt="" className='h-100 w-100 ' /> */}
                                                <img
                                                    src={item.avatar}
                                                    className=" shadow-2-strong "
                                                    alt="Mentor team"
                                                />

                                            </div>
                                            <div className="mentorText">
                                                <h3 className='mt-md-4 mentorName'>{item.name}</h3>
                                                <p className='text-light' style={{ fontSize: "1.5ch" }}>{item.designation}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })

                        }

                    </Row>


                </HomePageLayout>
            </main>
        </>
    )
}
