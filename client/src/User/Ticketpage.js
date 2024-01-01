import React from "react";
import { useParams } from "react-router-dom";
import "./Ticketpage.css";

const Ticketpage=() =>{
    const {selected,total,} = useParams();
     const str = selected;
     const count = str?.split(",");
     const number = count?.length;
     
  return (
    <div className="final">
      <h5>Telugu</h5>
      <div className="final_parts">
        <div className="final_part">
          <h4>AUDI</h4>
          <h4>2</h4>
        </div>
        <div className="final_part">
          <h4>TICKETS</h4>
          <h4>{number}</h4>
        </div>
        <div className="final_part">
          <h4>SEAT</h4>
          <h4>{selected}</h4>
        </div>
      </div>
      <hr />
      <div className="final_footer">
        <div className="final_top">
          <div className="final_partDown">
            <div className="final_payment">
              <h5>Payment type</h5>
              <h5>CREDIT CARD</h5>
            </div>
            <div className="final_number">
              <h5>Confirmation</h5>
              <h5 style={{}}>#1455972</h5>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="final_bottom d-flex text-align-center">
        <h3 style={{color:"rgba(2,78,74)"}}>{"Total amount paid"}</h3>
        <h3 className="text-black">₹{total}</h3>
      </div>
    </div>
  );
}

export default Ticketpage;
