import React, { useCallback } from "react";
import styled from "styled-components";


const PageContainer = styled.ul`
	margin-top: 40px;
	text-align: center;
`

const PageItem = styled.li`
	display: inline-block;
	cursor: pointer;
	width: 20px;

	&:hover {
		border: 1px solid #1e90ff;
	}

	background: ${props => props.selected ? "#1e90ff" : "white"};
	color: ${props => props.selected ? "white" : ""};
`

const PageItemButton = styled.li`
	display: inline-block;
	cursor: pointer;
	width: 40px;
`
const Pagination = ({currentPage, setCurrentPage}) => {
	const pages = [];
	const MAXPAGE = 10;

	for (let i= 1; i <= 10; i++)
		pages.push(i);

	const onPageClick = useCallback((page) => (
		setCurrentPage(() => page)
	), []);

	const onPrevClick = useCallback((page) => (
		page > 1 ? setCurrentPage(() => page - 1) : ""
	), []);

	const onNextClick = useCallback((page) => (
		page < MAXPAGE ? setCurrentPage(() => page + 1) : ""
	), []);

	return (
		<PageContainer>
			<PageItemButton onClick={() => onPrevClick(currentPage)}>
				이전
			</PageItemButton>

			{pages.map(page => (
				<PageItem
					onClick={() => onPageClick(page)}
					selected={page===currentPage}>
						{page}
				</PageItem>
			))}

			<PageItemButton onClick={() => onNextClick(currentPage)}>
				다음
			</PageItemButton>
		</PageContainer>
	)
}

export default Pagination;