import React from "react";
import { useState } from "react";
import {
    IoIosArrowBack,
	IoIosArrowForward
} from 'react-icons/io';
import "./swiper.scss";

const slides = [
	{
		image: "/images/1.jpg",
		title: "첫 번째 멍뭉이"
	},
	{
		image: "/images/2.jpg",
		title: "첫 번째 멍뭉이"
	},
	{
		image: "/images/3.jpg",
		title: "첫 번째 멍뭉이"
	},
	{
		image: "/images/4.jpg",
		title: "첫 번째 멍뭉이"
	}
];

const Swiper = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentPosition, setCurrentPosition] = useState(0);

	const IMAGE_WIDTH = 720;
	const MAX_IMAGE_COUNT = 3; //시작을 0부터 하므로 개수의 숫자는 -1
	let styles = {
		transform: `translateX(${currentPosition}px)`
	}

	const onNextClick = () => {
		if (currentIndex < MAX_IMAGE_COUNT)
		{
			setCurrentIndex(currentIndex + 1);
			setCurrentPosition(currentPosition - IMAGE_WIDTH)
			styles = {
				transform: `translateX(${currentPosition}px)`
			}
		}
	}

	const onPrevClick = () => {
		if (currentIndex > 0)
		{
			setCurrentIndex(currentIndex - 1);
			setCurrentPosition(currentPosition + IMAGE_WIDTH)
			styles = {
				transform: `translateX(${currentPosition}px)`
			}
		}
	}

	return (
		<div className="slider">
			<div className="container">
				<div className="slide" style={styles}>
					{slides.map( (slide) => (
						<img src={slide.image} />
					))}
				</div>
			</div>
			<IoIosArrowBack className="prev_button" size="3rem" onClick={onPrevClick} />
			<IoIosArrowForward className="next_button" size="3rem" onClick={onNextClick} />
		</div>
	)
}

export default Swiper;