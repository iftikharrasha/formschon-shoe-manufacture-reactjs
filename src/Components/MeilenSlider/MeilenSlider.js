import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import stitch from '../../img/stitch.png';
import flower from '../../img/flower.png';
import img2001 from '../../img/2001.webp';
import img2004 from '../../img/2004.webp';
import img2007 from '../../img/2007.webp';
import img2010 from '../../img/2010.webp';
import img2014 from '../../img/2014.webp';
import img2015 from '../../img/2015.webp';
import img2016 from '../../img/2016.webp';
import img20172 from '../../img/2017-2.webp';
import img2017 from '../../img/2017.webp';
import img2019 from '../../img/2019.webp';
import img2021 from '../../img/2021.webp';
import './MeilenSlider.css';


const MeilenSlider = () => {
    var settings1 = {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
      };

    return (
        <>
            <section className="milestone py-5">
                <div className="stitch">
                    <LazyLoadImage effect="blur" className="img-fluid" src={stitch} alt="stitch"/>
                </div>
                <Container className="c_custom">
                    <Row className="pb-3">
                        <Col md={12}>
                            <h2 className="sem-60">Meilensteine <LazyLoadImage effect="blur" src={flower} alt="flower-icon"/></h2>
                        </Col>
                    </Row>
                    <Row className="row py-5">
                        <Col md={12} className="responsive1">
                            
                            <Slider {...settings1}>

                                <div className="milestone-item">
                                    <div className="m-item-img">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={img2001} alt="2001"/>
                                    </div>
                                    <div className="m-item-details">
                                        <h3 className="c-tag-2 reg-30 mb-3" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">September 2001.</h3>
                                        <p className="c-tag-3" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Gemeinsam eröffnen wir Geschwister, Maria Gracia und Paolo Zuretti, in Bad Godesberg unsere Schuhmanufaktur. Wir haben beide den Meisterbrief erworben und bereits mehrere Jahre Berufserfahrung in verschiedenen Werkstätten gesammelt.</p>
                                    </div>
                                </div>

                                <div className="milestone-item">
                                    <div className="m-item-img">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={img2004} alt="2004"/>
                                    </div>
                                    <div className="m-item-details">
                                        <h3 className="c-tag-2 reg-30 mb-3" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">September 2004.</h3>
                                        <p className="c-tag-3" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Lukas Bischoff beginnt seine Ausbildung bei uns. Heute ist er im Team der Spezialist für die Schäfte-Herstellung.</p>
                                    </div>
                                </div>

                                <div className="milestone-item">
                                    <div className="m-item-img">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={img2007} alt="2007"/>
                                    </div>
                                    <div className="m-item-details">
                                        <h3 className="c-tag-2 reg-30 mb-3" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">August 2007</h3>
                                        <p className="c-tag-3" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Das WDR-Regionalfernsehen besucht die Manufaktur und porträtiert unsere Arbeit. Das ist der Durchbruch: Viele potenzielle Kunden und Kundinnen werden auf uns aufmerksam – nicht nur im Rheinland.</p>
                                    </div>
                                </div>

                                <div className="milestone-item">
                                    <div className="m-item-img">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={img2010} alt="2010"/>
                                    </div>
                                    <div className="m-item-details">
                                        <h3 className="c-tag-2 reg-30 mb-3" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Mai 2010</h3>
                                        <p className="c-tag-3" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Neben Werkstatt und Laden eröffnen wir einen kleinen Showroom. Hier ist eine individuelle Atmosphäre beim Maßnehmen und bei der Anprobe gewährleistet.</p>
                                    </div>
                                </div>

                                <div className="milestone-item">
                                    <div className="m-item-img">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={img2014} alt="2014"/>
                                    </div>
                                    <div className="m-item-details">
                                        <h3 className="c-tag-2 reg-30 mb-3" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Oktober 2014</h3>
                                        <p className="c-tag-3" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Die Schuhmanufaktur Formschön präsentiert ihre Modelle auf der Leistungsschau des rheinischen Handwerks in Düsseldorf.</p>
                                    </div>
                                </div>

                                <div className="milestone-item">
                                    <div className="m-item-img">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={img2015} alt="2015"/>
                                    </div>
                                    <div className="m-item-details">
                                        <h3 className="c-tag-2 reg-30 mb-3" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Dezember 2015</h3>
                                        <p className="c-tag-3" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Wir beteiligen uns an der Neuordnung des Berufs „Maßschuhmacher/-in“, damit unser beruflicher Nachwuchs auf der Höhe der Zeit ist.</p>
                                    </div>
                                </div>

                                <div className="milestone-item">
                                    <div className="m-item-img">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={img2016} alt="2016"/>
                                    </div>
                                    <div className="m-item-details">
                                        <h3 className="c-tag-2 reg-30 mb-3" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">März 2016</h3>
                                        <p className="c-tag-3" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Wir sind Gast auf der europäischen Leder- und Mode-Messe in Brüssel.</p>
                                    </div>
                                </div>

                                <div className="milestone-item">
                                    <div className="m-item-img">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={img2017} alt="2017"/>
                                    </div>
                                    <div className="m-item-details">
                                        <h3 className="c-tag-2 reg-30 mb-3" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Januar 2017</h3>
                                        <p className="c-tag-3" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Das alljährliche Treffen der Maßschuhmacher aus dem deutschsprachigen Raum findet diesmal bei uns, in der Schuhmanufaktur Formschön, statt.</p>
                                    </div>
                                </div>

                                <div className="milestone-item">
                                    <div className="m-item-img">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={img20172} alt="2017-2"/>
                                    </div>
                                    <div className="m-item-details">
                                        <h3 className="c-tag-2 reg-30 mb-3" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Dezember 2017</h3>
                                        <p className="c-tag-3" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Wir zeigen bei den „Tagen der Manufakturen“ in Berlin die Fertigung von Maßschuhen.</p>
                                    </div>
                                </div>

                                <div className="milestone-item">
                                    <div className="m-item-img">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={img2019} alt="2019"/>
                                    </div>
                                    <div className="m-item-details">
                                        <h3 className="c-tag-2 reg-30 mb-3" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">September 2019</h3>
                                        <p className="c-tag-3" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Leonie Meißner beginnt bei uns die neue Ausbildung zur Maßschuhmacherin.</p>
                                    </div>
                                </div>

                                <div className="milestone-item">
                                    <div className="m-item-img">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={img2021} alt="2021"/>
                                    </div>
                                    <div className="m-item-details">
                                        <h3 className="c-tag-2 reg-30 mb-3" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">September 2021</h3>
                                        <p className="c-tag-3" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Wir feiern unser 20-jähriges Bestehen.</p>
                                    </div>
                                </div>  
                                
                            </Slider>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default MeilenSlider;