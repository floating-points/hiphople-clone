import React from "react";
import "./gnb.scss";
import { Route, Link } from "react-router-dom";


const menus = [
	{
		boardName: "boardName", //임시 게시판 URL이름
		text: "국내 게시판", //화면에 보이는 게시판 이름
		component: "Component" //버튼 클릭시 이동할 컴포넌트
	},
	{
		boardName: "boardName",
		text: "국외 게시판",
		component: "Component"
	},
	{
		boardName: "boardName",
		text: "패션 게시판",
		component: "Component"
	},
	{
		boardName: "boardName",
		text: "워크 게시판",
		component: "Component"
	},
	{
		boardName: "boardName",
		text: "믹스 게시판",
		component: "Component"
	},
	{
		boardName: "boardName",
		text: "앨범 게시판",
		component: "Component"
	},
]

const Gnb = () => {
	return (
		<div className="gnb">
			<Route path="boardName" />
			<Route path="boardName" />
			<Route path="boardName" />
			<Route path="boardName" />
			<Route path="boardName" />
			<Route path="boardName" />
			{menus.map((menu) => (
				<Link className="gnb_menu" to={menu.boardName}>
					{menu.text}
				</Link>
			))}
		</div>
	)
}

export default Gnb;