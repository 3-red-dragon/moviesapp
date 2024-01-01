import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
const Addmovie = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    image: "",
    image2: "",
    about: "",
    trailer: "",
    cast1: "",
    cast2: "",
    cast3: "",
    cast4: "",
    cast5: "",
    cast6: "",
    castName1: "",
    castName2: "",
    castName3: "",
    castName4: "",
    castName5: "",
    castName6: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:8000/movies", {
        name: String(inputs.name),
        description: String(inputs.description),
        image: String(inputs.image),
        image2: String(inputs.image2),
        about: String(inputs.about),
        trailer: String(inputs.trailer),
        cast1: String(inputs.cast1),
        cast2: String(inputs.cast2),
        cast3: String(inputs.cast3),
        cast4: String(inputs.cast4),
        cast5: String(inputs.cast5),
        cast6: String(inputs.cast6),
        castName1: String(inputs.castName1),
        castName2: String(inputs.castName2),
        castName3: String(inputs.castName3),
        castName4: String(inputs.castName4),
        castName5: String(inputs.castName5),
        castName6: String(inputs.castName6),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/home"));
  };
  return (
    <div style={{ backgroundImage: `url("https://us.123rf.com/450wm/hugolacasse/hugolacasse1603/hugolacasse160300013/53756518-illustration-of-a-film-stripe-reel-on-abstract-movie-background.jpg?ver=6")`, 
    display: 'block', backgroundSize: 'cover',backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
      <div className="container">
        <div className="row col-8 mx-auto text-white bg-black" style={{position:'relative'}} >
          <h2 className="text-center text-warning mt-3">Add Movie Details</h2>
          <Form onSubmit={handleSubmit} className='p-5'>
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Movie Name"
              value={inputs.name}
              name="name"
              onChange={handleChange}
            />
            <Form.Label>Movie Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Movie Description"
              value={inputs.description}
              name="description"
              onChange={handleChange}
            />
            <Form.Label>Movie Card</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter Movie image Url"
              value={inputs.image}
              name="image"
              onChange={handleChange}
            />
            <Form.Label>Movie Poster</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter image Url"
              value={inputs.image2}
              name="image2"
              onChange={handleChange}
            />
            <Form.Label>Movie Trailer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Movie Trailer Url"
              value={inputs.trailer}
              name="trailer"
              onChange={handleChange}
            />
            <Form.Label>About Movie</Form.Label>
            <Form.Control
              type="text"
              placeholder="About The Movie"
              value={inputs.about}
              name="about"
              onChange={handleChange}
            />
            <Row>
              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>Actor1</Form.Label>
                <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast1} name="cast1" onChange={handleChange} />
              </Col>

              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>ActorName1</Form.Label>
                <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName1} name="castName1" onChange={handleChange} />
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>Actor2</Form.Label>
                <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast2} name="cast2" onChange={handleChange} />
              </Col>

              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>ActorName2</Form.Label>
                <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName2} name="castName2" onChange={handleChange} />
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>Actor3</Form.Label>
                <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast3} name="cast3" onChange={handleChange} />
              </Col>

              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>ActorName3</Form.Label>
                <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName3} name="castName3" onChange={handleChange} />
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>Actor4</Form.Label>
                <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast4} name="cast4" onChange={handleChange} />
              </Col>

              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>ActorName4</Form.Label>
                <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName4} name="castName4" onChange={handleChange} />
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>Actor5</Form.Label>
                <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast5} name="cast5" onChange={handleChange} />
              </Col>

              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>ActorName5</Form.Label>
                <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName5} name="castName5" onChange={handleChange} />
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>Actor6</Form.Label>
                <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast6} name="cast6" onChange={handleChange} />
              </Col>
              <Col md={6} lg={6} sm={12} className="mb-3">
                <Form.Label>ActorName6</Form.Label>
                <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName6} name="castName6" onChange={handleChange} />
              </Col>
            </Row>
            <Button
              type="submit"
              className="btn btn-danger mx-auto col-lg-3 col-md-3 col-sm-3 d-grid mt-3"
            >
              Add Movie
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Addmovie;
