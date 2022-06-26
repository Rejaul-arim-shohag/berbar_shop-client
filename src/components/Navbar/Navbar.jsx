import React, { useState } from 'react'
import { Button, OffcanvasHeader, Offcanvas, OffcanvasBody } from 'reactstrap'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    let activeStyle = {

    };

    const menu = [
        { name: 'Home', href: '/', current: true },
        { name: 'Service', href: '/service', current: true },
        { name: 'Team', href: '/team', current: true },
        { name: 'Price', href: '/price', current: true },
        { name: 'Reviews', href: '/reviews', current: true },
        { name: 'About', href: '/about', current: !true },
        { name: 'Contact', href: '/contact', current: !true },
        // { name: 'Registration', href: '/registration', current: !true },
    ]
    return (
        <nav className='d-flex justify-content-between align-items-center pt-1'>

            <div className="mt-1 mt-md-2 w-100">
                <nav class="d-flex justify-content-between align-items">
                    <div className="">
                        <Link to="/" class="navbar-brand relative block">
                            <img src="/images/logo.png" alt="" height="34px" width="120" />
                        </Link>
                    </div>
                    <div className="d-none d-md-block ">
                        <ul className='d-flex gap-3 text-uppercase justify-content-center align-items-center mt-1'>
                            {
                                menu.map((item, index) => (
                                    <li>
                                        <NavLink
                                            to={item.href}
                                            style={({ isActive }) =>
                                                isActive ? activeStyle : undefined
                                            }
                                            className="text-decoration-none text-light"
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div className="d-none d-md-block">
                        <button className='navBtn rounded-pill fw-bold py-2 px-5'>Sign Up</button>
                    </div>
                    {/* <div className="">
                            <form class="d-flex d-md-none mt-3">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="navBtn " type="submit">Search</button>
                            </form>
                        </div> */}

                </nav>
            </div>
            <div className='position-relative d-md-none'>
                {/* Mobile version */}
                <div className="">
                    <Button
                        outline
                        className='ms-auto shadow-none float-end text-light border-0 outline-0 bg-transparent burgerMenu'
                        onClick={() => setToggle(prev => !prev)}
                    >
                        <GiHamburgerMenu className='display-6' />
                    </Button>
                </div>
                <Offcanvas toggle={() => setToggle(prev => !prev)} isOpen={toggle} className="" style={{background:"#03203C"}}>
                    <OffcanvasHeader toggle={() => setToggle(prev => !prev)} >
                        <div className="">
                            <Link to="/" class="navbar-brand relative block">
                                <img src="/images/logo.png" alt="" height="34" width="120" />
                            </Link>
                        </div>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <div className=" d-md-block ">
                            <ul className='vstack gap-2 text-uppercase justify-content-center align-items-center mt-1'>
                                {
                                    menu.map((item, index) => (
                                        <li>
                                            <NavLink
                                                to={item.href}
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                                className="text-decoration-none text-light btn btn-secondary"
                                            >
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </nav>
    )
}
