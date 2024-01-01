import React from 'react'
import emailjs from 'emailjs-com'
import { Container, Row, Col, FormLabel, FormControl, Form, Button } from 'react-bootstrap';
const Alertform = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j5zvqhi', 'template_blee1fg', e.target, 'bqB6goWLStLHMkilH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div
            style={{
                height:'100vh',
                backgroundImage: `url("https://media.istockphoto.com/photos/email-connection-background-picture-id1153268590?k=20&m=1153268590&s=612x612&w=0&h=NV6SD053CyiJuvJ1Lk6IiwkoYyKjzg6S9kSA1KQJVBY=")`,
                display: 'block', backgroundSize: 'cover', backgroundAttachment: "fixed", backgroundRepeat: "no-repeat"
            }}>
            <Form onSubmit={sendEmail} className="bg-dark col-lg-6 d-grid mx-auto text-white">
                <h3 className='text-center text-warning mt-5'>Alert Email</h3>
                <Row>
                    <Col className='col-lg-6 d-grid mx-auto'>
                        <FormLabel className='form-label'>Name</FormLabel>
                        <FormControl type='text' placeholder='Enter User Name' name='name'></FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-lg-6 d-grid mx-auto'>
                        <FormLabel className='form-label'>Email</FormLabel>
                        <FormControl type='text' placeholder='Enter User Email' name='email'></FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-lg-6 d-grid mx-auto'>
                        <FormLabel className='form-label'>Message</FormLabel>
                        <FormControl as='textarea' placeholder='Enter Message' name='message'></FormControl>
                    </Col>
                </Row>
                <Button variant='btn btn-danger col-2 d-grid mx-auto my-5' type='submit'>Send Alerts</Button>
            </Form>
        </div>
    )
}

export default Alertform