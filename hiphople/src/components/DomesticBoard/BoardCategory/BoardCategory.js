import React from "react";
import styled from "styled-components";
import BoardCategoryItem from "./Item/BoardCategoryItem";

const CategoryContainer = styled.ul`
	position: relative;
	margin-bottom: 0.5rem;;
	margin-top: 0.5rem;
`

const categories = [
	{
		type: "all",
		text: "전체",
	},
	{
		type: "music",
		text: "음악",
	},{
		type: "review",
		text: "리뷰",
	},{
		type: "notice",
		text: "공지",
	},
	{
		type: "general",
		text: "일반",
	},
];

const BoardCategory = ({onCategoryClick, currentType}) => {
	return (
		<CategoryContainer>
					{categories.map((category) => (
						<BoardCategoryItem
						type={category.type}
						text={category.text}
						selected={category.type === currentType}
						onCategoryClick={onCategoryClick}
						 />
					))}
		</CategoryContainer>
	);
}


export default BoardCategory;