import React from "react";
import { Image ,Nav , Navbar , NavDropdown ,Container , Button} from "react-bootstrap";
import ahsulogo from "../Component/logoimage/ahsulogo.png"
import { NavLink } from "react-router-dom/cjs/react-router-dom";

function Header() {
    return ( 
<Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid  >
        <Navbar.Brand href="#"><Image src={ahsulogo} className=" hello" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto me-5 gap-lg-5 ">
          <NavLink className="text-decoration-none text-secondary fs-6" to="/">HOME</NavLink>
          <NavLink className="text-decoration-none text-secondary fs-6" to="/About">About Us</NavLink>
          <NavLink className="text-decoration-none text-secondary fs-6" to="/Service">Services</NavLink>
          <NavLink className="text-decoration-none text-secondary fs-6" to="/Contact">Conatct us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default Header;