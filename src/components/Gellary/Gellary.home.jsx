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
                             
                                <ViewImage item={_}/>
                            ))
                        }


                    </Row>
                </HomePageLayout>
               

            </div>
        </>
    )
}
