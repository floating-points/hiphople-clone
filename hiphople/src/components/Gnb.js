import React from "react";
import "../styles/gnb.scss";
const menus = [
	{
		text: "국내 게시판"
	},
	{
		text: "국외 게시판"
	},
	{
		text: "패션 게시판"
	},
	{
		text: "워크 게시판"
	},
	{
		text: "믹스 게시판"
	},
	{
		text: "앨범 게시판"
	},
]

const Gnb = () => {
	return (
		<div className="gnb">
			{menus.map( (menu) => (
				<div className="gnb_menu">
					{menu.text}
				</div>
			))}
		</div>
	)
}

export default Gnb;