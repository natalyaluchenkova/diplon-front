import React from "react";
import "../css/header-footer.css";
import logo from './img/logo.png';
import search from './img/search.png';
import cart from './img/cart.png';
import man from './img/man.png';


function Header() {
    return (
        <header>
            <a className="logo logo-header" href="#"><img src={logo} alt="logo" /></a>
            <nav className='up-nav'>
                <ul className='header-nav'>
                    <li><a href="#">Каталог товаров</a></li>
                    <li><a href="#">Блог</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
            <ol className='header-sign'>
                <li><a href="#"><img src={search} alt="search" /></a></li>                
                <li><a href="#"><img src={cart} alt="cart" /></a></li>                
                <li><a href="#"><img src={man} alt="man" /></a></li>               
            </ol>
        </header>
    );
}

export default Header;