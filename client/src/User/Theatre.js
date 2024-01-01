import React, { useState} from "react";
import { useNavigate} from "react-router-dom";
import { FaArrowCircleRight } from 'react-icons/fa'
import './Threater.css'
import Seats from "./Seats";
function Theatre() {
  const navigate=useNavigate("")
  const [selected, setSelected] = useState([])
  const price = 300;
  const totalPrice = price * selected.length;
  
  return (
    <div className="theatre bg-dark" style={{width:"100vw",height:"100vh"}}>
      <Seats setSelected={setSelected} />
      {selected.length !== 0 ? (
        <>
          <div className="theatre_bottom">
            <>
              <span>
                <h3>Seats : {selected.toString()}</h3>
              </span>
              <div className="theatre_price">
                <h3>Total INR</h3>
                <h1>₹{totalPrice}</h1>
              </div>
            </>
          </div>
          <div className="theatre_footer">
            <FaArrowCircleRight
              onClick={() =>
                navigate(
                  `/confirmation/${selected}/${totalPrice}`
                )
              }
              className="theatre_icon"
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Theatre;
