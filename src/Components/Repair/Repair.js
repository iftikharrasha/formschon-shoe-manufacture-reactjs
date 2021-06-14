import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import bild02 from '../../img/bild02.jpg';
import bild03 from '../../img/bild03.jpg';
import bild04 from '../../img/bild04.jpg';
import deco from '../../img/deco.png';
import './Repair.css';

const Repair = () => {
    var settings2 = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                },
            },
            {
                breakpoint: 600,
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
             <section className="repair leistungen h-sm">
                <div className="coffee-color h-sm"></div>
                <Container className="c_custom">
                    <Row>
                        <Col md={12} className="responsive2">

                            <Slider {...settings2}>

                                <div className="row repair-item overflowX overflowY">
                                    <div className="repair-text">
                                        <h2 className="sem-60 c-tag-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Reparieren:</h2>
                                        <p className="reg-22 my-5" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">Kommen Sie mit hochwertigen Lederwaren zu uns, wenn etwas kaputt ist. Wie zum Beispiel: ein eingerissener Riemen am Rucksack, ein Reißverschluss an der Tasche, der sich verhakt hat, schief getretene Stiefelsohlen, ein locker gewordener Schuhabsatz. Der Erhalt von schönen, Ihnen lieb gewordenen Qualitätswaren ist uns ein Anliegen. Wegwerfen war gestern!</p>
                                    </div>
                                    <Col md={9}>
                                        <img className="img-fluid" src={bild02} alt="bild02" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200"/>
                                    </Col>
                                </div>

                                <div className="row repair-item overflowX overflowY">
                                    <div className="repair-text">
                                        <h2 className="sem-60 c-tag-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Verbessern:</h2>
                                        <p className="reg-22 my-5" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">Kommen Sie mit hochwertigen Lederwaren zu uns, wenn etwas kaputt ist. Wie zum Beispiel: <br/>
                                            ein eingerissener Riemen am Rucksack, ein Reißverschluss an der Tasche, der sich verhakt hat, schief getretene Stiefelsohlen, ein locker gewordener Schuhabsatz. Der Erhalt von schönen, Ihnen lieb gewordenen Qualitätswaren ist uns ein Anliegen. Wegwerfen war gestern!</p>
                                    </div>
                                    <Col md={9}>
                                        <img className="img-fluid" src={bild03} alt="bild03" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200"/>
                                    </Col>
                                </div>

                                <div className="row repair-item overflowX overflowY">
                                    <div className="repair-text">
                                        <h2 className="sem-60 c-tag-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Kreieren:</h2>
                                        <p className="reg-22 my-5" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">Sprechen Sie uns an, wenn Sie exklusive Schuhe tragen wollen, Modelle nach Ihren modischen Vorstellungen und der Eigenart Ihrer Füße. Neben der Fertigung individueller Maßschuhe gibt es auch kostengünstigere Varianten, wie etwa die Maßkonfektion mit vielfältigen Wahlmöglichkeiten. Zögern Sie nicht!</p>
                                    </div>
                                    <Col md={9}>
                                        <img className="img-fluid" src={bild04} alt="bild04" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200"/>
                                    </Col>
                                </div>

                            </Slider>
                        </Col>

                    </Row>
                </Container>

                <div className="deco2">
                    <img className="img-fluid" src={deco} alt="deco"/>
                </div>
            </section>
        </>
    );
};

export default Repair;