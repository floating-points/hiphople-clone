import React from "react";
import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoInstagram,
} from 'react-icons/io';
import "./sns.scss";

const Sns = () => {
	return (
		<div className="sns">
            <a href="https://www.instagram.com/" target="_blank" rel="noopenner">
            <IoLogoInstagram className="icon" size="2rem" />
            </a>

            <a href="https://www.youtube.com/?hl=KO" target="_blank" rel="noopenner">
            <IoLogoYoutube className="icon" size="2rem" />
            </a>

            <a href="https://m.facebook.com/?locale2=ko_KR" target="_blank" rel="noopenner">
             <IoLogoFacebook className="icon" size="2rem" />
            </a>
             </div>
	)
}

export default Sns;