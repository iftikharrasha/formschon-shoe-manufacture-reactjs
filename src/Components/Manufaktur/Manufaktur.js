import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Manufaktur.css';

const Manufaktur = () => {
    return (
        <>
            <section className="manufaktur" id="manufaktur">
                <Container className="c_custom">
                    <Row>
                        <Col md={12} className="mt-300 mt-mf-300">
                            <div className="hero-inner">
                                <p className="text-uppercase lit-23" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Der Weg zu Ihrem Maßschuh</p>
                                <h2 className="sem-124 mb-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1400">Manufaktur<br/>Formschön Immer<br/>einen Schritt voraus</h2>
                                <div className="call-to-act" data-aos="fade-in" data-aos-delay="800" data-aos-duration="1800">
                                    <a className="text-uppercase btn-tag-1 bg-tag-1 reg-22 c-tag-4" href="massschuhe.html">
                                        Mehr erfahren
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Manufaktur;