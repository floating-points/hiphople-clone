import React from "react";
import "./footer.scss";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer_logo">
					<img src="/images/footer_logo.png" />
				</div>

				<div className="footer_text">
					<div className="link">
						<a href="#">ABOUT</a>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="#">ADVERTISEMENT</a>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="#">PRIVACY</a>
					</div>

					<div className="company_information">
                	    힙합엘이 | 서울시 마포구 와우산로10길 37, 2층 | 070-4103-6000 | 등록번호: 서울아04698
						<br/>
						등록·발행일: 2017.09.07 | 발행·편집인: 최성웅 | 청소년보호책임자: 최성웅

						<br/>
						<br/>
						© HIPHOPLE All Right Reserved.
					</div>
				</div>

			</div>
		</div>
	)
}


export default Footer;