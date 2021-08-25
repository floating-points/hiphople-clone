import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";


const SearchButton = styled.div`
	display: flex;
	margin-top: 25px;
	margin-left: 20px;
	cursor: pointer;
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
		</SearchButton>
	)
}

export default PostSearch;