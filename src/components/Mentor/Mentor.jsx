import React, { useEffect, useState } from 'react'
import HomePageLayout from '../Layout/HomePageLayout'
import axios from 'axios';

export default function Mentor() {
    const [mentorPhotos, setMentorPhotos] = useState();

    useEffect(() => {
        axios('https://testimonialapi.toolcarton.com/api')
            .then(({ data }) => setMentorPhotos(data))
    }, [])
    console.log('mentorPhotos',mentorPhotos);
    return (
        <main>
            <HomePageLayout title="Experienced mentor team" des="We give our best service to every customer">
                <div className="d-flex gap-3 flex-column flex-md-row">
                    {
                        mentorPhotos?.slice(0,4)?.map((item, index) => {
                            return (
                                <div className="h-100 w-100 text-center">
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
    )
}
