import React, { useCallback, useState } from "react";
import styled from "styled-components";
import BoardGnb from "./BoardGnb/BoardGnb";
import BoardCategory from "./BoardCategory/BoardCategory";
import PostSearch from "./PostSearch/PostSearch";
import Pagination from "./Pagination/Pagination";
import Footer from "../Mainpage/Footer/Footer";
import RenderBoard from "./RenderBoard/RenderBoard";

const DomesticBoardContainer = styled.div`
`

const Board = styled.div`
	display: block;
	margin-top: 120px;
	padding-left: 150px;
	padding-right: 200px;
`
const Title = styled.div`
	font-size: 24px;
	font-weight: bold;
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


const DomesticBoard = () => {
	const TITLE = "국내 게시판";
	const ALL = "all";
	const [currentType, setCurrentType] = useState("all");
	const [currentPage, setCurrentPage] = useState(1);

	const onCategoryClick = useCallback(((type) => {
		setCurrentType(() => type);
	}), [currentType]);


	return (
		<DomesticBoardContainer>

			{/* 게시판 Gnb */}
			<BoardGnb />

			<Board>
				{/* 게시판 타이틀 */}
				<Title>
					{TITLE}
				</Title>

				{/* 게시판 카테고리 */}
				<BoardCategory
					currentType={currentType}
				 	onCategoryClick={onCategoryClick}
				/>

				<RenderBoard
					post={posts}
					currentType={currentType}
				/>
				<PostSearch />
				<Pagination
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					/>
			</Board>

			<Footer />
		</DomesticBoardContainer>
	)
}

export default DomesticBoard;