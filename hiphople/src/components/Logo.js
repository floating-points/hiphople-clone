import React from "react";

import logoImg from "../images/logo.png";
import "../styles/logo.scss";

const Logo = () => {
    return (
        <div className="logo">
            <a href="#">
                <img src={logoImg} />
            </a>
        </div>

    )
}

export default Logo;
