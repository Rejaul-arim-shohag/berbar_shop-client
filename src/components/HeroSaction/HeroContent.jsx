import React from 'react'
import StarRatings from 'react-star-ratings'

export default function HeroContent() {

  return (
    <main className='d-flex flex-column flex-md-row'>
      <div className="barber-title text-light d-flex justify-content-center py-5 align-items-start flex-column gap-4">
        <h2 className='display-md-5 w-75 text-uppercase fw-bold'>HairStyle is a  Must try Fashion  for all Occasion</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed </p>
        <button className='appointment-btn btn btn-outline-light rounded-pill py-2 px-4 fw-bold '>Book Appointment</button>

      </div>
      <div className="feature-card py-5 ">
        <div className="content  bg-light p-5 pb-md-0 " style={{ borderRadius: "20pt" }}>
          <div className=" d-flex justify-content-center align-items-center">
            <div className="w-50 gap-md-2 d-flex flex-column heroContent">
              <h3 className=' fs-md-3'>Hair Cut Service Name Here</h3>
              <span className=''>
                <StarRatings
                  rating={5}
                  starRatedColor="blue"
                  starDimension='15px'
                  numberOfStars={5}
                  name='rating'
                />
              </span>
              <div className="d-none d-md-block">
                <h3 className='fw-normal'>$ 1000</h3>
                <p className=' details'>Nullam suscipit id ante bibendum bibendum. Vivamus interdum gravida justo id venenatis. tempus velit sed, lobortis </p>
                <button className='navBtn booking rounded-pill fw-bold py-2 px-5 '>Book Now</button>
              </div>

            </div>
            <div className="img w-50 ">
              <img src="/images/HeroPhoto.png" alt="" height="100%" width="100%" className='img-fluid' />
            </div>
          </div>
          <div className="d-block d-md-none">
            <h3 className='fw-normal'>$ 1000</h3>
            <p className=' details'>Nullam suscipit id ante bibendum bibendum. Vivamus interdum gravida justo id venenatis. tempus velit sed, lobortis </p>
            <button className='navBtn booking rounded-pill fw-bold px-4 py-2 w-100 w-auto'>Book Now</button>
          </div>
        </div>



      </div>

    </main>
  )
}
