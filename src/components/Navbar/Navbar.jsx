import 'animate.css'
import { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { AiFillContacts, AiFillSetting, AiOutlineControl, AiOutlineHome, AiOutlineRight } from 'react-icons/ai'
import { GiHamburgerMenu, GiMoneyStack } from 'react-icons/gi'
import { Link, NavLink } from "react-router-dom"
import useScrollPosition from '../../hooks/useScrollPosition'
import "./Navbar.scss"
export default function Navbar() {
    const [show, setShow] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const scrollPosition = useScrollPosition()



    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    let activeStyle = {

    };

  

    const menu = [
        { name: 'Home', href: '/', icon: <AiOutlineHome />, current: true },
        { name: 'Service', href: '/features/service', icon: <AiFillSetting />, current: true },
        { name: 'Gallery', href: '/features/gallery', icon: <GiMoneyStack />, current: true },
        { name: 'About', href: '/features/about', icon: <AiOutlineControl />, current: !true },
        { name: 'Contact', href: '/features/contact', icon: <AiFillContacts />, current: !true },
        // { name: 'Registration', href: '/registration', current: !true },
    ]
    return (
        <nav className={`d-flex justify-content-between align-items-center pt-1  ${scrollPosition > 0 ? "bg-dark navBar fixed-top px-3 py-2 animate__animated animate__fadeInDown":""}`}>

            <div className="mt-1 mt-md-2 w-100 ">
                <nav className="d-flex justify-content-between align-items ">
                    <div className="">
                        <Link to="/" className="navbar-brand relative block">
                            <img src="/images/logo.png" alt="" height="34px" width="120" />
                        </Link>
                    </div>
                    <div className="d-none d-md-block ">
                        <ul className='d-flex gap-3 text-uppercase justify-content-center align-items-center mt-1'>
                            {
                                menu.map((item, index) => (
                                    <li key={index}>
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
                            <form className="d-flex d-md-none mt-3">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="navBtn " type="submit">Search</button>
                            </form>
                        </div> */}

                </nav>
            </div>
            <div className='position-relative d-md-none'>
                {/* Mobile version */}
                <div className="">
                    <button
                        outline="false"
                        className='ms-auto shadow-none float-end text-light border-0 outline-0 bg-transparent burgerMenu'
                        onClick={toggleShow}
                    >
                        <GiHamburgerMenu className='display-6' />
                    </button>
                </div>
                <Offcanvas show={show} onHide={handleClose}  className="w-75 offCanvasMenu" >
                    <Offcanvas.Header closeButton closeVariant="white">
                        <div className="">
                            <Link to="/" className="navbar-brand relative block">
                                <img src="/images/logo.png" alt="" height="34" width="120" />
                            </Link>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className=" d-md-block ">
                            <ul className='d-flex flex-column  text-uppercase justify-content-start align-items-start mt-1'>
                                {
                                    menu.map((item, index) => (
                                        <li key={index} className='py-3 px-3 border border-secondary my-2 w-100 d-block sidebarItem d-flex justify-content-between align-items-center rounded-1' >
                                            {/* {item.icon} */}
                                            <NavLink
                                                to={item.href}
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                                className="text-decoration-none sideVa fw-bold block h-100 w-100"
                                                onClick={()=>handleClose()}
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
