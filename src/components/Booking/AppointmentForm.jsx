import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Col, Row } from "react-bootstrap";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useQuery } from 'react-query';
import "./appointment.scss";
import AppointmentModel from './AppointmentModel';
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
            <div className="datePicker d-flex gap-3 flex-column flex-md-row justify-content-center  align-items-center align-items-md-start">
                <div className="calender">
                    <div className="fade-up">
                        <div className=' p-md-5'>
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
                        <Row xs={2} md={3} className="">
                            {appointmentData?.map((_, idx) => (
                                <Col key={idx} className=" ">
                                    <div className="d-block appointCard p-3   " >
                                        <div
                                            className="position-relative appointContent text-center pt-4 d-flex flex-column justify-content-between   h-100  border-4 border-dark rounded"
                                        >
                                            {/* <img src={_.avatar} alt="" className='h-100 w-100 rounded' /> */}
                                            <div className="">
                                                <h5 className='d-block text-dark title'>{_.name}</h5>
                                                <p className='text-dark fw-bold fs-md-4 text-muted slot'>10 slots available</p>
                                                <p className='text-dark fw-bold fs-md-4 price'>${_.price} - {_.price + 100}</p>

                                                <AppointmentModel
                                                    show={modalShow}
                                                    date={date}
                                                    slots={_.slots}
                                                    setModalShow={setModalShow}
                                                    onHide={() => setModalShow(false)}
                                                />
                                            </div>
                                            <div className="overlayButton">
                                                <button className='appointBtn booking rounded-pill  p-1  px-3 py-md-2 px-md-5 fw-bolder' onClick={() => setModalShow(true)}>Book Now</button>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>


                </div>

            </div>



        </div>
    )
}
