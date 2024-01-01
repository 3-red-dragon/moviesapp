import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Movie from './Movie'
const Movies = () => {
    const [movies, setMovies] = useState();
    useEffect(() => {
        fetch("http://localhost:8000/movies")
            .then(Response => Response.json())
            .then(data => setMovies(data))
    }, []);
    
    return (
        <>
         <Container>
            <h3 className="mt-5">Recent Movies</h3>
            <Row>
                {movies &&
                    movies.map((movie, i) => (
                        <Col lg={4} md={6} xs={12}>
                            <Movie movie={movie} />
                        </Col>
                    ))}
            </Row>
    </Container >
        </>
    );
};
export default Movies;





