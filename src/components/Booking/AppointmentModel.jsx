import { Modal, Button } from 'react-bootstrap'
import React from 'react'
import moment from 'moment';

export default function AppointmentModel(props) {
    // console.log('date',props.date);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Set an appointment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='pb-5'>
                <form className="row">
                    <div className="row g-3 col-md-8 mx-auto ">
                        <div className="col-md-6">
                            <label htmlFor="inputBooking4" className="form-label">Booking Date</label>
                            <p>{moment(props.date).format('Do MMMM, YYYY')}</p>
                            {/* <input required type="date" className="form-control" id="inputBooking4" /> */}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">Slot</label>
                            <select id="inputState" className="form-select">
                                {
                                    props.slots.map((slot,index)=>(
                                        <option key={index}>{slot}</option>   
                                    ))
                                }

                                {/* <option>10AM - 11AM</option>
                                <option>12PM - 02PM</option>
                                <option>02PM - 03PM</option>
                                <option>03PM - 04PM</option> */}
                            </select>
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputAddress" className="form-label">Name</label>
                            <input required type="text" className="form-control" id="inputAddress" placeholder="Rabbil Hasan" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputAddress2" className="form-label">Age</label>
                            <input required type="number" className="form-control" id="inputAddress2" placeholder="30" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputCity" className="form-label">Email</label>
                            <input required type="email" className="form-control" id="inputCity" placeholder='rabbil.hasan@gmail.com'/>
                        </div>

                        <div className="col-6">
                            <label htmlFor="inputZip" className="form-label">Phone Number</label>
                            <input required type="number" className="form-control input-btn-font-size-sm" id="inputZip" placeholder='0123456789'/>
                        </div>
                       
                   
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>

                <button className='navBtn booking rounded-pill fw-bold py-2 px-5 ' >Confirm the appointment</button>

            </Modal.Footer>
        </Modal>
    )
}
