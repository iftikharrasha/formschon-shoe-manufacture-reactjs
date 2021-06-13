import { React, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import LazyLoad from './Components/LayLoadSpinner/LazyLoadSpinner';
import Hero from './Components/Hero/Hero';
import './App.css';
import SocialMedia from './Components/SocialMedia/SocialMedia.js';
import September from './Components/September/September.js';
import Header from './Components/Header/Header.js';
import Eleganz from './Components/Eleganz/Eleganz.js';
import MeilenSlider from './Components/MeilenSlider/MeilenSlider.js';
import Leistungen from './Components/Leistungen/Leistungen.js';
import Repair from './Components/Repair/Repair.js';
import Manufaktur from './Components/Manufaktur/Manufaktur.js';
import Zuliebe from './Components/Zuliebe/Zuliebe.js';
import Stimmen from './Components/Stimmen/Stimmen.js';
import Footer from './Components/Footer/Footer.js';
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));

function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop>
                 <Route render={({location}) => (
                     <TransitionGroup>
                        <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="fade"
                        >
                            <Switch location={location}>
                                <Route path="/home">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            
                                        </Suspense>
                                </Route>
                                <Route path="/profile/:outletKey">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                          <NotFound></NotFound>
                                        </Suspense>
                                </Route>
                                <Route path="/about">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                          <NotFound></NotFound>
                                        </Suspense>
                                </Route>
                                <Route path="/contact">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            
                                        </Suspense>
                                </Route>
                                <Route exact path="/">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Header/>
                                            <Hero/>
                                            <September/>
                                            <Eleganz/>
                                            <MeilenSlider/>
                                            <Leistungen/>
                                            <Repair/>
                                            <Manufaktur/>
                                            <Zuliebe/>
                                            <Stimmen/>
                                            <Footer/>
                                            <SocialMedia/>
                                        </Suspense>
                                </Route>
                                <Route path="*">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <NotFound></NotFound>
                                        </Suspense>
                                </Route>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                 )} />
            </ScrollToTop>
        </Router>
    </div>
  );
}

export default App;
