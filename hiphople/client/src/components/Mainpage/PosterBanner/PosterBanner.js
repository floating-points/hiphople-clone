import React from "react";
import "./posterbanner.scss";

const posters = [
	{
		image: "/images/video_1.jpg",
		url: "https://www.youtube.com/playlist?list=PLhmKRkY889phqhPA4--03wQJBU_SBeEsz"
	},
	{
		image: "/images/video_2.jpg",
		url: "https://www.youtube.com/playlist?list=PLhmKRkY889pgiSnAthzGEDDEZksKQYVjB"
	},
	{
		image: "/images/video_3.jpg",
		url: "https://www.youtube.com/playlist?list=PLhmKRkY889pgmx9c48DQyR-t1QkXwqjQu"
	},
	{
		image: "/images/video_4.jpg",
		url: "https://www.youtube.com/watch?v=TzgRQB-VvDg&list=PLhmKRkY889pioXwSkmonDzyep6haSRdrJ"
	},
	{
		image: "/images/video_5.jpg",
		url: "https://www.youtube.com/watch?v=tYnGkt0-Zjk&list=PLhmKRkY889phO5QdM4ftjmICsQRs7ADyI"
	}
]
const PosterBanner = () => {
	return (
		<div>
			<div className="posterbanner_title">
				<span>VIDEO SERIES</span>
			</div>

			<div className="poster_banner">
				{posters.map( (poster) => (
					<div className="poster">
					<a href={poster.url} target="_blank" rel="noopener">
						<img src={poster.image} />
						</a>
					</div>
				))}
			</div>
		</div>
	)
}

export default PosterBanner;