import React from "react";
import Login from "./Login";
import Logo from "./Logo";
import Sns from "./Sns";

import "../styles/header.scss";

const Header = () => {
    return (
        <div>
            <div className="top">
                <Sns />
                <Login />
            </div>
            <div className="header" >
                <Logo />
            </div >
        </div>
    )
}
export default Header;
