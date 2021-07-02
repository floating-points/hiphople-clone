import React from "react";
import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoInstagram,
} from 'react-icons/io';
import "../styles/sns.scss";

const Sns = () => {
	return (
		<div className="sns">
            <IoLogoInstagram className="icon" size="2rem" />
            <IoLogoYoutube className="icon" size="2rem" />
             <IoLogoFacebook className="icon" size="2rem" />
		</div>
	)
}

export default Sns;