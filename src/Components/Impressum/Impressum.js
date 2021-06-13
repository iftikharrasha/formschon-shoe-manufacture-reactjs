import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import flowerBig from '../../img/flower-big.png';
import './Impressum.css';

const Impressum = () => {
    return (
        <>
            <section class="impressum bg-tag-3">
                <div class="container c_custom">
                    <div class="row pt-200">
                        <div class="col-lg-5">
                            <div class="impress-inner">
                                <img class="img-fluid" src={flowerBig} alt="flower-icon-big" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1200"/>
                                <h2 class="sem-60 c-tag-2">Impressum</h2>
                            </div>
                        </div>
                        <div class="col-lg-7 pt-200 pt-im-50">
                            <div class="impress-right" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
                                <ul>
                                    <li>
                                        <p class="reg-24 c-tag-4 mb-2">Schuhmanufaktur Formschön GmbH</p>
                                    </li>
                                    <li>
                                        <p class="reg-24 c-tag-4 mb-2">Geschäftsführung: Maria Gracia und Paolo Zuretti</p>
                                    </li>
                                    <li>
                                        <p class="reg-24 c-tag-4 mb-2">Alte Bahnhofstraße 5a</p>
                                    </li>
                                    <li>
                                        <p class="reg-24 c-tag-4 mb-2">53173 Bonn-Bad Godesberg</p>
                                    </li>
                                    <li>
                                        <p class="reg-24 c-tag-4 mb-2">Tel: 0228-123450</p>
                                    </li>
                                </ul>
                            </div>

                            <div class="impress-right" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
                                <ul>
                                    <li>
                                        <p class="reg-24 c-tag-4 mb-2">info@schuhmanufaktur-formschön.de</p>
                                    </li>
                                    <li>
                                        <p class="reg-24 c-tag-4 mb-2">www.schuhmanufaktur-formschön.de</p>
                                    </li>
                                    <li>
                                        <p class="reg-24 c-tag-4 mb-2">Amtsgericht Bonn, Handelsregister Nr. XXX000XXX</p>
                                    </li>
                                    <li>
                                        <p class="reg-24 c-tag-4 mb-2">Finanzamt Bonn-Außenstadt, USt.ID: DE10111011</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Impressum;