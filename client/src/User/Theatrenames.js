import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Container, Row, Button, Col } from 'react-bootstrap';
import Header from "./Header";
import '../App.css'
import Footer from "./Footer";

const Hallnames = () => {
    const [theatres, setTheatres] = useState();
    useEffect(() => {
        fetch("http://localhost:8000/theatres")
            .then(Response => Response.json())
            .then(data => setTheatres(data))
    }, []);
    
    return (
        <div>
            <Header/>
            <div className="bg-light">
                <Container>
                    {theatres &&
                        theatres.map((theatre, i) => (
                            <>
                                <Row>
                                    <Col md={3} lg={3} xs={6}>
                                        <img src={theatre.image} className='mt-4 mb-3' alt="theatreimage" style={{ "width": "10rem", "height": "7rem" }} />
                                    </Col>
                                    <Col md={2} lg={3} xs={6} className='mt-5'>
                                        <h3 className="text-danger"><a href={theatre.location} className="text-decoration-none">{theatre.name}</a></h3>
                                    </Col>
                                    <Col md={7} lg={6} xs={12} className='mt-5'>
                                        <Link to='/seating'>
                                            <Button variant="outline-warning text-black mx-2">{theatre.slot1}</Button>
                                            <Button variant="outline-warning text-black mx-2">{theatre.slot2}</Button>
                                            <Button variant="outline-warning text-black mx-2">{theatre.slot3}</Button>
                                            <Button variant="outline-warning text-black">{theatre.slot4}</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </>
                        ))}
                </Container >
                <Footer/>
            </div>
        </div>
    );
};
export default Hallnames;





