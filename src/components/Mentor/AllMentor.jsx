import React, { useEffect, useState } from 'react'
import HomePageLayout from '../Layout/HomePageLayout'
import axios from 'axios';
import Loader from '../../helper/Loading';
import Footer from '../Footer/Footer';
import { useQuery } from 'react-query';

export default function AllMentor() {
    const [mentorPhotos, setMentorPhotos] = useState([]);
    const { isLoading, error, data, isFetching } = useQuery("mentor", () =>
        axios.get(
            "https://testimonialapi.toolcarton.com/api"
        ).then(({ data }) => data)
    );

    useEffect(()=>setMentorPhotos(data),[data])


    if (mentorPhotos?.length === 0 || isLoading) {
        return <Loader isLoading={true} />
    }
    return (
        <>
            <main>
                <HomePageLayout title="Experienced mentor team" des="We give our best service to every customer">
                    <div className="d-flex gap-3 flex-column flex-md-row">
                        {
                            mentorPhotos?.map((item, index) => {
                                return (
                                    <div className="h-100 w-100 text-center" key={index}>
                                        <div className="bg-image hover-zoom">
                                            <img src={item.avatar} alt="" className='h-100 w-100 ' />

                                        </div>
                                        <h3 className='mt-4 fs-6'>{item.name}</h3>
                                        <p className='text-muted' style={{ fontSize: "1.5ch" }}>{item.designation}</p>
                                    </div>
                                )
                            })

                        }

                    </div>


                </HomePageLayout>
            </main>
            <Footer />
        </>
    )
}
