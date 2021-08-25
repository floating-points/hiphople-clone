import React from "react";
import styled from "styled-components";

const TablePost = styled.tr`
	text-align: center;
	line-height: 1.75em;
`


const BoardItem = ({
	post
}) => {
	const {
		id,
		type,
		title,
		author,
		timerecord
	} = post;

	const time = timerecord.slice(0,10);
	return (
		<TablePost>
			<td>{id}</td>
			<td>{type}</td>
			<td>{title}</td>
			<td>{author}</td>
			<td>{time}</td>
		</TablePost>
	)
}


export default BoardItem;