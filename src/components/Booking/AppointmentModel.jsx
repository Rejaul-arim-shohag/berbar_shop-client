import moment from 'moment';
import { Col, Modal, Row } from 'react-bootstrap';
import { AiOutlineFieldTime, AiOutlineScissor } from 'react-icons/ai';
import { BsCalendar2Day, BsFillEnvelopeFill, BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { TbOld } from 'react-icons/tb';
import swal from 'sweetalert';
import "./appointment.scss";

export default function AppointmentModel(props) {
    // console.log('date',props.date);
    function submitHandler(e) {
        e.preventDefault();
        swal("Congratulations!", "You have successfully set your hair appointment. ","success")
        .then(()=>{
            props.setModalShow(s => !s)
        })
        
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='border-0'
        >
            <Modal.Header closeButton>
                <h4 className="modal_title"> Set an appointment</h4>
            </Modal.Header>
            <Modal.Body className='pb-5'>
                <form className="row gap-3 was-validated" novalidate onSubmit={submitHandler}>
                    <Row xs={1} md={2} className="mx-auto">
                        <Col class="input-group  ">
                            <label htmlFor="" className="form-label appointLabel">Service :</label>
                            <div className="input-group">
                                <span class="input-group-text" id="basic-addon1"> <AiOutlineScissor /> </span>
                                <input type="text" class="form-control" value="Haircuts and Styling" readOnly aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </Col>
                        <Col class="input-group  ">
                            <label htmlFor="" className="form-label appointLabel">Date :</label>
                            <div className="input-group">
                                <span class="input-group-text" id="basic-addon1"> <IoCalendarNumberOutline /> </span>
                                <input type="text" class="form-control" value={moment(props.date).format('Do MMMM, YYYY')} readOnly aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </Col>
                        <Col class="input-group  ">
                            <label htmlFor="" className="form-label appointLabel">Weekday :</label>
                            <div className="input-group">
                                <span class="input-group-text" id="basic-addon1"> <BsCalendar2Day /> </span>
                                <input type="text" class="form-control" value={moment(props.date).format('dddd')} readOnly aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </Col>
                        <Col class="input-group  ">
                            <label htmlFor="" className="form-label appointLabel">Slot :</label>
                            <div className="input-group">
                                <span class="input-group-text" id="basic-addon1"> <AiOutlineFieldTime /> </span>
                                {/* <input type="text" class="form-control" value="Haircuts and Styling" readOnly aria-label="Username" aria-describedby="basic-addon1" /> */}
                                <select id="inputState" className="form-select">
                                    {
                                        props.slots.map((slot, index) => (
                                            <option key={index}>{slot}</option>
                                        ))
                                    }

                                </select>
                            </div>
                        </Col>


                    </Row>
                    <Row xs={1} md={2} className=" mx-auto">
                        <Col class="input-group  ">
                            <label htmlFor="" className="form-label appointLabel">Name :</label>
                            <div className="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"> <BsFillPersonFill /> </span>
                                <input type="text" class="form-control" placeholder="Rabbil Hasan" required aria-label="name" aria-describedby="basic-addon1" />
                            </div>
                        </Col>
                        <Col class="input-group  ">
                            <label htmlFor="" className="form-label appointLabel">Age :</label>
                            <div className="input-group">
                                <span class="input-group-text" id="basic-addon1"> <TbOld /> </span>
                                <input type="number" class="form-control" placeholder="30" required aria-label="age" aria-describedby="basic-addon1" />
                            </div>
                        </Col>
                        <Col class="input-group   ">
                            <label htmlFor="" className="form-label appointLabel">Phone Number :</label>
                            <div className="input-group">
                                <span class="input-group-text" id="basic-addon1"> <BsFillTelephoneFill /> </span>
                                <input type="number" class="form-control" placeholder="0123456789" required aria-label="phone" aria-describedby="basic-addon1" />
                            </div>
                        </Col>
                        <Col class="input-group  ">
                            <label htmlFor="" className="form-label appointLabel">Email :</label>
                            <div className="input-group">
                                <span class="input-group-text" id="basic-addon1"> <BsFillEnvelopeFill /> </span>
                                <input type="email" class="form-control" placeholder="rabbil.hasan@gmail.com" required aria-label="email" aria-describedby="basic-addon1" />
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <button className='navBtn mt-5 appointBtn booking rounded-pill fw-bold py-2 px-5 float-end' >Confirm the appointment</button>
                    </div>
                </form>
            </Modal.Body>

        </Modal>
    )
}
