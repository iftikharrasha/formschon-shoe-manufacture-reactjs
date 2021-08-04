import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pflege from '../../img/pflege.webp';
import './Pflege.css';

const Pflege = () => {
    return (
        <>
            <section className="subpage sub-p bg-tag-2">
                <Container className="c_custom">
                    <Row className="pt-200">
                        <Col lg={6} className="mab-img">
                            <img className="img-fluid" src={pflege} alt="ihrem" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200"/>
                        </Col>
                        <Col lg={6}>
                            <div className="mabshuhe-inner pfledge-inner">
                                <h2 className="sem-60 sem-mb-60 c-tag-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Ihren Füßen zuliebe</h2>

                                <div className="pflege-list my-5">
                                    <ul data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                                        <li>
                                            <p className="c-tag-3 my-3">1. Verwenden Sie Streckleisten aus Holz und spannen Sie Ihre Schuhe ein, solange sie<span className="ml-3">vom Tragen noch warm und geschmeidig sind.</span></p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">2. Verwenden Sie nicht jeden Tag dasselbe Paar. Gute Schuhe wollen ausruhen dürfen.</p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">3. Bewahren Sie Schuhe in einem Schrank mit Lüftungsschlitzen auf</p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">4. Pflegen Sie das Oberleder ab und zu mit einem flüssigen Reiniger. Achten Sie<span className="ml-3">bei Lack- und Rauleder auf spezielle Pflegemittel.</span></p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">5. Stopfen Sie nass gewordene Schuhe mit Zeitungspapier aus, entfernen Sie weiße<span className="ml-3">Ränder mit warmem Wasser.</span></p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">6. Verwenden Sie nach der Fleckenentfernung passende Pflegemittel. Wir beraten Sie gerne.</p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">7. Entfernen Sie vor dem Pflegen die Schnürsenkel.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">8. Polieren Sie ausgiebig. Fragen Sie uns nach den richtigen Bürsten.</p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">9. Stecken Sie Ihre Schuhe auf Reisen in luftdurchlässige Beutel.
                                            </p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">10. Verwenden Sie immer einen Schuhlöffel.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Pflege;