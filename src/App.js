import { React, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './ScrollToTop.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import LazyLoad from './Components/LayLoadSpinner/LazyLoadSpinner';
import Hero from './Components/Hero/Hero';
// import logo from './logo.svg';
import './App.css';
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
                                            <Hero></Hero>
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

        
        <div class="social-icons">
            <ul>
              <li><a href="https://www.snapchat.com/l/en-gb/"><i class="fa fa-snapchat-square" aria-hidden="true"></i></a></li>
              <li><a href="https://www.youtube.com/"><i class="fab fa-youtube-square"></i></a></li>
              <li><a href="https://www.facebook.com/"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/"><i class="fab fa-instagram-square"></i></a></li>
            </ul>
        </div>
    </div>
  );
}

export default App;
