import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SaleImg from "./img/sale.png";
import star from "./img/star.png";
import grayBean from "./img/gray_bean.png";
import smallOrange from "./img/small_orange_round.png";
import smallGray from "./img/small_gray_round.png";
import starGray from "./img/starGray.png";


export default class DownSlider extends Component {
    render() {
      const settings = {
        className: "slideItem",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3        
      };
      return (
        <div className="sliderSale">
          <Slider {...settings}>
            <div>
              <div className="saleSlide">
              <p className="forSale">Скидки</p>
              <div className="innerSale">
                  <div><img className="saleImg" src={SaleImg} alt="sale" /></div>
                  <div>
                    <ul className="rightSide">
                      <li>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={starGray} alt="star" />
                      </li>
                      <li><a href="#"><span className="rate">4.0</span>(32 отзыва)</a></li>
                      <li>
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                      </li>
                      <li>Кислинка</li>
                      <li>
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                      </li>
                      <li>Горчинка</li>
                      <li>
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                      </li>
                      <li>Насыщенность</li>
                      <li>
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                      </li>
                    </ul>
                  </div>
              </div>
              <h5>Colombia Supremo</h5>
              <p className="descriptionSale">Свежеобжаренный кофе -<br /> описание товара, вкус, аромат</p>
              <ol className="salePrice">
                <li>
                  <p><del>350 грн</del></p>
                  <p>250 грн</p>
                </li>
                <li><button className="toBasket" type='button'>В корзину</button></li>
              </ol>
              </div>
            </div>
            <div>
              <div className="saleSlide">
              <p className="forSale">Скидки</p>
              <div className="innerSale">
                  <div><img className="saleImg" src={SaleImg} alt="sale" /></div>
                  <div>
                    <ul className="rightSide">
                      <li>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={starGray} alt="star" />
                      </li>
                      <li><a href="#"><span className="rate">4.0</span>(32 отзыва)</a></li>
                      <li>
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                      </li>
                      <li>Кислинка</li>
                      <li>
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                      </li>
                      <li>Горчинка</li>
                      <li>
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                      </li>
                      <li>Насыщенность</li>
                      <li>
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                      </li>
                    </ul>
                  </div>
              </div>
              <h5>Colombia Supremo</h5>
              <p className="descriptionSale">Свежеобжаренный кофе -<br /> описание товара, вкус, аромат</p>
              <ol className="salePrice">
                <li>
                  <p><del>350 грн</del></p>
                  <p>250 грн</p>
                </li>
                <li><button className="toBasket" type='button'>В корзину</button></li>
              </ol>
              </div>
            </div>
            <div>
              <div className="saleSlide">
              <p className="forSale">Скидки</p>
              <div className="innerSale">
                  <div><img className="saleImg" src={SaleImg} alt="sale" /></div>
                  <div>
                    <ul className="rightSide">
                      <li>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={starGray} alt="star" />
                      </li>
                      <li><a href="#"><span className="rate">4.0</span>(32 отзыва)</a></li>
                      <li>
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                        <img src={grayBean} alt="bean" />
                      </li>
                      <li>Кислинка</li>
                      <li>
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                      </li>
                      <li>Горчинка</li>
                      <li>
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                      </li>
                      <li>Насыщенность</li>
                      <li>
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallOrange} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                        <img src={smallGray} alt="round" />
                      </li>
                    </ul>
                  </div>
              </div>
              <h5>Colombia Supremo</h5>
              <p className="descriptionSale">Свежеобжаренный кофе -<br /> описание товара, вкус, аромат</p>
              <ol className="salePrice">
                <li>
                  <p><del>350 грн</del></p>
                  <p>250 грн</p>
                </li>
                <li><button className="toBasket" type='button'>В корзину</button></li>
              </ol>
              </div>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }