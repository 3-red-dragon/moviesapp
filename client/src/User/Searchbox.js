import React, { useState,useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Movie from './Movie'

const Searchbox = ({ history }) => {
    const [movies, setMovies] = useState();
    const [input,setInput] =useState("")
    useEffect(() => {
        fetch("http://localhost:8000/movies")
            .then(Response => Response.json())
            .then(data => setMovies(data))
    }, []);
    
  return (
    <Container>
            <div className="text-center">
                <input
                    type="text"
                    className="w-25 mb-3 py-2 ps-3"
                    style={{ borderRadius: "5px" }}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search Movies" 
                />
            </div>
            <Row>
                {movies &&
                    movies.filter((val) => {
                        if (input == "") {
                            return val;
                        } else if (
                            val.name.toLowerCase().includes(input.toLowerCase())
                        ) {
                            return val;
                        }
                    }).map((movie, i) => (
                        <Col lg={4} md={6} xs={12}>
                            <Movie movie={movie} />
                        </Col>
                    ))}
            </Row>
        </Container >
  )
}
export default Searchbox
