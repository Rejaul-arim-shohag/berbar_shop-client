import React, { useState } from 'react'
import './ViewImage.scss'
import {BsFullscreen} from 'react-icons/bs'
import { Button, Modal, Col, Card } from 'react-bootstrap'
export default function ViewImage({ item }) {
    // html, body {margin: 0; height: 100%; overflow: hidden}
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Col className="position-relative">
                <Card className="galleryCard text-white h-100 border-0" onClick={handleShow}>
                    <img
                        src={item.image}
                        className="rounded h-100"
                        alt="Gallery"
                    />
                    <Card.ImgOverlay className='galleryOverlayText  d-flex align-items-center'>
                        <button className='galBtn border-0  rounded fw-bolder py-1 px-2 mx-auto fw-bold'> <BsFullscreen/></button>

                    </Card.ImgOverlay>
                </Card>
                {/* <div className="my-2 rounded-6">
                   
                </div> */}


            </Col>




            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} >

                <div className="">
                    <img
                        src={item.image}
                        className="rounded w-100 "
                        alt="Gallery"
                    />
                </div>

            </Modal>
        </>
    )
}
