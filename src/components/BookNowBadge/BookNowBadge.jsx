import React from 'react'
import { TbMessageCircle2 } from 'react-icons/tb'
import { Link } from "react-router-dom"
import useScrollPosition from '../../hooks/useScrollPosition'
import "./bookNowBadge.scss"
export default function BookNowBadge({ home }) {
  const scrollPosition = useScrollPosition()

  return (
    <div className={`bookNowBadge position-fixed ${scrollPosition > 0 && home ? "  d-block" : ""}`}>
      <Link to={`/booking`} className="navBtn booking rounded-circle fw-bolder p-2 py-0 pb-2 fs-3"><TbMessageCircle2/></Link>
    </div>
  )
}
