import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
const MovieDetails = () => {
  const [movies, setmovie] = useState([])
  const id = useParams().id;
  useEffect(() => {
    fetch(`http://localhost:8000/movies/${id}`)
      .then(Response => Response.json())
      .then(data => setmovie(data.movie))
  }, [id]);
  
  return (
    <div>
      <Header />
      <div className='container-fluid'>
        <div className='row mt-3'>
          <img src={movies.image2} alt='' className='poster' />
        </div>
      </div>
      <Container className='mb-5'>
        <Row>
          <Col lg={3} md={4} xs={8} className="data text-center mt-5 mb-5">
            <div className="card">
              <div className='mt-3'>
                <img src={movies.image} alt='' style={{ width: "200px", height: "250px" }} />
              </div>
              <div className='mt-3'>
                <h6>{movies.name}</h6>
                <Link to={`/movies/${id}/trailer`} className="text-decoration-none">
                  <Button className='btn btn-danger mb-3 d-flex mx-auto'><BsFillPlayCircleFill className='mt-1' />Watch Trailer</Button>
                </Link>
                <Link to={`/theatres`} >
                  <Button className='btn btn-danger mb-3'>Book Tickets</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <h4 className='mt-3'>About the Movie</h4>
          <p>{movies.about}</p>
        </Row>
        <hr></hr>
        <h2 className='mb-3'>Cast</h2>
        <Row>
          <Col lg='2' md='2' xs={4}>
            <img src={movies.cast1}
              className='img-fluid rounded-circle'
              alt='' style={{ "width": "20rem", "height": "11rem" }}
            />
            <p className='text-center'>{movies.castName1}</p>
          </Col>
          <Col lg='2' md='2' xs={4}>
            <img src={movies.cast2}
              className='img-fluid rounded-circle'
              alt='' style={{ "width": "20rem", "height": "11rem" }}
            />
            <p className='text-center'>{movies.castName2}</p>
          </Col>
          <Col lg='2' md='2' xs={4}>
            <img src={movies.cast3}
              className='img-fluid rounded-circle'
              alt='' style={{ "width": "20rem", "height": "11rem" }}
            />
            <p className='text-center'>{movies.castName3}</p>
          </Col>
          <Col lg='2' md='2' xs={4}>
            <img src={movies.cast4}
              className='img-fluid rounded-circle'
              alt='' style={{ "width": "20rem", "height": "11rem" }}
            />
            <p className='text-center'>{movies.castName4}</p>
          </Col>
          <Col lg='2' md='2' xs={4}>
            <img src={movies.cast5}
              className='img-fluid rounded-circle'
              alt='' style={{ "width": "20rem", "height": "11rem" }}
            />
            <p className='text-center'>{movies.castName5}</p>
          </Col>
          <Col lg='2' md='2' xs={4}>
            <img src={movies.cast6}
              className='img-fluid rounded-circle'
              alt='' style={{ "width": "20rem", "height": "11rem" }}
            />
            <p className='text-center'>{movies.castName6}</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div >
  )
}
export default MovieDetails;