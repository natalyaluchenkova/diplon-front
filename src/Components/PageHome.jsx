import React from "react";
import SimpleSlider from "./SimpleSlider";
import Catalog from "./Catalog";
import SaleBlock from "./SaleBlock";
import "../css/home.css"

function PageHome() {
    return (
        <div>
            <SimpleSlider />
            <Catalog />
            <SaleBlock />
        </div>
    );
}

export default PageHome;