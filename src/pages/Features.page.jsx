import { Outlet } from 'react-router'
import BookNowBadge from '../components/BookNowBadge/BookNowBadge'
import UpperNav from '../components/HeroSaction/UpperNav'
import Navbar from '../components/Navbar/Navbar'
export default function Features() {

  return (
    <div className='position-relative'>
      <BookNowBadge />
      <div className="features">
        <div className=" container px-5 pb-3">
          <UpperNav />
          <Navbar />
        </div>

      </div>

      <div className="feature_outlet">
        <Outlet />
      </div>

    </div>
  )
}
