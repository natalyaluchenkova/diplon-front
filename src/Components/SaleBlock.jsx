import React from "react";
import DownSlider from "./DownSlider";

function SaleBlock() {
    return (
        <div className="saleBlock">
            <h3>Товары со скидкой</h3>
            <p className="ourCompany">Наша компания предлагает покупать товар со скидкой не только в дни распродаж <br />
или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!</p>
            <DownSlider />
        </div>
    );
}

export default SaleBlock;