import React from "react";
import catalogBeans from "./img/catalog_beans.png";
import catalogTea from "./img/catalog_tea.png";
import catalogVending from "./img/catalog_vending.png";
import catalogHealthy from "./img/catalog_healthy.png";


function Catalog() {
    return (
        <div className="catalogItem">
            <h3>Каталоги нашей продукции</h3>
            <ul className="catalogList">
                <li><div className="imgBlock"><img src={catalogBeans} alt="coffee" /></div>
                    <h5>Свежеобжаренный кофе</h5>
                    <button type="button">Купить</button>
                </li>
                <li><div className="imgBlock"><img src={catalogTea} alt="coffee" /></div>
                    <h5>Чай и кофейные напитки</h5>
                    <button type="button">Купить</button>
                </li>
                <li><div className="imgBlock"><img src={catalogVending} alt="coffee" /></div>
                    <h5>Продукция для вендинга</h5>
                    <button type="button">Купить</button>
                </li>
                <li><div className="imgBlock"><img src={catalogHealthy} alt="coffee" /></div>
                    <h5>Здоровое питание</h5>
                    <button type="button">Купить</button>
                </li>
            </ul>
        </div>
    );
}

export default Catalog;