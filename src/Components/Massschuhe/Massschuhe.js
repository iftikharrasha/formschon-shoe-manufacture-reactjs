import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ihrem from '../../img/ihrem.jpg';
import './Massschuhe.css';

const Massschuhe = () => {
    return (
        <>
            <section className="subpage bg-tag-2">
                <Container className="c_custom">
                    <Row className="pt-200">
                        <Col lg={6} className="mab-img">
                            <img className="img-fluid" src={ihrem} alt="ihrem" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1200"/>
                        </Col>
                        <Col lg={6}>
                            <div className="mabshuhe-inner">
                                <h2 className="sem-60 sem-mb-60 c-tag-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">Der Weg zu<br/><span className="ml-5">Ihrem Maßschuh</span></h2>

                                <div className="mabshuhe-list my-5">
                                    <ul data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                                        <li>
                                            <p className="c-tag-3 my-3">1. Die Fußvermessung</p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">2. Die Auswahl von Farbe und Form</p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">3. Die Entscheidung fürs Leder</p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">4. Die Herstellung des Leistens</p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">5. Die Fertigung des Schuhs – Teil I</p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">6. Die Anprobe </p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">7. Die Fertigung des Schuhs – Teil II</p>
                                        </li>
                                        <li>
                                            <p className="c-tag-3 my-3">8. Letzte Anpassungen und Feinarbeiten</p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="my-4 c-tag-3" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">Der zeitliche Aufwand bei der Herstellung Ihrer individuellen Maßschuhe kann beträchtlich variieren, je nach Modell, Machart und Sonderwünschen. Wir rechnen mit mindestens 30 Arbeitsstunden. Der gesamte Arbeitsprozess zieht sich in der Regel über acht Wochen hin. Dreimal sind Sie in dieser Zeit gefragt: Beim Vermessen und Wählen des Modells, bei einer ersten Anprobe und schließlich am Tag der Fertigstellung. Rechnen Sie pro Paar mit einem Preis zwischen 2000,– und 3000,– Euro. Sobald wir einen fußgerechten Leisten für Sie gefertigt haben, können wir ihn für alle Nachfolgemodelle nutzen – und Sie sparen bares Geld. Damenschuhe sind in der Regel aufwendiger und daher etwas teurer als Modelle für den Herrn.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Massschuhe;