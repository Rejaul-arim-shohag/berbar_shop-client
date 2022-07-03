import React from 'react'
import { Link } from "react-router-dom"
import useScrollPosition from '../../hooks/useScrollPosition'
import "./bookNowBadge.scss"
export default function BookNowBadge() {
  const scrollPosition = useScrollPosition()

  return (
    <div className={`bookNowBadge  ${scrollPosition > 0 ? " position-fixed animate__animated animate__fadeInDown d-block":"d-none"}`}>
      <Link to={`/booking/1`} className="navBtn booking rounded fw-bolder py-3 px-5">Set an appointment</Link>
    </div>
  )
}
