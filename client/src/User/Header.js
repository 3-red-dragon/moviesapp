import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from "../Store/Index";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    return (
        <Navbar bg="dark" expand="md" style={{ padding: '10px' }}>
            <Container fluid>
                <Link to='/home' className='text-decoration-none text-white'><Navbar.Brand className='text-white ms-3'>Book My<img id="logo"
                    src="https://cdn-icons-png.flaticon.com/512/2942/2942934.png" alt="MDB Logo"
                    height="35rem" /></Navbar.Brand>
                </Link>
                <Navbar.Toggle className='bg-white' />
                <Navbar.Collapse>
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}></Nav>
                    <Link to='/searchbox'>
                        <Form className="form-center" style={{ left: "30%", right: "30%", position: 'absolute', marginTop: '-20px' }}>
                            <Form.Control type="search" placeholder="Search for Movies" className="me-2" aria-label="Search" />
                        </Form>
                    </Link>
                    <Button variant='outline-warning'>
                        {!isLoggedIn && (<Link to="/" className='text-decoration-none text-white'><Nav.Item>Login</Nav.Item></Link>)}
                        {isLoggedIn && (<Link to="/" className='text-decoration-none text-white'><Nav.Item onClick={() => dispatch(authActions.logout())}>Logout</Nav.Item></Link>)}</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header