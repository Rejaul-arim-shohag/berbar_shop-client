import React, { useState } from 'react'
import { Button, OffcanvasHeader, Offcanvas, OffcanvasBody } from 'reactstrap'
import { GiHamburgerMenu } from 'react-icons/gi'


export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className='position-relative d-md-none'>
                {/* Mobile version */}
                <div className="">
                    <Button
                        outline
                        className='ms-auto mt-4 shadow-none float-end text-light border-0 outline-0 bg-transparent burgerMenu'
                        onClick={() => setToggle(prev => !prev)}
                    >
                        <GiHamburgerMenu className='display-6' />
                    </Button>
                </div>
                <Offcanvas toggle={() => setToggle(prev => !prev)} isOpen={toggle}>
                    <OffcanvasHeader toggle={() => setToggle(prev => !prev)}>
                        Offcanvas
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <strong>
                            This is the Offcanvas body.
                        </strong>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
            <div className="">
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand">Navbar</a>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
}
