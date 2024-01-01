import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { authActions } from "../Store/Index";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Amovies from "./Amovies";
const AdminHp = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  return (
    <div>
      <Navbar bg="dark" expand="md">
        <Container>
          <Link to='/home' className='text-decoration-none text-white'><Navbar.Brand className='text-white mx-5'>Book My<img id="logo"
            src="https://cdn-icons-png.flaticon.com/512/2942/2942934.png" alt="MDB Logo"
            height="35rem" /></Navbar.Brand>
          </Link>
          <Navbar.Toggle className="bg-white" />
          <Navbar.Collapse>
            <Nav className="me-auto text-center">
              <Link to='/addmovies'>
                <Nav.Item><Button variant='outline-warning text-white mx-3'>Add Movie</Button></Nav.Item>
              </Link>
              <Link to='/alltheatres'>
                <Nav.Item><Button variant='outline-warning text-white mx-3'>All Theatres</Button></Nav.Item>
              </Link>
              <Link to='/addtheatres'>
                <Nav.Item><Button variant='outline-warning mx-3 text-white'>Add Theatre</Button></Nav.Item>
              </Link>
              <Link to='/alertform'>
                <Nav.Item><Button variant='outline-warning mx-3 text-white '>Alerts</Button></Nav.Item>
              </Link>
            </Nav>
            {!isLoggedIn && (<>{""}<Link to="/adminlogin" className="text-decoration-none"><Button variant="outline-danger text-white mx-5">Login</Button></Link>
            </>)}
            {isLoggedIn && (<>{""}<Link to="/" className="text-decoration-none"><Nav.Item onClick={() => dispatch(authActions.logout())}><Button variant="outline-danger text-white mx-5">Logout</Button></Nav.Item></Link>
            </>)}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Amovies />
    </div>
  );
};
export default AdminHp;