import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../helper/Loading';
import HomePageLayout from '../Layout/HomePageLayout';

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
                    <div className="d-flex gap-3">
                        {
                            mentorPhotos?.slice(0, 4)?.map((item, index) => {
                                return (
                                    <div className="h-50 h-md-100 w-50 w-md-100 text-center" key={index}>
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
        </>
    )
}
