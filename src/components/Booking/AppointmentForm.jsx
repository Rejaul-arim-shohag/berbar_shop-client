import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Col, Row } from "react-bootstrap";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { readSlotList } from '../../APIRequest/ApiRequest';
import "./appointment.scss";
import AppointmentModel from './AppointmentModel';

export default function AppointmentForm() {
    let navigate = useNavigate()
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
        footer = <p>You picked <span style={{ fontSize: "17px", fontWeight: "700" }}>{moment(date).format('Do MMMM, YYYY')}</span>.</p>;
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


    // const defaultData = [
    //     { id: 10, name: "08:00 - 09:00", isChecked: false },
    //     { id: 12, name: "09:00 - 10:00", isChecked: false },
    //     { id: 35, name: "10:00 - 11:00", isChecked: false },
    //     { id: 232, name: "11:00 - 12:00", isChecked: false },
    //     { id: 56756, name: "12:00 - 13:00", isChecked: false }
    // ];


    function handleBooking(id) {
        navigate("/booking/"+id)
      
        // const modifiedData = [...Slotdata];
        // modifiedData.map((item) => {
        //     item.isChecked = item.id === +value;
        //     return item;
        // });
        // setData(modifiedData);
    }
    // const [apiCallData, setApiCallData] = useState(defaultData);
    const [Slotdata, setData] = useState([]);
    useEffect(() => {
        const formatDate = moment(date).format();
        const dateSplit = formatDate.split("T")
        console.log("date change", dateSplit[0])
        readSlotList(dateSplit[0])
            .then((result) => {
                setData(result.data)


            })
    }, [date])

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
                    <h6 className='text-uppercase'>Available appointment on <span style={{ fontSize: "20px", fontWeight: "700" }}>{moment(date).format('Do MMMM, YYYY')}</span></h6>
                    <hr className="divider-horizontal " />

                    <div data-aos="fade-up">

                        <div>
                            {Slotdata.map((item, index) => (
                                <div key={item._id} className="d-flex justify-content-between my-0">

                                    <div className="d-flex justify-content-center">
                                        {/* <input
                                            className=""
                                            type="Checkbox"
                                            value={item._id}
                                            onChange={(e) => handleChange(e)}
                                            checked={item.isBooked}
                                        /> */}

                                        <div className="mx-2">
                                            {
                                                item.isBooked ? <button disabled className="btn btn-primary btn-sm d-flex justify-content-center my-1 mx-3" >
                                                    <p className="mt-2" style={{ margin: "0", padding: "0" }}> {item.start_time.slice(11, 16)} -</p>
                                                    <p className="mt-2" style={{ margin: "0", padding: "0" }}> {item.end_time.slice(11, 16)}</p>
                                                </button> : <button onClick={()=>handleBooking(item._id)} className="btn btn-primary btn-sm d-flex justify-content-center my-1 mx-3" >
                                                    <p className="mt-2" style={{ margin: "0", padding: "0" }}> {item.start_time.slice(11, 16)} -</p>
                                                    <p className="mt-2" style={{ margin: "0", padding: "0" }}> {item.end_time.slice(11, 16)}</p>
                                                </button>
                                            }
                                        </div>

                                    </div>
                                    {
                                        item.isBooked?<p className="mt-2 text-danger">Unavailable</p>:<p className="mt-2">Available</p>
                                    }
                                </div>
                            ))}
                        </div>
                        <Row xs={2} md={3} className="">


                            {appointmentData?.map((_, idx) => (
                                <Col key={idx} className=" ">
                                    {/* <div className="d-block appointCard p-3   " >
                                        <div
                                            className="position-relative appointContent text-center pt-4 d-flex flex-column justify-content-between   h-100  border-4 border-dark rounded"
                                        >
                                            <img src={_.avatar} alt="" className='h-100 w-100 rounded' />
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
                                            
                                        </div>
                                    </div> */}
                                </Col>
                            ))}
                        </Row>
                    </div>


                </div>

            </div>



        </div>
    )
}
