import React from "react";

import Header from "./Header/Header";
import PosterBanner from './PosterBanner/PosterBanner';
import Swiper from "./Swiper/Swiper";
import Footer from './Footer/Footer';

const Mainpage = () => {
	return(
		<div>
			<Header />
    	  	<Swiper />
     		<PosterBanner />
     		<Footer />
		</div>
	)
}
export default Mainpage;