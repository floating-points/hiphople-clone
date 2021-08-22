import React from "react";
import styled from "styled-components";


const SearchButton = styled.div`
	display: inline-block;
	margin-top: 25px;
	margin-left: 20px;
	cursor: pointer;
`
const PostSearch = () => {
	return (
		<SearchButton>
			검색
		</SearchButton>
	)
}

export default PostSearch;