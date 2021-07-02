import React from "react";
import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoInstagram,
} from 'react-icons/io';
import logoImg from "../images/logo.png";
import "../styles/logo.scss";

const Logo = () => {
    return (
        <div>
            <div className="logo">
                <a href="#">
                    <img src={logoImg} />
                </a>
            </div>
            <div className="top">
                <ul className="sns">
                    <IoLogoInstagram className="logo" size="2rem" />
                    <IoLogoYoutube className="logo" size="2rem" />
                    <IoLogoFacebook className="logo" size="2rem" />
                </ul>
                <ul className="login">
                    <a href="#">LOGIN</a>
                </ul>
            </div>
        </div>
    )
}

export default Logo;
