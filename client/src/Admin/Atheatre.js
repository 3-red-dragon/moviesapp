import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Button, Col } from 'react-bootstrap';
const Atheatre = (props) => {
    const [theatres, setTheatres] = useState();
    const { _id, name, price, location, image, slot1, slot2, slot3, slot4 } = props.theatre;
    const history = useNavigate();
    const deleteHandler = async () => {
        await axios
            .delete(`http://localhost:8000/theatres/${_id}`)
            .then((res) => res.data)
            .then(() => history("/alltheatres"))
    };
    
    return (
        <div>
            <Container>
                <>
                    <Row className="mt-3 mb-5">
                        <Col md={3} lg={3} xs={6}>
                            <img src={image} style={{ "width": "10rem", "height": "7rem" }} />
                        </Col>
                        <Col md={2} lg={3} xs={6} className='mt-5'>
                            <h3 className="text-danger"><a href={location} className="text-decoration-none">{name}</a></h3>
                        </Col>
                        <Col md={7} lg={6} xs={12} className='mt-5'>
                            <Link to='/seating'>
                                <Button variant="outline-warning text-black mx-2">{slot1}</Button>
                                <Button variant="outline-warning text-black mx-2">{slot2}</Button>
                                <Button variant="outline-warning text-black mx-2">{slot3}</Button>
                                <Button variant="outline-warning text-black">{slot4}</Button>
                            </Link>
                            <hr></hr>
                            <Link to={`/theatres/${_id}/update`}>
                                <Button className="mx-2 btn btn-success">
                                    Update
                                </Button>
                            </Link>
                            <Button className="btn btn-danger" onClick={deleteHandler}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
                </>
            </Container >
        </div>
    );
};
export default Atheatre;





