import { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { AiFillContacts, AiFillSetting, AiOutlineControl, AiOutlineHome, AiOutlineRight, AiOutlineTeam } from 'react-icons/ai'
import { FiMessageSquare } from 'react-icons/fi'
import { GiHamburgerMenu, GiMoneyStack } from 'react-icons/gi'
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    let activeStyle = {

    };

    const menu = [
        { name: 'Home', href: '/', icon: <AiOutlineHome />, current: true },
        { name: 'Service', href: '/service', icon: <AiFillSetting />, current: true },
        { name: 'Team', href: '/team', icon: <AiOutlineTeam />, current: true },
        { name: 'Price', href: '/price', icon: <GiMoneyStack />, current: true },
        { name: 'Reviews', href: '/reviews', icon: <FiMessageSquare />, current: true },
        { name: 'About', href: '/about', icon: <AiOutlineControl />, current: !true },
        { name: 'Contact', href: '/contact', icon: <AiFillContacts />, current: !true },
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
                                                isActive ? {} : {}
                                            }
                                            className="text-decoration-none  navItem"
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
                    <button
                        outline
                        className='ms-auto shadow-none float-end text-light border-0 outline-0 bg-transparent burgerMenu'
                        onClick={toggleShow}
                    >
                        <GiHamburgerMenu className='display-6' />
                    </button>
                </div>
                <Offcanvas show={show} onHide={handleClose}  className="w-75 offCanvasMenu" >
                    <Offcanvas.Header closeButton closeVariant="white">
                        <div className="">
                            <Link to="/" class="navbar-brand relative block">
                                <img src="/images/logo.png" alt="" height="34" width="120" />
                            </Link>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className=" d-md-block ">
                            <ul className='d-flex flex-column  text-uppercase justify-content-start align-items-start mt-1'>
                                {
                                    menu.map((item, index) => (
                                        <li className='py-3 px-3 border border-secondary my-2 w-100 d-block sidebarItem d-flex justify-content-between rounded-1' >
                                            {/* {item.icon} */}
                                            <NavLink
                                                to={item.href}
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                                className="text-decoration-none sideVa fw-bold  "
                                            >
                                                <span className='fs-4'>{item.icon}</span> <span> {item.name}</span>
                                            </NavLink>
                                            <AiOutlineRight className='navIcon fs-5' />
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </nav>
    )
}
