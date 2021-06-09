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
                <section class="hero" id="jubilaum">
                    <div className='hero-section' >            
                        <OwlCarousel items={1}  
                            className="owl-theme"
                            autoplay ={true}
                            loop  
                            nav={false} 
                            margin={8} >  
                            <div>
                                <img className="img" src={bg01} alt="Schuhe"/>
                            </div>  
                            <div>
                                <img className="img" src={bg02} alt="Mitarbeiterin"/>
                            </div>  
                            <div>
                                <img className="img" src={bg03} alt="werkzeuge"/>
                            </div>
                        </OwlCarousel>  
                    </div>  

                    <div class="hero-banner">
                        <div class="container c_custom">
                            <div class="row">
                                <div class="col-md-12 mt-220">
                                    <div class="hero-inner">
                                        <p class="text-uppercase lit-23" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Immer einen Schritt voraus</p>
                                        <h1 class="sem-124 mb-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">20 Jahre<br/>Schuhmanufaktur<br/>Formschön</h1>
                                        <div class="call-to-act">
                                            <a class="text-uppercase btn-tag-1 bg-tag-1 reg-22 c-tag-4" href="#leistungen" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1800">
                                                Das leisten wir für Sie
                                            </a>

                                            <a class="text-uppercase btn-tag-1 reg-22 c-tag-4" href="#chronologie" data-aos="fade-in" data-aos-delay="1200" data-aos-duration="2000">
                                                <u>Feiern Sie mit uns!</u> 
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </section>
                    
            {/* <section class="hero" id="jubilaum">
                <div class="hero-section">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" tabindex="-1">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner hero-bg">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="img/header-visuel.png" alt="Schuhe"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/header-visuel-2.jpg" alt="Mitarbeiterin"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/header-visuel-3.jpg" alt="werkzeuge"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="hero-banner">
                        <div class="container c_custom">
                            <div class="row">
                                <div class="col-md-12 mt-300">
                                    <div class="hero-inner">
                                        <p class="text-uppercase lit-23" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Immer einen Schritt voraus</p>
                                        <h1 class="sem-124 mb-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">20 Jahre<br/>Schuhmanufaktur<br/>Formschön</h1>
                                        <div class="call-to-act">
                                            <a class="text-uppercase btn-tag-1 bg-tag-1 reg-22 c-tag-4" href="#leistungen" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1800">
                                                Das leisten wir für Sie
                                            </a>
            
                                            <a class="text-uppercase btn-tag-1 reg-22 c-tag-4" href="#chronologie" data-aos="fade-in" data-aos-delay="1200" data-aos-duration="2000">
                                                <u>Feiern Sie mit uns!</u> 
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Hero;