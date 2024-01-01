import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col } from "react-bootstrap";
const Trailer = () => {
  const [movies, setMovies] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    fetch(`http://localhost:8000/movies/${id}`)
      .then((Response) => Response.json())
      .then((data) => setMovies(data.movie));
  }, [id]);
  console.log(movies);
  return (
    <div>
      <Header />
      <div className="bg-light">
        <Container>
          <Row>
            <Col className="col-md-9 justify-content-md-center d-grid mx-auto bg-white mb-5">
              <h4 className="mt-3 text-danger">{movies.name}</h4>
              <hr></hr>
              <h4>Telugu</h4>
              <hr></hr>
              <ReactPlayer controls url={movies.trailer} />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Trailer;


