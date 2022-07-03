import React, { useState } from 'react'
import './ViewImage.scss'
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
                    <Card.ImgOverlay className=' galleryOverlayText d-none d-md-flex align-items-end'>
                        {/* <Card.Title>Hairy Style</Card.Title> */}
                        {/* <p style={{ fontSize: ".7em" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt dolore rerum in a ipsum.</p> */}
                        <div className="d-flex gap-2">
                            {/* <Link to={`/booking/${_.id}`} className="navBtn booking rounded fw-bolder py-1 px-2">Book Now</Link> */}
                            {/* <button className='navBtn booking rounded fw-bolder py-1 px-2 '>View</button> */}

                        </div>

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
