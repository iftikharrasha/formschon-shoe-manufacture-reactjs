import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './September.css';

const September = () => {
    return (
        <>
            <section className="september mt-300" id="chronologie">
                <div className="container c_custom">
                    <Row>
                        <Col md={5} className="offset-md-6 col-md-sep offset-md-sep mt-300 mt-sep-130">
                            <div className="september-inner">
                                <h2 className="sem-60 c-tag-2" data-aos="fade-up" data-aos-duration="1000">Im September 2001</h2>
                                <p className="reg-24 my-4" data-aos="fade-up" data-aos-duration="1200">… eröffneten wir Geschwister, Maria Gracia und Paolo Zuretti, in Bad Godesberg unsere Schuhmanufaktur. Zuvor hatten wir beide den Meisterbrief erworben und mehrere Jahre in verschiedenen Werkstätten Berufserfahrung gesammelt. Im September 2021 feiern wir also das 20-jährige Bestehen unserer Manufaktur. Wir freuen uns auf Ihren Besuch – ob online oder direkt in der Alten Bahnhofstraße 5a in Bonn-Bad Godesberg.</p>
                                <h5 className="lit-23" data-aos="fade-up" data-aos-duration="1500">Schuhmanufaktur Formschön <br/>
                                    Bad Godesberg
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default September;