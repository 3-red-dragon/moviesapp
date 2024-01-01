import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate, useParams } from "react-router-dom";

const Updatemovie = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/movies/${id}`)
      .then(Response => Response.json())
      .then(data => setInputs(data))
  }, []);


  const sendRequest = async () => {
    await axios
      .put(`http://localhost:8000/movies/${id}`, {
        name: String(inputs.name),
        description: String(inputs.description),
        image: String(inputs.image),
        image2: String(inputs.image2),
        about: String(inputs.about),
        trailer: String(inputs.tralier),
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
    sendRequest().then(() => history("/"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={{ backgroundImage: `url("https://previews.123rf.com/images/ghenadie/ghenadie1604/ghenadie160400080/55827845-cinema-background-with-film-strips-and-light-rays-vector-illustration.jpg")`, 
    display: 'block', backgroundSize: 'cover',backgroundAttachment: "fixed", backgroundRepeat: "no-repeat" }}>
      {inputs && (
        <div className="container">
          <div className="row" style={{ position: 'relative' }}>
            <div className="col-md-8 d-grid mx-auto bg-dark text-white p-5">
              <h1 className="text-center text-warning">Update Movie</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={inputs.name}
                  name="name"
                  onChange={handleChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  value={inputs.description}
                  name="description"
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
                <Form.Label>Image2</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Enter image Url"
                  value={inputs.image2}
                  name="image2"
                  onChange={handleChange}
                />
                <Form.Label>Trailer</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Trailer Url"
                  value={inputs.trailer}
                  name="trailer"
                  onChange={handleChange}
                />
                <Form.Label>About</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="About Movie"
                  value={inputs.about}
                  name="about"
                  onChange={handleChange}
                />
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Actor1</Form.Label>
                    <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast1} name="cast1" onChange={handleChange} />
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>ActorName1</Form.Label>
                    <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName1} name="castName1" onChange={handleChange} />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Actor2</Form.Label>
                    <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast2} name="cast2" onChange={handleChange} />
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>ActorName2</Form.Label>
                    <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName2} name="castName2" onChange={handleChange} />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Actor3</Form.Label>
                    <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast3} name="cast3" onChange={handleChange} />
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>ActorName3</Form.Label>
                    <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName3} name="castName3" onChange={handleChange} />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Actor4</Form.Label>
                    <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast4} name="cast4" onChange={handleChange} />
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>ActorName4</Form.Label>
                    <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName4} name="castName4" onChange={handleChange} />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Actor5</Form.Label>
                    <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast5} name="cast5" onChange={handleChange} />
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>ActorName5</Form.Label>
                    <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName5} name="castName5" onChange={handleChange} />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Actor6</Form.Label>
                    <Form.Control required type="url" placeholder="Actor image url" value={inputs.cast6} name="cast6" onChange={handleChange} />
                  </Col>

                  <Col md={6} className="mb-3">
                    <Form.Label>ActorName6</Form.Label>
                    <Form.Control required type="text" placeholder="Actor Name" value={inputs.castName6} name="castName6" onChange={handleChange} />
                  </Col>
                </Row>
                <Button variant="danger" type="submit">Update Movie</Button>
              </Form>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};
export default Updatemovie;