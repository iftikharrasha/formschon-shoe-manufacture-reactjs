import React from 'react';
import zuliebe from '../../img/zuliebe.jpg';
import flowerBig from '../../img/flower-big.png';
import './Zuliebe.css';


const Zuliebe = () => {
    return (
        <>
            <section className="zuliebe bg-tag-2" id="zuliebe">
                <div className="zuliebe-left">
                    <img className="img-fluid" src={zuliebe} alt="flower-icon" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200"/>
                </div>
                <div className="zuliebe-right d-flex justify-content-center align-items-center">
                    <div className="hero-inner">
                        <img className="img-fluid" src={flowerBig} alt="flower-icon-big" data-aos="fade-in" data-aos-delay="1200" data-aos-duration="1800"/>
                        <p className="text-uppercase lit-23 c-tag-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Schuhmanufaktur Formschön</p>
                        <h2 className="sem-124 mb-5 c-tag-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1400">Ihren Füßen<br/>zuliebe</h2>
                        <div className="call-to-act" data-aos="fade-in" data-aos-delay="800" data-aos-duration="1800">
                            <a className="text-uppercase btn-tag-1 bg-tag-1 reg-22 c-tag-4" href="pflege.html">
                                Unsere Pflegetipps
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Zuliebe;