import React from 'react'
import Footer from '../components/Footer/Footer'
import UpperNav from '../components/HeroSaction/UpperNav'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
export default function Features() {
  return (
    <>
      <div className="features">
        <div className=" container px-5 pb-5">
          <UpperNav />
          <Navbar />
        </div>
      </div>
      <Outlet />
     

    </>
  )
}
