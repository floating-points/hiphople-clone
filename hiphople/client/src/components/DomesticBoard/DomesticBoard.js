import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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

const DomesticBoard = () => {
	const TITLE = "국내 게시판";
	const [posts, setPosts] = useState([]);
	const [currentType, setCurrentType] = useState("all");
	const [currentPage, setCurrentPage] = useState(1);

	{/* 게시글을 불러온다 */}
	useEffect( () => {
		const fetchData = async () => {
			const posts = await axios.post("http://localhost:8000/post-all", {
				boardName: "domestic_posts"
			});

			{/*불러온 데이터에 type 객체 변경*/}
			for(let i = 0; i < posts.data.length; i++){
				if (posts.data[i].type === 1)
					posts.data[i].type = "all"
				else if (posts.data[i].type === 2)
					posts.data[i].type = "general"
				else if (posts.data[i].type === 3)
					posts.data[i].type = "review"
				else if (posts.data[i].type === 4)
					posts.data[i].type = "notice"
				else if (posts.data[i].type === 5)
					posts.data[i].type = "music"
			}
			setPosts(posts.data);
		}
		fetchData();
	}, []);

	const onCategoryClick = useCallback(((type) => {
		setCurrentType(() => type);
	}), [setCurrentType]);

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
					posts={posts}
					currentPage={currentPage}
					currentType={currentType}
				/>

				<PostSearch setPosts={setPosts} />

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