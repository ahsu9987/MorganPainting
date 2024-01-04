import React from "react";
import { Button, Card, Col, Container, Image, NavLink, Row } from "react-bootstrap";
import serviceimg1 from './Images/services-1.jpg'
import serviceimg2 from './Images/portrait-2.jpg'
import serviceimg3 from './Images/portrait-3.jpg'
import serviceimg4 from './Images/portrait-4.jpg'
import serviceimg5 from './Images/portrait-5.jpg'

function Service (){
    return(
        <>
        <section className="aboutimage py-5">
            <h1 className="text-center text-white py-5 mt-5" style={{fontSize:'500%'}}>Services</h1>
        </section>

        <section className="A-Few-Words">
                <Row className="p-lg-3 mt-3">
                <Col lg={{span:6, offset: 0}}>
                    <Image src={serviceimg1} className="img-fluid mt-lg-3 mb-5"  alt="Words-About-img"/>
                </Col>
                    <Col lg={6} className=" ps-lg-3">
                    <h1 className="ps-lg-2 mt-2" style={{fontSize:'50px'}}>Service Description</h1>
                    <p className="mt-2 text-secondary" style={{fontSize:'20px', lineHeight:'30px'}}>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
                        <Button href="/" className=" mt-2 fs-5 ps-lg-5 pe-lg-5 pt-lg-3 pb-lg-3 mb-3 rounded-pill text-warning" variant="outline-dark" style={{border:'3px solid #daa520 '}}>Learn More</Button>
                    </Col> 
                </Row>

                <Row className="p-lg-3 mt-3">
                    <Col lg={4}>
                        <Image src={serviceimg2} className="img-fluid mt-lg-3 mb-5"  alt="Words-About-img"/>
                    </Col>
                    <Col lg={8}>
                        <Image src={serviceimg3} className="img-fluid mt-lg-3 mb-5"  alt="Words-About-img"/>
                        <h4 className="text-end text-warning fw-normal fs-4">Oil on Canvas of a Little Girl</h4>
                        <p className="text-end text-secondary fw-normal fs-5">This portrait was created in 2015 for my brother’s daughter, Emily Morgan.</p>
                    </Col>
                </Row>

                <Row className="p-lg-3 mt-3">
                    <Col lg={8}>
                        <Image src={serviceimg4} className="img-fluid mt-lg-3 mb-5"  alt="Words-About-img"/>
                        <h4 className="text-start text-warning fw-normal fs-4">Oil on Canvas of a Little Girl</h4>
                        <p className="text-start text-secondary fw-normal fs-5">This portrait was created in 2015 for my brother’s daughter, Emily Morgan.</p>

                    </Col>
                    <Col lg={4}>
                        <Image src={serviceimg5} className="img-fluid mt-lg-3 mb-5"  alt="Words-About-img"/>
                    </Col>
                </Row>
        </section> 
        </>
    )
}
export default Service