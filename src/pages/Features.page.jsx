import React, { useEffect, useRef } from 'react'
import Footer from '../components/Footer/Footer'
import UpperNav from '../components/HeroSaction/UpperNav'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
export default function Features() {
  const scrollRef = useRef();

   // scrollRef.current.scrollTo(0, 0)
    // if (typeof window != 'undefined') {
    //   window.scrollTo(0, 0)
    // }
  return (
    <>
      <div className="features" ref={scrollRef}>
        <div className=" container px-5 pb-5">
          <UpperNav />
          <Navbar />
        </div>
      </div>
      <Outlet />


    </>
  )
}
