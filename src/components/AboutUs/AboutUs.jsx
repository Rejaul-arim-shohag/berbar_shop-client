import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import HomePageLayout from '../Layout/HomePageLayout'
import AllMentor from "../Mentor/AllMentor"
import Testimonial from "../Testimonial/Testimonial"
import "./AboutUs.css"
export default function AboutUs({ routingAbout }) {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

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
        <main className={`${routingAbout ? '' : 'serviceSection'}`}>

            <HomePageLayout title="What We Can Do for You" des="Who are in extremely love with eco friendly system.">
                <Container className="" fluid >
                    <Row>
                        {
                            data?.map((item, index) => (
                                <Col className="" key={index} xs={6} md={6}>
                                    <div className="d-flex gap-2 ">
                                        <div className="d-none d-md-block">
                                            <img src={item.src} alt="" width={80} height={80} />
                                        </div>
                                        <div className="about_us">
                                            <div className="d-flex">
                                                <img src={item.src} alt="" className="d-block d-md-none" width={40} height={40} />
                                                <h6 className='fw-bold '>{item.title}</h6>
                                            </div>

                                            <p className=' text-muted lh-md-lg ' style={{ textAlign: "justify", fontSize: ".7em" }}>{item.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>

            </HomePageLayout>

            {routingAbout ? <Testimonial /> : <></>}
            {routingAbout ? <AllMentor /> : <></>}




        </main>
    )
}
