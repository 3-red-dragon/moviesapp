import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
const Updatetheatre = () => {
    const history = useNavigate();
    const id = useParams().id;
    const [inputs, setInputs] = useState(
        {
            name: "", image: "", theaterId: "", price: "", slot1: "",
            slot2: "", slot3: "", slot4: "",
        }
    );
    useEffect(() => {
        fetch(`http://localhost:8000/theatres/${id}`)
            .then(Response => Response.json())
            .then(data => setInputs(data))
    }, []);
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const sendRequest = async () => {
        await axios
            .put(`http://localhost:8000/theatres/${id}`, {
                name: String(inputs.name),
                image: String(inputs.image),
                location:String(inputs.location),
                theaterId: Number(inputs.theaterId),
                price: Number(inputs.price),
                slot1: String(inputs.slot1),
                slot2: String(inputs.slot2),
                slot3: String(inputs.slot3),
                slot4: String(inputs.slot4),
            })
            .then((res) => res.data);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(() => history("/theatres"));
    };
    return (
        <div style={{ backgroundImage: `url("https://res.cloudinary.com/dv3qcy9ay/image/upload/f_auto/general/venues/ZoomBackgrounds/Zoom06")`, 
        display: 'block', backgroundSize: 'cover',backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
            {inputs && (
                <div className="contianer">
                    <div className="row" style={{ position: 'relative' }}>
                        <div className="col-md-6 mx-auto bg-dark text-white p-5">
                            <h2 className="text-center text-warning">Update a New Theatre</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    value={inputs.name}
                                    name="name"
                                    onChange={handleChange}
                                />
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type="url"
                                    placeholder="Enter image Url"
                                    value={inputs.image}
                                    name="image"
                                    onChange={handleChange}
                                />
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="url"
                                    placeholder="Enter Location Url"
                                    value={inputs.location}
                                    name="location"
                                    onChange={handleChange}
                                />
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Ticket Price"
                                    value={inputs.price}
                                    name="price"
                                    onChange={handleChange}
                                />
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Slot1</Form.Label>
                                        <Form.Control required type="text" placeholder="Enter Slot Time" value={inputs.slot1} name="slot1" onChange={handleChange} />
                                    </Col>

                                    <Col md={6} className="mb-3">
                                        <Form.Label>Slot2</Form.Label>
                                        <Form.Control required type="text" placeholder="Enter Slot Time" value={inputs.slot2} name="slot2" onChange={handleChange} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Label>Slot3</Form.Label>
                                        <Form.Control required type="text" placeholder="Enter Slot Time" value={inputs.slot3} name="slot3" onChange={handleChange} />
                                    </Col>

                                    <Col md={6} className="mb-3">
                                        <Form.Label>Slot4</Form.Label>
                                        <Form.Control required type="text" placeholder="Enter Slot Time" value={inputs.slot4} name="slot4" onChange={handleChange} />
                                    </Col>
                                </Row>
                                <Button
                                    type="submit"
                                    className="btn btn-danger mx-auto col-md-4 col-sm-12 d-grid mb-3 mt-3"
                                >
                                    Update Theatre
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Updatetheatre;
