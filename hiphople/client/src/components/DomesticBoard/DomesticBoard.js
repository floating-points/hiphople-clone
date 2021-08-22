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
			const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

			{/*불러온 데이터에 임의로 type, date객체 추가 */}
			for(let i = 0; i < response.data.length; i++){
				if (i % 5 === 0)
					response.data[i].type = "all"
				else if (i % 5 === 1)
					response.data[i].type = "general"
				else if (i % 5 === 2)
					response.data[i].type = "review"
				else if (i % 5 === 3)
					response.data[i].type = "notice"
				else if (i % 5 === 4)
					response.data[i].type = "music"
				response.data[i].date = i;
				response.data[i].author = "ho";
			}
			for(let i = 101; i< 132; i++)
					response.data.push({...response.data[i - 100], id:i});
			setPosts(response.data);
		}

		fetchData();
	}, []);
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
					posts={posts}
					currentPage={currentPage}
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