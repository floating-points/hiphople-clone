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
// 15 1
// 25 2
// 5 0
// 35 3
// 10 0
// 11 1
// 1~10 -> 0
// 11~20 -> 1
// 21~20 -> 2

const Pagination = ({currentPage, setCurrentPage}) => {
	const pages = [];
	const NUMOFPAGE = 10;
	const lastPage = 35;

	let startPage
	startPage = (parseInt(currentPage / NUMOFPAGE) % NUMOFPAGE) === 0 ?
	parseInt(currentPage / NUMOFPAGE) - 1
	:
	parseInt(currentPage / NUMOFPAGE)

	//console.log(startPage);
	for(let i = 1; i <= NUMOFPAGE; i++)
		pages.push(i);


	const onPageClick = useCallback((page) => (
		setCurrentPage(() => page)
	), []);

	const onPrevClick = useCallback((page) => (
		page > 1 ? setCurrentPage(() => page - 1) : ""
	), []);

	const onNextClick = useCallback((page) => (
		page < lastPage ? setCurrentPage(() => page + 1) : ""
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