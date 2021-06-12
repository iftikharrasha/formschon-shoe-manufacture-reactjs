import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Eleganz.css';

const Eleganz = () => {
    return (
        <>
            <section className="elegant pb-5 overflowX" data-aos="fade-right" data-aos-duration="1200">
                <Container className="c_custom">
                    <Row>
                        <Col md={11}>
                            <h2 className="sem-124 float-right">Eleganz von<br/><span className="ml-5">Kopf bis Fuß</span></h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Eleganz;