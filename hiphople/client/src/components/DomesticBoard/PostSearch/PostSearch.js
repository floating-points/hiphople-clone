import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import WritePost from "../WritePost/WritePost";
import { Link, Redirect  } from "react-router-dom";

const SearchButton = styled.div`
	position: relative;
	display: flex;
	margin-top: 25px;
	margin-left: 20px;
	cursor: pointer;
`

const WriteButton = styled.div`
	position: absolute;
	right:0%;
`
const PostSearch = ({setPosts}) => {
	const [text, setText] = useState("");

	const handleChange = (e) => {
		setText(e.target.value);
	}
	const fetchData = async () => {
		const posts = await axios.post("http://localhost:8000/post-search", {
			boardName: "domestic_posts",
			author: text
		});
		setPosts(posts.data);
	}
	return (
		<SearchButton>
			<input type="text" size="3" onChange={handleChange}></input>
			<div onClick={fetchData}>검색</div>
			<WriteButton>
				<Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/DomesticBoard/Write">글쓰기</Link>
			</WriteButton>
		</SearchButton>
	)
}

export default PostSearch;