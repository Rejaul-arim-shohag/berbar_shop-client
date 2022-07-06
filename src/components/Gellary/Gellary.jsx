import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Gallery from "react-photo-gallery";
import { useQuery } from 'react-query';
import './ViewImage.scss';

import Carousel, { Modal, ModalGateway } from "react-images";
import Loader from '../../helper/Loading';
import './gallery.scss';

export default function SalonGallery() {
    const [modelPhotos, setModelPhotos] = useState([]);
    const { isLoading, error, data, isFetching } = useQuery("galleryPhoto", () =>
        axios.get(
            "/data/models.json"
        ).then(({ data }) => data)
    );
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightBox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightBox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    useEffect(() => setModelPhotos(data), [data])

    if (isLoading) {
        return <Loader />
    }



    return (
        <>
            <div className="">
                <div className="container px-5 py-5">
                    <div className="" data-aos="fade-down">
                        <div className="text-center mb-5">
                            <h3 className='text-uppercase layoutTitle text-light'>Our Gallery</h3>
                        </div>
                    </div>
                    <div data-aos="fade-up" >
                        <div className="bg-light p-3 rounded shadow-sm">
                            <Gallery photos={modelPhotos} onClick={openLightBox} />
                            <ModalGateway>
                                {viewerIsOpen ? (
                                    <Modal onClose={closeLightBox}>
                                        <Carousel
                                            currentIndex={currentImage}
                                            views={modelPhotos.map(x => ({
                                                ...x,
                                                srcset: x.srcSet,
                                                caption: x.title
                                            }))}
                                        />
                                    </Modal>
                                ) : null}
                            </ModalGateway>
                        </div>
                    </div>

                </div>

                {/* <div className="my-5 mt-5">
                    <Models />
                </div> */}
            </div>
        </>
    )
}
