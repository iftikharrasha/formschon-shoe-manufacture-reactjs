import React from 'react';
import { Link } from 'react-router-dom';
// import { HashLink as NavLink } from 'react-router-hash-link';
// import { animateScroll as scroll} from 'react-scroll';
import formschon from '../../img/formschon-gold.png';
import './Header.css';

const Header = () => {
    function activeToggle() {
        document.getElementById('navigation').classList.toggle('menuToggle');
        document.getElementById('hamburger').classList.toggle('backgrounColorToggle');
        document.getElementById('listItems').classList.toggle('show');
        document.getElementById('top').classList.toggle('top');
        document.getElementById('middle').classList.toggle('middle');
        document.getElementById('bottom').classList.toggle('bottom');
    }
    
    const checkpoint = 300;
    let opacity;
    window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
		if (currentScroll <= checkpoint) {
			opacity = 1 - currentScroll / checkpoint;
		} else {
			opacity = 0;
		}
		document.querySelector(".brand").style.opacity = opacity;
    });

    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <nav id="navigation">
                        <button className="toggle-btn" id="hamburger" onClick={activeToggle}>
                            <svg viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="10" rx="7" id="top"></rect>
                            <rect width="100" height="10" rx="7" y="30" id="middle"></rect>
                            <rect width="100" height="10" rx="7" y="30" id="bottom"></rect>
                            </svg>
                        </button>
                    
                        <ul className="menu hide" id="listItems">
                            {/* <li className="pb-sm-4 pb-3">
                                <NavLink to="home#jubilaum" className="navLink reg-24 text-uppercase" smooth={true} duration={500} spy={true} exact='true' offset='-80'>Jubiläum</NavLink>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <NavLink to="home#chronologie" className="navLink reg-24 text-uppercase" onClick={activeToggle} smooth={true} duration={500} spy={true} exact='true' offset='-80'>Chronologie</NavLink>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <NavLink to="home#leistungen" className="navLink reg-24 text-uppercase" onClick={activeToggle} smooth={true} duration={500} spy={true} exact='true' offset='-80'>Leistungen</NavLink>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="/massschuhe" className="navLink reg-24 text-uppercase" onClick={activeToggle}>Maßschuhe</Link>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="/pflege" className="navLink reg-24 text-uppercase" onClick={activeToggle}>Pflegetipps</Link>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <NavLink to="home#stimmen" className="navLink reg-24 text-uppercase" onClick={activeToggle} smooth={true} duration={500} spy={true} exact='true' offset='-80'>Stimmen</NavLink>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <NavLink to="home#kontakt" className="navLink reg-24 text-uppercase" onClick={activeToggle} smooth={true} duration={500} spy={true} exact='true' offset='-80'>Kontakt</NavLink>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="/impressum" className="navLink reg-24 text-uppercase" onClick={activeToggle}>Impressum</Link>
                            </li> */}
                            <li className="pb-sm-4 pb-3">
                                <Link to="/zuhause" className="navLink reg-24 text-uppercase" onClick={activeToggle}>Zuhause</Link>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="/massschuhe" className="navLink reg-24 text-uppercase" onClick={activeToggle}>Maßschuhe</Link>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="/pflege" className="navLink reg-24 text-uppercase" onClick={activeToggle}>Pflegetipps</Link>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="/impressum" className="navLink reg-24 text-uppercase" onClick={activeToggle}>Impressum</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="brand">
                        {/* <Link to="/home" onClick={() => {scroll.scrollToTop()}}><img className="img-fluid" src={formschon} alt="formschon"/></Link> */}
                        <Link to="/zuhause"><img className="img-fluid" src={formschon} alt="formschon"/></Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;