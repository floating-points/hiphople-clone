import React from "react";
import styled from "styled-components";
import BoardGnb from "./BoardGnb";

const DomesticBoardContainer = styled.div`

`
const Board = styled.div`
	display: block;
	margin-top: 150px;
	padding-left: 150px;
	padding-right: 200px;
`
const BoardTitle = styled.div`
	font-size: 24px;
	font-weight: bold;
`

const BoardCategoryContainer = styled.ul`
	position: relative;
	margin-bottom: 0.5rem;;
	margin-top: 0.5rem;
`

const BoardCategory = styled.li`
	margin-right: 2rem;
	line-height: 1.5;
	font-size: 0.9rem;
	display: inline-block;
	position: relative;
	border: 1px solid #ccc;
	text-align: center;
`

const BoardTableContainer = styled.table`
	margin-top: 30px;
	width: 100%;
`

const BoardTableHeader = styled.th`
	text-align: center;
	font-weight: bold;
	line-height: 1.75em;
`

const BoardTableHeaderTitle = styled.th`
	text-align: center;
	font-weight: bold;
	min-width: 100px;
	line-height: 1.75em;
`

const BoardTableBody = styled.tbody`

`
const BoardTablePost = styled.tr`

	text-align: center;
	line-height: 1.75em;
`
const categories = [
	{
		type: "all",
		text: "전체",
		selected: true
	},
	{
		type: "music",
		text: "음악",
		selected: false
	},{
		type: "review",
		text: "리뷰",
		selected: false
	},{
		type: "notice",
		text: "공지",
		selected: false
	},
	{
		type: "general",
		text: "일반",
		selected: false
	},
]

const tableHeader = [
	"번호",
	"카테고리",
	"제목",
	"글쓴이",
	"날짜"
];

const posts = [
	{
		id: 1,
		type: "general",
		title: "민트초코 조아요",
		author: "ho",
		date : "123"
	},
	{
		id: 2,
		type: "general",
		title: "민트초코 조아요",
		author: "ho",
		date : "123"
	},{
		id: 3,
		type: "general",
		title: "민트초코 조아요",
		author: "ho",
		date : "123"
	},{
		id: 4,
		type: "general",
		title: "민트초코 조아요",
		author: "ho",
		date : "123"
	},
]
const DomesticBoard = () => {
	const TITLE = "국내 게시판"

	return (
		<DomesticBoardContainer>
			<BoardGnb />

			<Board>
				<BoardTitle>
					{TITLE}
				</BoardTitle>

				<BoardCategoryContainer>
					{categories.map((category) => (
						<BoardCategory>
							{category.text}
						</BoardCategory>
					))}
				</BoardCategoryContainer>

				<BoardTableContainer>

					<thead>
						<BoardTableHeader scope="col">번호</BoardTableHeader>
						<BoardTableHeader scope="col">카테고리</BoardTableHeader>
						<BoardTableHeaderTitle scope="col">제목</BoardTableHeaderTitle>
						<BoardTableHeader scope="col">글쓴이</BoardTableHeader>
						<BoardTableHeader scope="col">날짜</BoardTableHeader>
					</thead>

					<BoardTableBody>
						{posts.map((post => (
							<BoardTablePost>
								<td>{post.id}</td>
								<td>{post.type}</td>
								<td>{post.title}</td>
								<td>{post.author}</td>
								<td>{post.date}</td>
							</BoardTablePost>
						)))}
					</BoardTableBody>
					{/*
					<thead>
						{tableHeader.map((text) => (
							<BoardTableHeader>
								<span>{text}</span>
							</BoardTableHeader>
						))}
					</thead>

						*/}
				</BoardTableContainer>
			</Board>
		</DomesticBoardContainer>
	)
}

export default DomesticBoard;