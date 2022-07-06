import React from 'react'
import { GiBeard } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import { BsFillSuitHeartFill, BsShop } from 'react-icons/bs'
import {Row,Col} from 'react-bootstrap'
import './Stats.scss'
export default function Stats() {
    const data = [
        { title: "Happy Clients", icon: <GiBeard />, state: 1200 },
        { title: "Staffs", icon: <GiBeard />, state: 10 },
        { title: "Shops", icon: <GiBeard />, state: 3 },
        { title: "Likes", icon: <GiBeard />, state: 423423 }
    ]
    return (
        <div className='container mt-5 '>
            <Row className="mx-auto border rounded">
                {
                    data.map((item, index) => (
                        <Col className="shadow-sm p-4 text-center  statCard" key={index}>
                            <p className=' fw-bolder display-6'>{item.state}</p>
                            <p className='text-primary fs-3'>{item.icon}</p>
                            {/* <hr /> */}
                            <h3 className='text-uppercase'>{item.title}</h3>

                        </Col>
                    ))
                }

            </Row>
        </div>
    )
}
