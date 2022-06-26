import React from 'react'
import StarRatings from 'react-star-ratings'

export default function HeroContent() {

  return (
    <main className='d-flex flex-column flex-md-row'>
      <div className="barber-title text-light d-flex justify-content-center py-5 align-items-start flex-column gap-4">
        <h2 className='display-5 w-75 text-uppercase fw-bold'>HairStyle is a  Must try Fashion  for all Occasion</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p>
        <button className='appointment-btn btn btn-outline-light py-2 px-4 fw-bold'>Book Appointment</button>

      </div>
      <div className="feature-card py-5">
        <div className="content bg-light p-5 pb-0 d-flex " style={{ borderRadius: "20pt" }}>
          <div className="w-50 gap-2 d-flex flex-column">
            <h3 className=''>Hair Cut Service Name Here</h3>
            <StarRatings
              rating={5}
              starRatedColor="blue"
              starDimension='15px'
              numberOfStars={5}
              name='rating'
            />
            <h3 className='fw-normal'>$ 1000</h3>
            <p className=' details'>Nullam suscipit id ante bibendum bibendum. Vivamus interdum gravida justo id venenatis. tempus velit sed, lobortis </p>
            <button className='navBtn booking rounded-pill fw-bold py-2 w-100 w-auto'>Book Now</button>
          </div>
          <div className="img w-50">
            <img src="/images/HeroPhoto.png" alt="" height="100%" width="100%" className='img-fluid' />
          </div>
        </div>


      </div>

    </main>
  )
}
