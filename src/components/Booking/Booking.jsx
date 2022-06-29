import { useEffect } from "react"
import "./Booking.scss"


export default function Booking() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <form className="row">
      <div className="row g-3 col-md-8 mx-auto ">
        <div className="col-md-6">
          <label htmlFor="inputBooking4" className="form-label">Booking Date</label>
          <input required type="date" className="form-control" id="inputBooking4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">

            <option>10AM - 11AM</option>
            <option>12PM - 02PM</option>
            <option>02PM - 03PM</option>
            <option>03PM - 04PM</option>
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress" className="form-label">Name</label>
          <input required type="text" className="form-control" id="inputAddress" placeholder="Rabbil Hasan" />
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress2" className="form-label">Hair Style Name</label>
          <input required type="text" className="form-control" id="inputAddress2" placeholder="Waivy Hear" />
        </div>
        <div className="col-6">
          <label htmlFor="inputCity" className="form-label">Price</label>
          <input required type="number" className="form-control" id="inputCity" />
        </div>

        <div className="col-6">
          <label htmlFor="inputZip" className="form-label">Phone Number</label>
          <input required type="number" className="form-control input-btn-font-size-sm" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input required className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              I am agree with the terms & conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn  text-uppercase text-light" style={{ background: "#9f0078", float: "right" }}>Confirm the appointment</button>
        </div>
      </div>
    </form>
  )
}
