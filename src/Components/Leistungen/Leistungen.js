import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import bild01 from '../../img/bild01.jpg';
import './Leistungen.css';

const Leistungen = () => {
    return (
        <>
            <section className="leistungen mt-lei-300" id="leistungen">
                <div className="coffee-color"></div>
                <Container className="c_custom">
                    <Row className="py-5">
                        <Col md={12} className="text-center">
                            <div className="lei-text" data-aos="fade-down" data-aos-duration="1200">
                                <h2 className="sem-200 c-tag-5 text-uppercase">Leistungen</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt--150 border-left mx-leder overflowX">
                        <div className="leder-text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1400">
                            <p className="text-uppercase lit-23">Wir lieben Leder</p>
                            <h3 className="sem-124 mb-5">Das leisten <span>wir für Sie</span></h3>
                            <div className="box">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <Col md={6} className="offset-md-6 overflowX">
                            <LazyLoadImage effect="blur" className="img-fluid" src={bild01} alt="bild01" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1200"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Leistungen;