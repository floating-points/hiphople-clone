import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

const GnbContainer = styled.div`
	position: fixed;
	background: #1D1D1D;
	width: 100%;
	height: 50px;
	text-align: center;
	top: 0;
`
const GnbLogo = styled.div`
	position: relative;
	float: left;
	top: 15px;
	left: 15px;
`
const Gnb = styled.div`
	justify-content: center;
	margin-top: 1rem;
`

const GnbMenu = styled(Link)`
	cursor: pointer;
		white-space: pre;
		text-decoration: none;
		font-size: 1rem;
		margin-right: 2rem;
		color: #808080;

		&:hover {
			color : red;
		}
`

const menus = [
	{
		boardName: "/DomesticBoard", //임시 게시판 URL이름
		text: "국내 게시판", //화면에 보이는 게시판 이름
		component: "DomesticBoard" //버튼 클릭시 이동할 컴포넌트
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

const BoardGnb = () => {
	return (
		<GnbContainer>

			<GnbLogo>
				<img src="/images/board_logo.png"></img>
			</GnbLogo>

			<Gnb>
			{menus.map((menu) => (
				<GnbMenu className="gnb_menu" to={menu.boardName}>
					{menu.text}
				</GnbMenu>
			))}

			</Gnb>
		</GnbContainer>
	)
}

export default BoardGnb;