import React from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
const AMovie = (props) => {
  const { _id, name, description, image, } = props.movie;
  const history = useNavigate();
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8000/movies/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
  };
  return (
    <div>
      <div className="card text-center" style={{ margin: "40px", padding: "20px", }}>
        <Link to={`/movies/${_id}`} style={{ textDecoration: "none", color: "black" }}>
          <img src={image} alt={name} style={{ width: "200px", height: "250px" }} />
        </Link>
        <h4>{name}</h4>
        <p>{description}</p>
        <Link to={`/movies/${_id}/update`}>
          <Button className='btn btn-success'>
            Update
          </Button>
        </Link>
        <Button onClick={deleteHandler} className='btn btn-danger d-grid mx-auto mt-3'>
          Delete
        </Button>
      </div>
    </div>
  );
};
export default AMovie;