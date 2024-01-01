import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='main-footer'>
      <Container>
        <Row>
          <Col lg={3} md={3} xs={6} className='mt-3'>
            <h4>Customer care</h4>
            <ul className="list-unstyled">
              <li>
                <a href="contact us">Contact us </a>
              </li>
              <li>
                <a href="Toll free">Toll free </a>
              </li>
              <li>
                <a href="Help center">Help center </a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={3} xs={6} className='gener mt-3'>
            <h4>Gener</h4>
            <ul className="list-unstyled">
              <li>
                <a href="Action movies">Action movies </a>
              </li>
              <li>
                <a href="Comedy movies">Comedy movies </a>
              </li> 
              <li>
                <a href="Thriller movies">Thriller movies </a>
              </li>
              <li>
                <a href="Horror movies">Horror movies </a>
              </li>
              <li>
                <a href="claasic movies">classic movies </a>
              </li>
              <li>
                <a href="sci-fi movies">sci-fi movies </a>
              </li>
              <li>
                <a href="Animation movies">Animation movies </a>
              </li>
              <li>
                <a href="Political movies">Plitical movies </a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={3} xs={6} className="language mt-3">
            <h4> Movies by Language </h4>
            <ul className="list-unstyled ">
              <li>
                <a href="Telugu movies">Telugu movies </a>
              </li>
              <li>
                <a href="Tamil movies">Tamil movies </a>
              </li>
              <li>
                <a href="Kannada movies">Kannada movies </a>
              </li>
              <li>
                <a href="Malayalam movies">Malayalam movies </a>
              </li>
              <li>
                <a href="Hindi movies">Hindi movies </a>
              </li>
              <li>
                <a href="English movies">English movies</a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={3} xs={6} className="help mt-3">
            <h4>Help</h4>
            <ul className="list-unstyled ">
              <li>
                <a href="About us">About us</a>
              </li>
              <li>
                <a href="Current openings">Current openings</a>
              </li>
              <li>
                <a href="Press release">Press release</a>
              </li>
              <li>
                <a href="FAQ">FAQ</a>
              </li>
              <li>
                <a href="Terms and conditions">Terms and conditions</a>
              </li>
            </ul>
          </Col>
          <div className="text-center">
            <div className="icons">
              <h4>Social media</h4>
              <div className="text-center">
                <ul className="icon">
                  <li className="m-2">
                    <a href="facebook">
                      <FaFacebookF></FaFacebookF>
                    </a>
                  </li>
                  <li className="m-2">
                    <a href="Twitter">
                      <FaTwitter></FaTwitter>
                    </a>
                  </li>
                  <li className="m-2">
                    <a href="Instagram">
                      <FaInstagram></FaInstagram>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Footer