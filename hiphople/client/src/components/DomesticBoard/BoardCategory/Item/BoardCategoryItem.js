import React from "react";
import styled from "styled-components";

const CategoryItem = styled.li`
	margin-right: 2rem;
	line-height: 1.5;
	font-size: 0.9rem;
	display: inline-block;
	position: relative;
	border: 1px solid #ccc;
	text-align: center;
	cursor: pointer;

	&:hover {
		border: 1px solid #1e90ff;
	}

	background: ${props => props.selected ? "#1e90ff" : "white"};
	color: ${props => props.selected ? "white" : ""};
`

const BoardCategoryItem = ({
	type, text, selected, onCategoryClick, categories
}) => {
	return (
		<CategoryItem onClick={() => onCategoryClick(type, categories)} selected={selected}>
			{text}
		</CategoryItem>
	)
}

export default BoardCategoryItem;