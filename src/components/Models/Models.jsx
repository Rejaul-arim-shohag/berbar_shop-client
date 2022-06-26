import { useEffect, useState } from 'react';

import axios from 'axios';
import { Autoplay } from "swiper";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Models() {
    const [modelPhotos, setModelPhotos] = useState();
    useEffect(() => {
        axios('https://randomuser.me/api?results=12')
            .then(({ data }) => setModelPhotos(data.results))
    }, [])

    console.log('modelPhotos', modelPhotos);
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
              }}
              modules={[Autoplay]}
             >
                {
                    modelPhotos?.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <div className="h-100 w-100">
                                    <img src={item.picture.large} alt="" className='h-100 w-100'/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
