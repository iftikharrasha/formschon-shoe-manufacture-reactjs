import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <>
            <section className="social-icons">
                <ul>
                <li><a href="https://www.snapchat.com/l/en-gb/"><i className="fa fa-snapchat-square" aria-hidden="true"></i></a></li>
                <li><a href="https://www.youtube.com/"><i className="fab fa-youtube-square"></i></a></li>
                <li><a href="https://www.facebook.com/"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                <li><a href="https://www.instagram.com/"><i className="fab fa-instagram-square"></i></a></li>
                </ul>
            </section>
        </>
    );
};

export default SocialMedia;