import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegisterContainer = styled.div`
	margin-top: 100px;
	width: 1200px;

	text-align: left;
`

const RegisterForm = styled.form`
	display: inline-block;
	position: absolute;
	left: 40%;
	text-align: left;
`

const RegisterDiv = styled.div`
	font-size: 20px;
	margin-top: 30px;

`
const RegisterLabel = styled.label`

`

const RegisterInput = styled.input`
	margin-left: 5px;
`

const RegisterSubmit = styled.input`

`

const Register = () => {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [checkPassword, setCheckPassword] = useState("");
	const [email, setEmail] = useState("");
	const history = useHistory();

	const onIdChange = (e) => {
		setId(e.target.value);
	}

	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	}

	const onCheckPasswordChange = (e) => {
		setCheckPassword(e.target.value);
	}

	const onCheckId = async () => {
		const result = await axios.post("http://localhost:8000/user-filter", {
			username : id
		});
		if(result.data.length){
			alert("중복된 아이디입니다.");
			setId("");
		}
		else
			alert("사용 가능한 아이디입니다.");
	}

	const userInsert = async () => {
		const result = await axios.post("http://localhost:8000/user-insert", {
		username : id,
		password: password
		});
	}
	const checkRegExp = (e) => {
		const idRegExp = /^[a-zA-Z][a-zA-Z0-9]{3,10}/g;
		const passwordRegExp = /^(?=.*[~!@#$%^&*])(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}/g;
		e.preventDefault();

		if(!idRegExp.test(id))
		{
			alert("아이디는 4자리 이상이어야 하며 영문자 숫자를 포함해야합니다.");
			setId("");
			return;
		}
		else if(password === checkPassword)
		{
			if(!passwordRegExp.test(password))
			{
				alert("비밀번호는 8자리 이상이어야 하며 영문자, 숫자, 특수문자를 포함해야합니다.");
				setPassword("");
				setCheckPassword("");
				return;
			}
		}
		else if(password !== checkPassword)
		{
			alert("패스워드를 똑같이 입력해주세요.");
			return;
		}
			alert("회원가입이 완료되었습니다");
			userInsert();
			history.replace("/");
	}
	const onEmailChange = (e) => {
		setEmail(e.target.value);
	}
	return (
		<RegisterContainer>
			<RegisterForm onSubmit={checkRegExp}>
				<RegisterDiv>
					<RegisterLabel for="id">* 아이디</RegisterLabel>
					<RegisterInput type="text" name="id" value={id} onChange={onIdChange}></RegisterInput>
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
				<RegisterDiv>
					<RegisterLabel for="email">* 이메일</RegisterLabel>
					<RegisterInput type="email" name="email" onChange={onEmailChange}></RegisterInput>
				</RegisterDiv>

				<RegisterSubmit type="submit"></RegisterSubmit>
			</RegisterForm>
		</RegisterContainer>

	)
}

export default Register;