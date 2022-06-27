import React, { useEffect, useState } from 'react'
import HomePageLayout from '../Layout/HomePageLayout'
import axios from 'axios';

export default function Mentor() {
    const [mentorPhotos, setMentorPhotos] = useState();
    useEffect(() => {
        axios('https://randomuser.me/api?results=4')
            .then(({ data }) => setMentorPhotos(data.results))
    }, [])
  return (
    <main>
        <HomePageLayout title="Experienced mentor team" des="We give our best service to every customer">
            <div className="d-flex gap-3 flex-column flex-md-row">
                {
                    mentorPhotos?.map((item,index)=>{
                        return (
                            <div className="h-100 w-100 text-center">
                                <img src={item.picture.large} alt="" className='h-100 w-100'/>
                                <h3 className='mt-4 fs-6'>{item.name.first + " " + item.name.last}</h3>
                                <p className='text-muted' style={{fontSize:"1.5ch"}}>{item.email}</p>
                            </div>
                        )
                    })

                }

            </div>

        </HomePageLayout>
    </main>
  )
}
