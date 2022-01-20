import React from "react";
import "../css/header-footer.css";
import logo from './img/logo.png';


function Footer() {
    return (
        <footer>
            <a className="logo logo-footer" href="#"><img src={logo} alt="logo" /></a>
            <nav className='down-nav'>
                <ol className='footer-nav'>
                    <li><a href="#">Каталог товаров</a></li>
                    <li><a href="#">Блог</a></li>
                    <li><a href="#">Контакты</a></li>
                </ol>
            </nav>             
        </footer>
    );
}

export default Footer;