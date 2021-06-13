import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import formschon from '../../img/formschon.png';
import './Header.css';

const Header = () => {
    // const hamburger = document.getElementById("hamburger");
    // const nav = document.querySelector("nav");
    // const burgerSvg = document.querySelectorAll("rect");
    // const menu = document.querySelector("ul.menu");
    // const navLink = document.getElementsByClassName("navLink");

    // window.onresize = function (event) {
    //     if (window.innerWidth >= 600 && nav.className == "menuToggle") {
    //         toggleMenu();
    //     }
    // };

    // function activeToggle(){
    //     let i;
    //     for (i = 0; i < navLink.length; i++) {
    //             navLink[i].setAttribute("tabindex", 0);
    //             navLink[i].onClick = function () {
    //             toggleMenu();
    //         };
    //         if (nav.classList.contains("menuToggle")) {
    //             navLink[i].setAttribute("tabindex", -1);
    //         }
    //     }
    //     toggleMenu();
    // }

    // function toggleMenu() {
    //     nav.classList.toggle("menuToggle");
    //     menu.classList.toggle("show");
    //     hamburger.classList.toggle("backgrounColorToggle");
    //     burgerSvg[0].classList.toggle("top");
    //     burgerSvg[1].classList.toggle("middle");
    //     burgerSvg[2].classList.toggle("bottom");
    // }

    // const checkpoint = 300;
 
    // let opacity;
    // window.addEventListener("scroll", () => {
    // const currentScroll = window.pageYOffset;
    // if (currentScroll <= checkpoint) {
    //     opacity = 1 - currentScroll / checkpoint;
    // } else {
    //     opacity = 0;
    // }
    // document.querySelector(".brand").style.opacity = opacity;
    // });
      

    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <nav>
                    {/* onClick={activeToggle} */}
                        <button className="toggle-btn" id="hamburger">
                            <svg viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="10" rx="7"></rect>
                            <rect width="100" height="10" rx="7" y="30"></rect>
                            <rect width="100" height="10" rx="7" y="30"></rect>
                            </svg>
                        </button>
                    
                        <ul className="menu hide">
                            <li className="pb-sm-4 pb-3"><a href="#jubilaum" className="navLink reg-24 text-uppercase">Jubiläum</a></li>
                            <li className="pb-sm-4 pb-3"><a href="#chronologie" className="navLink reg-24 text-uppercase">Chronologie</a></li>
                            <li className="pb-sm-4 pb-3"><a href="#leistungen" className="navLink reg-24 text-uppercase">Leistungen</a></li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="/massschuhe" className="navLink reg-24 text-uppercase">Maßschuhe</Link>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="/pflege" className="navLink reg-24 text-uppercase">Pflegetipps</Link>
                            </li>
                            <li className="pb-sm-4 pb-3"><a href="#stimmen" className="navLink reg-24 text-uppercase">Stimmen</a></li>
                            <li className="pb-sm-4 pb-3"><a href="#kontakt" className="navLink reg-24 text-uppercase">Öffnungszeiten und Kontakt</a></li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="/impressum" className="navLink reg-24 text-uppercase">Impressum</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="brand">
                        <a href="index.html"><img className="img-fluid" src={formschon} alt="formschon"/></a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;