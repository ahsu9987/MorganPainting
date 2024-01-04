import React from "react";
import { Button, Card, Col, Container, Image, NavLink, Row } from "react-bootstrap";
import fewimg from './Images/still-life-1.jpg'


function About (){
    return(
        <>
        <section className="aboutimage py-5">
            <h1 className="text-center text-white py-5 mt-5" style={{fontSize:'500%'}}>ABOUT</h1>
        </section>

        <section className="A-Few-Words">
            <Container>
                <Row className="p-lg-3 mt-3">
                    <Col lg={6} className=" ps-lg-5">
                    <h1 className="ps-lg-2" style={{fontSize:'50px'}}> Few Words About Us</h1>
                    <p className="mt-5 text-secondary" style={{fontSize:'20px', lineHeight:'30px'}}>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait,
                     whether it’s created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.</p>
                        <Button href="/" className=" mt-2 fs-5 ps-lg-5 pe-lg-5 pt-lg-3 pb-lg-3 mb-3 rounded-pill text-warning" variant="outline-dark" style={{border:'3px solid #daa520 '}}>Learn More</Button>
                    </Col>
                    <Col lg={{span:4, offset: 1}}>
                    <Image src={fewimg} className="img-fluid mt-lg-3 mb-5"  alt="Words-About-img"/>
                    </Col>
                </Row>
            </Container>
        </section> 
        </>
    )
}
export default About;