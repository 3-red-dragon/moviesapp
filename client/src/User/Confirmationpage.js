import React, { useState, useEffect } from "react";
import { useNavigate, useParams,Link } from 'react-router-dom';
import './Confirmationpage.css'
const Confirmationpage = ({ _id }) => {
  const navigate = useNavigate()
  const {selected, id, totalPrice } = useParams();
  const str = selected;
  const count = str?.split(',');
  const number = count?.length;
  const value = Number(totalPrice);
  const gov = 37;
  const gst = 9;
  const total = gov + gst + value;
  let time = new Date().toLocaleString();
  const [cTime, setTime] = useState(time);
  useEffect(() => {
    setInterval(() => {
      setTime(time);
    }, 1000);
  });
  return (<div style={{ backgroundImage: `url("")`, 
  display: 'block', backgroundSize: 'cover',backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
    <div className="confirmation">
      <div className="confirmation_part">
        <div className="confirmation_value">
          <h2 className="confirmation_name">{id}</h2>
        </div>
        <h4 className="confirmation_time"> {cTime}</h4>
        <hr />
        <h3 className="confirmation_seat">Seat Info</h3>
        <div className="conirmation_seats">
          <h3 >{selected}</h3>
        </div>
        <div className="conirmation_price">
          <div className="conirmation_prices">
            <div className="confirmation_tickets">
              <h4>Tickets</h4>
              <h4 className="confirmation_count">{number}</h4>
            </div>
            <h4>INR {totalPrice}</h4>
          </div>
          <div className="conirmation_prices">
            <h4>Conv.Fees</h4>
            <h4>INR {gov}</h4>
          </div>
          <div className="conirmation_prices">
            <h4>GST</h4>
            <h4>INR {gst}</h4>
          </div>
          <div className="conirmation_prices">
            <h4>State GST Number</h4>
            <h4>29AAACP4526D1M</h4>
          </div>
        </div>
        <div className="conirmation_total">
          <h1>Total (INR)</h1>
          <h1>{total}</h1>
        </div>
      </div>
    </div>
    <Link to={`/ticketpage/${selected}/${total}`} className="text-decoration-none">
      <div onClick={()=>{alert('Your seats are confirmed ')}} className="confirmation_payment">
        <h3>Confirm and pay</h3>
      </div>
    </Link>
  </div>
  );
};

export default Confirmationpage;
