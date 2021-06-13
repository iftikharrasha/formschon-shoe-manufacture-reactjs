import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import './Stimmen.css';

const Stimmen = () => {
    var settings3 = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
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
             <section className="stimmen" id="stimmen">
                <Container className="c_custom">
                    <Row>
                        <Col md={12} className="py-st-300 responsive3">

                            <Slider {...settings3}>

                                <div className="stimmen-inner">
                                    <h2 className="sem-60 c-tag-2" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Das sagen unsere<br/><span className="ml-5">Kundinnen und Kunden:</span></h2>
                                    <p className="reg-24 my-4 text-center c-tag-7" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">„Ich weiß nicht, wie viel Zeit ich immer damit vertan habe, Schuhe zu finden, die mir sowohl gefielen als auch wirklich gut passten. Meistens entschied ich mich dann für etwas optisch Ansprechendes und nahm dafür Schmerzen an den Füßen in Kauf. Damit ist nun Schluss.“</p>
                                </div>

                                <div className="stimmen-inner">
                                    <h2 className="sem-60 c-tag-2" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Das sagen unsere<br/><span className="ml-5">Kundinnen und Kunden:</span></h2>
                                    <p className="reg-24 my-4 text-center c-tag-7" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Mir kommt es aufs Preis-Leistungs-Verhältnis an. Und das stimmt bei „Formschön“.</p>
                                </div>

                                <div className="stimmen-inner">
                                    <h2 className="sem-60 c-tag-2" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Das sagen unsere<br/><span className="ml-5">Kundinnen und Kunden:</span></h2>
                                    <p className="reg-24 my-4 text-center c-tag-7" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Ich bin 16 Stunden am Tag im wahrsten Sinn des Wortes auf den Füßen. Und da merkt man schnell, welches Schuhwerk man trägt. Seit ich einmal gemerkt habe, welchen Unterschied es macht, ob die Schuhe wie angegossen passen oder nicht, ist für mich klar: Die Maßschuhe von Formschön sind ihren Preis wert.</p>
                                </div>

                                <div className="stimmen-inner">
                                    <h2 className="sem-60 c-tag-2" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Das sagen unsere<br/><span className="ml-5">Kundinnen und Kunden:</span></h2>
                                    <p className="reg-24 my-4 text-center c-tag-7" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Ich komme gerne in die Maßschuhmacherei Formschön, weil mir die Atmosphäre gefällt und weil ich mich immer gut beraten fühle.</p>
                                </div>

                                <div className="stimmen-inner">
                                    <h2 className="sem-60 c-tag-2" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Das sagen unsere<br/><span className="ml-5">Kundinnen und Kunden:</span></h2>
                                    <p className="reg-24 my-4 text-center c-tag-7" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Ich hasse das Einkaufen. Und deshalb bin ich froh, dass es die Schuhmanufaktur Formschön gibt. Dort weiß ich, was ich für mein Geld bekomme. Außerdem hält ein Paar Maßschuhe einfach lange – und erspart es mir, laufend wieder auswählen und anprobieren zu müssen.</p>
                                </div>

                                <div className="stimmen-inner">
                                    <h2 className="sem-60 c-tag-2" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Das sagen unsere<br/><span className="ml-5">Kundinnen und Kunden:</span></h2>
                                    <p className="reg-24 my-4 text-center c-tag-7" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Wenn ich all diese Plastikschuhe in den üblichen Auslagen sehe, denke ich: Welche Materialvergeudung! Da sind handgefertigte Schuhe doch viel nachhaltiger.</p>
                                </div>

                                <div className="stimmen-inner">
                                    <h2 className="sem-60 c-tag-2" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Das sagen unsere<br/><span className="ml-5">Kundinnen und Kunden:</span></h2>
                                    <p className="reg-24 my-4 text-center c-tag-7" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Maßschuhe kann ich mir nicht leisten. Zum Glück habe ich ein unproblematisches Paar Füße, für die ich leicht hochwertige Konfektionsschuhe finde. Sie müssen zeitlos gut aussehen und aus bestem Leder gefertigt sein. Dann bringe ich sie im Laufe der Jahre immer mal wieder zur Schuhmanufaktur Formschön, wenn Absätze repariert oder neue Sohlen aufgebracht werden müssen. Das lohnt sich!</p>
                                </div>

                                <div className="stimmen-inner">
                                    <h2 className="sem-60 c-tag-2" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1200">Das sagen unsere<br/><span className="ml-5">Kundinnen und Kunden:</span></h2>
                                    <p className="reg-24 my-4 text-center c-tag-7" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200">Einmal habe ich einen sehr passenden Spruch gehört: „Wer billigt kauft, zahlt doppelt!“</p>
                                </div>

                            </Slider>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Stimmen;