import { useEffect } from 'react'
import { Outlet } from 'react-router'
import UpperNav from '../components/HeroSaction/UpperNav'
import Navbar from '../components/Navbar/Navbar'
export default function UtilitiesPage() {

   
    return (
        <>
            <div className="features">
                <div className=" container px-5 pb-5">
                    <UpperNav />
                    <Navbar />
                </div>
            </div>
            <div className="">
                <Outlet />
            </div>



        </>
    )
}
