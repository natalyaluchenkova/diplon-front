import React, { Component } from "react";
import Slider from "react-slick";
import beans from './img/coffee-beans-1.png';
import cup from './img/cup.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };      

      return (
        <div className="sliderContainer">          
          <Slider {...settings}>
          <div >
            <div className='slide'>
              <div>
                <h2>Свежеобжаренный кофе</h2>
                <p>Кофе собственной обжарки из разных стран <br /> произрастания с доставкой на дом.</p>
                <p>Мы обжариваем кофе <span className="everyWeekend">каждые выходные.</span></p>
                <button type="button">Посмотреть каталог</button>
              </div>
              <div className="coffeeImg">
                <img className="beans" src={beans} alt="beans" />
                <img className="cup" src={cup} alt="cup" />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className="innerSlide">
              <div>
                <h2>Свежеобжаренный кофе</h2>
                <p>Кофе собственной обжарки из разных стран <br /> произрастания с доставкой на дом.</p>
                <p>Мы обжариваем кофе <span className="everyWeekend">каждые выходные.</span></p>
                <button type="button">Посмотреть каталог</button>
              </div>
              <div className="coffeeImg">
                <img className="beans" src={beans} alt="beans" />
                <img className="cup" src={cup} alt="cup" />
              </div>
            </div>
          </div>
          <div className='slide'>
            <div className="innerSlide">
              <div>
                <h2>Свежеобжаренный кофе</h2>
                <p>Кофе собственной обжарки из разных стран <br /> произрастания с доставкой на дом.</p>
                <p>Мы обжариваем кофе <span className="everyWeekend">каждые выходные.</span></p>
                <button type="button">Посмотреть каталог</button>
              </div>
              <div className="coffeeImg">
                <img className="beans" src={beans} alt="beans" />
                <img className="cup" src={cup} alt="cup" />
              </div>
            </div>
          </div>
          </Slider>
        </div>
      );
    }
  }