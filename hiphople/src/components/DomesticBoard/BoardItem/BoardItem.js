import React from "react";
import styled from "styled-components";

const TablePost = styled.tr`
	text-align: center;
	line-height: 1.75em;
`


const BoardItem = ({
	//id,
	//type,
	//title,
	//author,
	//date,
	post
}) => {
	const {
		id,
		type,
		title,
		author,
		date
	} = post;
	return (
		<TablePost>
			<td>{id}</td>
			<td>{type}</td>
			<td>{title}</td>
			<td>{author}</td>
			<td>{date}</td>
		</TablePost>
	)
}


export default BoardItem;