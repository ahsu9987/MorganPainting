import React from "react";
import { Button,Col, Container, Image, Row ,Form} from "react-bootstrap";
import Office from './office.png'
import Telephone from './telephone-symbol-button.png'
import email from './email.png'


function Conatct (){

    return (
        <>
         <section className="aboutimage py-5">
            <h1 className="text-center text-white py-5 mt-5" style={{fontSize:'500%'}}>CONTACT</h1>
        </section>

        <section className="A-Few-Words">
            <Container>
                <Row className="p-lg-3 mt-3">
                    <Col lg={6} className=" ps-lg-5">
                        <h1 className="ps-lg-2" style={{fontSize:'50px'}}>Get in Touch</h1>
                        <Form.Group className="mb-3" controlId="1">
                            <Form.Control type="text" placeholder="Your Name" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="2">
                            <Form.Control type="email" placeholder="Your Email Address" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="3">
                            <Form.Control type="number" placeholder="Your Mobile Number" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="4">
                            <Form.Control type="text" placeholder="Your City" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="5">
                            <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
                        </Form.Group>
                        <Form.Text className="text-muted text-secondary fs-5">
                            Verify you're a human - Please enter the following code in the box below- 7102
                        </Form.Text>
                        <Form.Group className="mb-3 mt-3 " controlId="formBasicName">
                            <Form.Control type="Number"  required/>
                        </Form.Group>
                        <Button href="" id="formsubmit" className=" mt-2 fs-5 ps-lg-3 pe-lg-3 pt-lg-2 pb-lg-2 mb-3 rounded-pill text-warning" variant="outline-dark" style={{border:'3px solid #daa520 '}}>Send Message</Button>
                    </Col>
                    
                    <Col lg={6}>
                    <h1 className="ps-lg-2" style={{fontSize:'50px'}}>Our Address</h1>
                    <div className="mt-4 ms-1">
                        <div className="ms-lg-3 mt-1 mb-4"> 
                            <Image src={Office} className="img-fluid" alt="office image" />&nbsp;&nbsp; 2130 Fulton Street, San Diego, CA 94117-1080 USA
                        </div>
                        <div className="ms-lg-3   mb-4"> 
                            <Image src={Telephone} className="img-fluid" alt="Telephone image" />&nbsp;&nbsp; +91 8433525372
                        </div>
                        <div className="ms-lg-3  mb-4"> 
                            <Image src={email} className="img-fluid" alt="email image" />&nbsp;&nbsp; ahsanansari75862@gmail.com
                        </div>
                    </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15091.983970784415!2d72.81609734629478!3d18.97578438065905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf670b66c373%3A0xf1def54bb6d8947e!2sWarsi%20Telecom!5e0!3m2!1sen!2sin!4v1704353317253!5m2!1sen!2sin" title="map"></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default Conatct