import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bg01 from '../../img/header-visuel-1.png';
import bg02 from '../../img/header-visuel-2.jpg';
import bg03 from '../../img/header-visuel-3.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <>      
                <section className="hero" id="jubilaum">
                    <div className='hero-section' >            
                        <OwlCarousel items={1}  
                            className="owl-theme"
                            autoplay ={false}
                            loop  
                            nav={false} 
                            margin={8} >  
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
                        <div className="container c_custom">
                            <div className="row">
                                <div className="col-md-12 mt-300 mt-220">
                                    <div className="hero-inner">
                                        <p className="text-uppercase lit-23" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Immer einen Schritt voraus</p>
                                        <h1 className="sem-124 mb-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">20 Jahre<br/>Schuhmanufaktur<br/>Formschön</h1>
                                        <div className="call-to-act">
                                            <a className="text-uppercase btn-tag-1 bg-tag-1 reg-22 c-tag-4" href="#leistungen" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1800">
                                                Das leisten wir für Sie
                                            </a>

                                            <a className="text-uppercase btn-tag-1 reg-22 c-tag-4" href="#chronologie" data-aos="fade-in" data-aos-delay="1200" data-aos-duration="2000">
                                                <u>Feiern Sie mit uns!</u> 
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </section>
        </>
    );
};

export default Hero;