import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Autoplay } from "swiper";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Models.css";
import { useQuery } from 'react-query';
import Loader from '../../helper/Loading';

export default function Models() {
    const [modelPhotos, setModelPhotos] = useState();
    const { isLoading, error, data, isFetching } = useQuery("models", () =>
        axios.get(
            "https://randomuser.me/api?results=12"
        ).then(({ data }) => data)
    );

    useEffect(()=>setModelPhotos(data?.results),[data])

    if(isLoading || isFetching){
        return <Loader/>
    }


    return (
        <div data-aos="fade-right">
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
        </div>

    )
}
