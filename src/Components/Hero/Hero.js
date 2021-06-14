import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col } from 'react-bootstrap';
import bg01 from '../../img/header-visuel-1.jpg';
import bg02 from '../../img/header-visuel-2.jpg';
import bg03 from '../../img/header-visuel-3.jpg';
import deco from '../../img/deco.png';
import './Hero.css';

const Hero = () => {
    return (
        <>      
                <section className="hero" id="jubilaum">
                    <div className='hero-section' >            
                        <OwlCarousel items={1}  
                            className="owl-theme"
                            autoplay ={true}
                            loop ={true}
                            nav={false} 
                            margin={0}>  
                            <div className="hero-bg">
                                <img className="img" src={bg01} alt="Schuhe"/>
                            </div>  
                            <div className="hero-bg">
                                <img className="img" src={bg02} alt="Mitarbeiterin"/>
                            </div>  
                            <div className="hero-bg">
                                <img className="img" src={bg03} alt="werkzeuge"/>
                            </div>
                        </OwlCarousel>  
                    </div>  

                    <div className="hero-banner">
                        <Container className="c_custom">
                            <Row>
                                <Col md={12} className="mt-300 mt-220">
                                    <div className="hero-inner">
                                        <p className="text-uppercase lit-23" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Immer einen Schritt voraus</p>
                                        <h1 className="sem-124 mb-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">20 Jahre<br/>Schuhmanufaktur<br/>Formschön</h1>
                                        <div className="call-to-act">
                                            <Link to="/massschuhe" className="text-uppercase btn-tag-1 bg-tag-1 reg-22 c-tag-4" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1800">Massschuhe</Link>
                                            <Link to="/pflege" className="text-uppercase btn-tag-1 reg-22 c-tag-4" href="#chronologie" data-aos="fade-in" data-aos-delay="1200" data-aos-duration="2000"><u>Pflege</u></Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div> 
                    <div className="deco">
                        <img className="img-fluid" src={deco} alt="deco"/>
                    </div>
                </section>
        </>
    );
};

export default Hero;