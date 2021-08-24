import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const RegisterContainer = styled.div`
	margin-top: 100px;

`

const RegisterForm = styled.form`
	display: inline-block;

`

const RegisterDiv = styled.div`
	font-size: 20px;
	margin-top: 30px;
	text-align: right;
`
const RegisterLabel = styled.label`

`

const RegisterInput = styled.input`
	margin-left: 5px;
`

const Register = () => {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [checkPassword, setCheckPassword] = useState("");

	const onIdChange = (e) => {
		setId(e.target.value);
	}

	const onPasswordChange = (e) => {
		setId(e.target.value);
	}

	const onCheckPasswordChange = (e) => {
		setId(e.target.value);
	}

	const onCheckId = async () => {
		const result = await axios.post("http://localhost:8000/user-filter", {
			username : id
		});
		console.log(result.data);
	}
	return (
		<RegisterContainer>
			<RegisterForm>
				<RegisterDiv>
					<RegisterLabel for="id">* 아이디</RegisterLabel>
					<RegisterInput type="text" name="id" onChange={onIdChange}></RegisterInput>
					<button type="button" onClick={onCheckId}>중복 체크</button>
				</RegisterDiv>
				<RegisterDiv>
					<RegisterLabel for="password">* 비밀번호</RegisterLabel>
					<RegisterInput type="password" name="password" onChange={onPasswordChange}></RegisterInput>
				</RegisterDiv>
				<RegisterDiv>
					<RegisterLabel for="check-password">* 비밀번호 확인</RegisterLabel>
					<RegisterInput type="password" name="check-password" onChange={onCheckPasswordChange}></RegisterInput>
				</RegisterDiv>
			</RegisterForm>
		</RegisterContainer>

	)
}

export default Register;