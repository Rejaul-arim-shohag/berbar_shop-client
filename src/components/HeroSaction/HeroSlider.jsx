import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import { Row } from 'react-bootstrap'
import "./HeroSlider.scss"
export default function HeroSlider() {
    const [heroSlider, setHeroSlider] = useState([]);
    const slider = useRef()
    const { isLoading, error, data, isFetching } = useQuery("heroPhoto", () =>
        axios.get(
            "/data/interior.json"
        ).then(({ data }) => data)
    );

    useEffect(() => setHeroSlider(data), [data])


    // if (testimonial?.length === 0) {
    //     return <Loader isLoading={true} />
    // }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,

    };





    return (
        <Row className='mt-5' xs={1} md={2}  >
            <div className="barber-title text-light d-flex justify-content-center py-5 align-items-start flex-column gap-4">
                <h2 className='display-md-5 w-75 text-uppercase fw-bold'>HairStyle is a  Must try Fashion  for all Occasion</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p>
                <Link className='appointment-btn btn btn-outline-light rounded-pill py-2 px-4 fw-bold text-light' to={`/booking/1`}>Set an appointment</Link>

            </div>
            <div className="slider_card">
                <Slider ref={c => (slider.current = c)} {...settings}>
                    {
                        heroSlider?.map((item, index) => {
                            return (
                                <div className=" h-100 w-100 position-relative ">
                                    <img src={item.src} alt="" className='h-100 w-100 rounded' />
                                    <div className="slider_badge bg-primary  d-flex  ">
                                        <h6 className='text-light my-auto mx-auto text-uppercase mw-bold'>{item.name}</h6>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Slider>



            </div>

        </Row>
    )
}
