import React from "react";
import { Container } from "react-bootstrap";

function Footer (){
    return (
        <>
        <section className="bg-dark">
        <Container>
            <div className="d-lg-flex p-3" style={{ justifyContent:'space-between'}}>
                <p className="text-secondary">©Copyright ©All rights reserved</p>
                <p className="text-secondary">This site by Er.Ahsan</p>

            </div>
        </Container>
        </section>
        </>

    
    )
}
export default Footer ;