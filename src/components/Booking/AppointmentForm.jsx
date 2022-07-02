import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Card, Col, Row } from "react-bootstrap";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useQuery } from 'react-query';
import AppointmentModel from './AppointmentModel';
import "./appointment.scss"
export default function AppointmentForm() {
    const [modalShow, setModalShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const today = new Date();
    let footer = <p>Please pick a day.</p>;
    const [appointmentData, setAppointmentData] = useState();
    const { isLoading, error, data, isFetching } = useQuery("appointment", () =>
        axios.get(
            "/data/service.json"
        ).then(({ data }) => data)
    );

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => setAppointmentData(data), [data])
    if (date) {
        footer = <p>You picked {moment(date).format('Do MMMM, YYYY')}.</p>;
    }
    const css = `
        .my-selected:not([disabled]) { 
            font-weight: bold; 
            border: 2px solid  #000133;
        }
        .my-selected:hover:not([disabled]) { 
            border-color: #000133;
            color: #000133;
        }
        .my-today { 
            font-weight: bold;
            font-size: 140%; 
            color: red;
        }
        `;
    // console.log('date', date);
    return (
        <div>
            <div className="datePicker d-flex gap-3 flex-column flex-md-row">
                <div className="calender">
                    <div className="fade-up">
                        <div className=' p-5'>
                            <>
                                <style>{css}</style>
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    disabled={{ before: today }}
                                    onSelect={setDate}
                                    modifiersClassNames={{
                                        selected: 'my-selected',
                                        today: 'my-today'
                                    }}
                                    modifiersStyles={{
                                        disabled: { fontSize: '75%' }
                                    }}
                                    footer={footer}
                                />
                            </>
                        </div>
                    </div>
                </div>
                <div className="slots text-left">
                    <h6 className='text-uppercase'>Available appointment on {moment(date).format('Do MMMM, YYYY')}</h6>
                    <hr className="divider-horizontal " />

                    <div data-aos="fade-up">
                        <Row xs={2} md={3} className="g-md-3 g-2">
                            {appointmentData?.map((_, idx) => (
                                <Col key={idx} className="p-3">
                                    <Card>
                                        <div className="d-block appointmentCard" >
                                            <div
                                                className="position-relative text-center pt-4   h-100  border-4 border-dark rounded"
                                            >
                                                {/* <img src={_.avatar} alt="" className='h-100 w-100 rounded' /> */}
                                                <h5 className='d-block text-dark '>{_.name}</h5>
                                                <p className='text-dark fw-bold fs-md-4 text-muted'>10 slots available</p>
                                                <p className='text-dark fw-bold fs-md-4 '>${_.price} - {_.price + 100}</p>

                                                <AppointmentModel
                                                    show={modalShow}
                                                    date={date}
                                                    slots={_.slots}
                                                    onHide={() => setModalShow(false)}
                                                />
                                                <div className="overlayButton">
                                                    <button className='navBtn booking rounded-pill fw-bold py-2 px-5 ' onClick={() => setModalShow(true)}>Book Now</button>

                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>


                </div>

            </div>



        </div>
    )
}
