import React from "react";
import styled from "styled-components";
import BoardItem from "./BoardItem/BoardItem";



const TableContainer = styled.table`
	margin-top: 30px;
	width: 100%;
`

const TableHeader = styled.th`
	text-align: center;
	font-weight: bold;
	line-height: 1.75em;
`

const TableHeaderTitle = styled.th`
	text-align: center;
	font-weight: bold;
	min-width: 100px;
	line-height: 1.75em;
`

const TableBody = styled.tbody`

`

const posts = [
	{
		id: 1,
		type: "general",
		title: "일반 타입 게시글 입니다",
		author: "ho",
		date : "123"
	},
	{
		id: 2,
		type: "music",
		title: "음악 타입 게시글 입니다",
		author: "ho",
		date : "123"
	},{
		id: 3,
		type: "review",
		title: "리뷰 타입 게시글 입니다",
		author: "ho",
		date : "123"
	},
	{
		id: 4,
		type: "notice",
		title: "공지 타입 게시글 입니다",
		author: "ho",
		date : "123"
	},
	{
		id: 5,
		type: "all",
		title: "전체 타입 게시글 입니다",
		author: "ho",
		date : "123"
	},
	{
		id: 6,
		type: "general",
		title: "일반 타입 게시글 입니다",
		author: "ho",
		date : "123"
	},
]

const RenderBoard = ({ post, currentType}) => {
	const ALL = "all";

	return (
		<TableContainer>
		{/* 게시글 헤더 */}
		<thead>
			<TableHeader scope="col">번호</TableHeader>
			<TableHeader scope="col">카테고리</TableHeader>
			<TableHeaderTitle scope="col">제목</TableHeaderTitle>
			<TableHeader scope="col">글쓴이</TableHeader>
			<TableHeader scope="col">날짜</TableHeader>
		</thead>

		{/* 게시글 내용 */}
		<TableBody>
			{
				posts && posts.map((post) => (
					currentType === ALL ?
					<BoardItem
					post={post} />
				:
					currentType === post.type ?
					<BoardItem
					post={post} />
					:
					""
				))
			}
		</TableBody>
	</TableContainer>
	)
}

export default RenderBoard;