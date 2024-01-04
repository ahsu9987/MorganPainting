import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './page.css';
import MorganImage from './Images/brand-inverse.png'
import Afewimage from './Images/home.jpg'
import Seaimg from './Images/project-1.jpg'
import Woodimg from './Images/project-4.jpg'
import coupleimg from './Images/project-3.jpg'
import Watercoloimg from './Images/project-2.jpg'
import Treeimg from './Images/project-5.jpg'
import project6 from './Images/project-6.jpg'
import person from './Images/Portrait-img.png'
import landscape from './Images/Landscape-img.png'
import stilllife from './Images/StillLife-img.png'
import urban from './Images/urban-img.png'

function Home (){
    return (
    <>
        <section   className="bgimage py-5">
            <div className="text-center py-5 imagetext">
                <Image src={MorganImage} className="img-fluid mt-lg-5 "/>
            </div>
        </section>


        <section className="A-Few-Words">
            <Container>
                <Row className="p-lg-3 mt-3">
                    <Col lg={6} className=" ps-lg-5">
                    <h1 className="ps-lg-2" style={{fontSize:'50px'}}>A Few Words About Me</h1>
                    <p className="mt-5 text-secondary" style={{fontSize:'20px', lineHeight:'30px'}}>My name is Ahsan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you</p>
                    <Button href="/About" className=" mt-2 fs-5 ps-lg-5 pe-lg-5 pt-lg-3 pb-lg-3 mb-3 rounded-pill text-warning" variant="outline-dark" style={{border:'3px solid #daa520 '}}>Learn More</Button>

                    </Col>
                    <Col lg={{span:4, offset: 1}}>
                    <Image src={Afewimage} className="img-fluid mt-lg-3"  alt="Words-About-img"/>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="Mypainting bg-body-tertiary">
            <Container>
                <h1 className="ps-lg-2 text-center  pt-5 pb-4">My Paintings</h1>
                <Row className="p-lg-3 ms-lg-1">
                    <Col lg={4}>
                        <Card className="mb-4 ms-lg-5 ms-1" style={{ width: '23rem' , height: '98%'}}>
                            <Card.Img variant="top img-fluid" src={Seaimg} alt="seaimg" />
                            <Card.Body>
                                <Card.Title className="fs-3 fw-normal" style={{color:'#daa520 '}}>Sea Storm</Card.Title>
                                <Card.Text className="text-secondary fw-normal fs-5" style={{lineHeight:'30px'}}>This painting is one of my latest works on sea and ocean topics.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                    <Card className="mb-4 ms-lg-4 ms-1" style={{ width: '23rem',height:'98%' }}>
                            <Card.Img variant="top img-fluid" src={Woodimg} alt="woodimg" />
                            <Card.Body>
                                <Card.Title className="fs-3 fw-normal" style={{color:'#daa520 '}}>Ruins of Ancient Fortress</Card.Title>
                                <Card.Text className="text-secondary fw-normal fs-5" style={{lineHeight:'30px'}}>When I’ve been to Scotland, I made this painting just in a day.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                    <Card className="mb-4 ms-1" style={{ width: '23rem',height:'98%' }}>
                            <Card.Img variant="top img-fluid" src={coupleimg} />
                            <Card.Body>
                                <Card.Title className="fs-3 fw-normal" style={{color:'#daa520 '}}>Two Lovers</Card.Title>
                                <Card.Text className="text-secondary fw-normal fs-5" style={{lineHeight:'30px'}}>This work was finished in two days for my customers from San Diego, CA, who needed something special.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>    
                </Row>
            </Container>

            <Container className="mt-5">
                <Row className="p-lg-3 ms-lg-1">
                    <Col lg={4}>
                        <Card className="mb-4 ms-lg-5 ms-1" style={{ width: '23rem' , height: '98%'}}>
                            <Card.Img variant="top img-fluid" src={Watercoloimg} alt="seaimg" />
                            <Card.Body>
                                <Card.Title className="fs-3 fw-normal" style={{color:'#daa520 '}}>Watercolor Portrait</Card.Title>
                                <Card.Text className="text-secondary fw-normal fs-5" style={{lineHeight:'30px'}}>Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                    <Card className="mb-4 ms-lg-4 ms-1" style={{ width: '23rem',height:'98%' }}>
                            <Card.Img variant="top img-fluid" src={Treeimg} alt="woodimg" />
                            <Card.Body>
                                <Card.Title className="fs-3 fw-normal" style={{color:'#daa520 '}}>Birches in Autumn</Card.Title>
                                <Card.Text className="text-secondary fw-normal fs-5" style={{lineHeight:'30px'}}>I love painting autumn trees and this work is a perfect example.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                    <Card className="mb-4 ms-1" style={{ width: '23rem',height:'98%' }}>
                            <Card.Img variant="top img-fluid" src={project6} />
                            <Card.Body>
                                <Card.Title className="fs-3 fw-normal" style={{color:'#daa520 '}}>Green Landscape</Card.Title>
                                <Card.Text className="text-secondary fw-normal fs-5" style={{lineHeight:'30px'}}>Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>    
                </Row>
            </Container>
        </section>

        <section className="Services">
            <Container>
            <h1 className="ps-lg-2 text-center  pt-3 pb-4">Services</h1>
            <h5 className="ps-lg-5 text-center fw-normal text-secondary pt-2 pb-2">If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of <br></br> my services listed below. They will add more colors and emotions to your daily life.</h5>

            <Row className="p-lg-5 ms-lg-5">
                    <Col lg={3}>
                        <div className="border m-2 border-3 border-warning ">
                            <div className="text-center m-5" style={{height:'180px'}}>
                                <Image src={person} className="img-fluid mt-4"/>
                                <h4 className="fw-normal">Portrait</h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="border m-2 border-3 border-warning ">
                            <div className="text-center m-5" style={{height:'180px'}}>
                                <Image src={landscape} className="img-fluid mt-4"/>
                                <h4 className="fw-normal">Landscape</h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="border m-2 border-3 border-warning ">
                            <div className="text-center m-5" style={{height:'180px'}}>
                                <Image src={stilllife} className="img-fluid mt-4"/>
                                <h4 className="fw-normal">Still Life</h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="border m-2 border-3 border-warning ">
                            <div className="text-center m-5" style={{height:'180px'}}>
                                <Image src={urban} className="img-fluid mt-4"/>
                                <h4 className="fw-normal">Urban</h4>
                            </div>
                        </div>
                    </Col>
            </Row>
            <div className="text-center">
            <Button href="/Contact" className="text-center mt-2 fs-5 ps-lg-5 pe-lg-5 pt-lg-3 pb-lg-3 mb-5 rounded-pill text-warning" variant="outline-dark" style={{border:'3px solid #daa520 '}}>Veiw All Services</Button>
            </div>

            </Container>
        </section>
    </>

      
      );
}
export default Home