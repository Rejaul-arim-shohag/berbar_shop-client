import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Gallery from "react-photo-gallery";
import { useQuery } from 'react-query';
import HomePageLayout from "../Layout/HomePageLayout";
import './ViewImage.scss';

import Carousel, { Modal, ModalGateway } from "react-images";
import Loader from '../../helper/Loading';
import Footer from '../Footer/Footer';
import Models from '../Models/Models';
import './gallery.scss';

export default function MyGallery() {
    const [modelPhotos, setModelPhotos] = useState([]);
    const { isLoading, error, data, isFetching } = useQuery("galleryPhoto", () =>
        axios.get(
            "/data/models.json"
        ).then(({ data }) => data)
    );
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
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
                <HomePageLayout title="Our Gallery" des="We never forget our beloved clients">
                    <Gallery photos={modelPhotos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
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
                </HomePageLayout>
                <div className="my-5 mt-5">
                    <Models />
                </div>
                <Footer />
            </div>
        </>
    )
}
