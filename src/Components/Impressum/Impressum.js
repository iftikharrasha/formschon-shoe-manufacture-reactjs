import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import flowerBig from '../../img/flower-big.png';
import './Impressum.css';

const Impressum = () => {
    return (
        <>
            <section className="impressum bg-tag-3">
                <Container className="c_custom">
                    <Row className="pt-200">
                        <Col lg={5}>
                            <div className="impress-inner">
                                <img className="img-fluid" src={flowerBig} alt="flower-icon-big" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1200"/>
                                <h2 className="sem-60 c-tag-2">Impressum</h2>
                            </div>
                        </Col>
                        <Col lg={7} className="pt-200 pt-im-50">
                            <div className="impress-right" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                                <ul>
                                    <li>
                                        <p className="reg-24 c-tag-4 mb-2">Schuhmanufaktur Formschön GmbH</p>
                                    </li>
                                    <li>
                                        <p className="reg-24 c-tag-4 mb-2">Geschäftsführung: Maria Gracia und Paolo Zuretti</p>
                                    </li>
                                    <li>
                                        <p className="reg-24 c-tag-4 mb-2">Alte Bahnhofstraße 5a</p>
                                    </li>
                                    <li>
                                        <p className="reg-24 c-tag-4 mb-2">53173 Bonn-Bad Godesberg</p>
                                    </li>
                                    <li>
                                        <p className="reg-24 c-tag-4 mb-2">Tel: 0228-123450</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="impress-right" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                                <ul>
                                    <li>
                                        <p className="reg-24 c-tag-4 mb-2">info@schuhmanufaktur-formschön.de</p>
                                    </li>
                                    <li>
                                        <p className="reg-24 c-tag-4 mb-2">www.schuhmanufaktur-formschön.de</p>
                                    </li>
                                    <li>
                                        <p className="reg-24 c-tag-4 mb-2">Amtsgericht Bonn, Handelsregister Nr. XXX000XXX</p>
                                    </li>
                                    <li>
                                        <p className="reg-24 c-tag-4 mb-2">Finanzamt Bonn-Außenstadt, USt.ID: DE10111011</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Impressum;