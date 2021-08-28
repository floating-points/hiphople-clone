import styled from "styled-components";
import axios from "axios";
import BoardGnb from "../BoardGnb/BoardGnb";
import Select from "react-select";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState} from "react";
import { useHistory } from "react-router-dom";

const WriteContainer = styled.div`
	margin-top: 150px;
	margin-left: 25%;
	width: 50%;
`

const SelectContainer = styled.div`
	width: 20%;
`

const WriteTitle = styled.div`
	margin-top: 10px;
	font-size: 24px;
	input {
		width: 40%;
		height: 25px;
	}
`

const WriteAuthor = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
	input {
		width:7%;
		height: 25px;
	}
`

const CKEditorContainer = styled(CKEditor)`
	width:  20%;
`

const ButtonContainer = styled.div`
	text-align: center;
	margin-top: 10px;
`

const WritePost = () => {
	const [select, setSelect] = useState("all");
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");
	const history = useHistory();
	const options = [
		{ value: 1, label: "all"},
		{ value: 2, label: "general"},
		{ value: 3, label: "review"},
		{ value: 4, label: "notice"},
		{ value: 5, label: "music"},
	];

	const onTitleChange = (e) => {
		setTitle(e.target.value);
	}

	const onAuthorChange = (e) => {
		setAuthor(e.target.value);
	}

	const onSubmit = async () => {
		let typeToInt;

		if (select === "all")
			typeToInt = 1;
		else if(select === "general")
			typeToInt = 2;
		else if(select === "review")
			typeToInt = 3;
		else if(select === "notice")
			typeToInt = 4;
		else if(select === "music")
			typeToInt = 5;

		const posts = await axios.post("http://localhost:8000/post-insert", {
			boardName: "domestic_posts",
			type: typeToInt,
			title: title,
			username: author,
			content: content
		});
		history.replace("/DomesticBoard");
	}
	console.log(select, title, author, content);
	return (
		<div>
			<BoardGnb />
		<WriteContainer>
			<SelectContainer>
				<Select options={options} value={options.find((option) => (
					option.label === select
				))}
				onChange={(value) => setSelect(value.label)}
				/>
			</SelectContainer>

			<WriteTitle>
				<input type="text" value={title} onChange={onTitleChange} placeholder="제목"></input>
			</WriteTitle>

			<WriteAuthor>
			<input type="text" value={author} onChange={onAuthorChange} placeholder="작성자"></input>
			</WriteAuthor>

			<CKEditorContainer
				editor={ClassicEditor}
				data="내용을 입력해주세요"
				value={content}
				onChange={(event, editor) => {
					let data = editor.getData();
					setContent(data.slice(3, data.length-4));
				}}
				/>

			<ButtonContainer>
				<button onClick={onSubmit}>글쓰기</button>
			</ButtonContainer>
		</WriteContainer>
		</div>

	)
}

export default WritePost;