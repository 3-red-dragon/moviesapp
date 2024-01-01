import { Container, Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from "react";
import AMovie from './AMovie'
const Amovies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/movies")
            .then(Response => Response.json())
            .then(data => setMovies(data))
    }, []);
    
    return (
        <div className='bg-light'>
            <Container>
                <Row>
                    {movies &&
                        movies.map((movie, i) => (
                            <Col lg={4} md={6} xs={12}>
                                <div>
                                    <AMovie movie={movie} />
                                </div>
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};
export default Amovies;