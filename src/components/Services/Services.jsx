import React from 'react'
import HomePageLayout from '../Layout/HomePageLayout'
import { Container, Row, Col } from "react-bootstrap"

export default function Services() {

    const data = [
        {
            'src': "/images/hair-cutting.png",
            'title': "Beard Trimming",
            'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus inventore laborum, culpa eos consequuntur sapiente perferendis pariatur quod unde sed, commodi esse, cupiditate vitae? Dolor enim vel ut expedita."
        },
        {
            'src': "/images/trimmer.png",
            'title': "Quality Get Shave",
            'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus inventore laborum, culpa eos consequuntur sapiente perferendis pariatur quod unde sed, commodi esse, cupiditate vitae? Dolor enim vel ut expedita."
        },
        {
            'src': "/images/relax.png",
            'title': "Effective Body Message",
            'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus inventore laborum, culpa eos consequuntur sapiente perferendis pariatur quod unde sed, commodi esse, cupiditate vitae? Dolor enim vel ut expedita."
        },
        {
            'src': "/images/barbershop.png",
            'title': "Stylish Hair Cutting",
            'description': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloribus inventore laborum, culpa eos consequuntur sapiente perferendis pariatur quod unde sed, commodi esse, cupiditate vitae? Dolor enim vel ut expedita."
        }
    ]
    return (
        <main>
            <HomePageLayout title="What We Can Do for You" des="Who are in extremely love with eco friendly system.">
                <Container className="" fluid >
                    <Row>
                        {
                            data?.map((item, index) => (
                                <Col className="" key={index} xs={12} md={6}>
                                    <div className="d-flex gap-2 ">
                                        <div className="">
                                            <img src={item.src} alt="" width={80} height={80} />
                                        </div>
                                        <div className="">
                                            <h6 className='fw-bold'>{item.title}</h6>
                                            <p className=' text-muted lh-lg ' style={{ textAlign: "justify", fontSize: ".7em" }}>{item.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>

            </HomePageLayout>

        </main>
    )
}
