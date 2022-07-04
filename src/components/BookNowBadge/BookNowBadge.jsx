import React from 'react'
import { Link } from "react-router-dom"
import useScrollPosition from '../../hooks/useScrollPosition'
import "./bookNowBadge.scss"
export default function BookNowBadge({ home }) {
  const scrollPosition = useScrollPosition()

  return (
    <div className={`bookNowBadge position-fixed ${scrollPosition > 0 && home ? "  d-block" : ""}`}>
      <Link to={`/booking/1`} className="navBtn booking rounded-pill fw-bolder py-3 px-5">Set an appointment</Link>
    </div>
  )
}
