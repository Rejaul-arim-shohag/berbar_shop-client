import { useEffect, useState } from 'react';
import axios from 'axios';
import { Autoplay } from "swiper";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsFacebook, BsInstagram } from "react-icons/bs"
import "./Models.css"
import { motion } from "framer-motion"
export default function Models() {
    const [modelPhotos, setModelPhotos] = useState();
    useEffect(() => {
        axios('https://randomuser.me/api?results=12')
            .then(({ data }) => setModelPhotos(data.results))
    }, [])

    return (
        <div className='my-5'>
            <Swiper
                watchSlidesProgress={true}
                slidesPerView={6}
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                modules={[Autoplay]}
            >
                {
                    modelPhotos?.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <div className="h-100 w-100 modelCard position-relative">
                                    <div className="h-100 w-100 modelPhoto">
                                        <img src={item.picture.large} alt="" className='h-100 w-100' />
                                    </div>
                                    <div className="modelOverlay ">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt dolore rerum in a ipsum.</p>
                                        <BsFacebook />
                                        <BsInstagram className='ms-3' />

                                    </div>
                                </div>


                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    )
}
