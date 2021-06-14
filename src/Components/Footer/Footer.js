import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import footerLogo from '../../img/footer-logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer" id="kontakt">
                <div className="coffee-color coffee-color-footer"></div>
                <Container className="c_custom">
                    <Row>
                        <Col lg={4}>
                            <div className="footer-left" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">
                                <h2 className="sem-60 sem-foot-60 c-tag-2">Öffnungszeiten<br/>und Kontakt</h2>
                                <img className="img-fluid" src={footerLogo} alt="footer-logo"/>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className="footer-middle ml-lg-5" data-aos="fade-in" data-aos-delay="600" data-aos-duration="1200">
                                <p className="reg-24 my-1 c-tag-4">Montag–Freitag <span className="pl-2">9–17 Uhr</span></p>
                                <p className="reg-24 my-1 c-tag-4">Samstag <span className="pl-4">10–15 Uhr</span></p>
                                <p className="reg-24 my-1 c-tag-4">und nach Vereinbarung</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div className="footer-right" data-aos="fade-in" data-aos-delay="800" data-aos-duration="1200">
                                <ul>
                                    <li>
                                        <p className="reg-22 c-tag-4">Schuhmanufaktur Formschön GmbH</p>
                                    </li>
                                    <li>
                                        <p className="reg-22 c-tag-4">Alte Bahnhofstraße 5a</p>
                                    </li>
                                    <li>
                                        <p className="reg-22 c-tag-4">53173 Bonn-Bad Godesberg</p>
                                    </li>
                                    <li>
                                        <p className="reg-22 c-tag-4">Tel: 0228-123450</p>
                                    </li>
                                    <li>
                                        <p className="reg-22 c-tag-4">Fax: 0228-123459</p>
                                    </li>
                                    <li>
                                        <p className="reg-22 c-tag-4">info@schuhmanufaktur-formschön.de</p>
                                    </li>
                                    <li>
                                        <p className="reg-22 c-tag-4">www.schuhmanufaktur-formschön.de</p>
                                    </li>
                                </ul>
                                
                                <div className="social-icons-footer">
                                    <ul>
                                        <li><a href="https://www.snapchat.com/" target="_blank" rel="noreferrer"><i className="fa fa-snapchat-square" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fab fa-youtube-square"></i></a></li>
                                        <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram-square"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;