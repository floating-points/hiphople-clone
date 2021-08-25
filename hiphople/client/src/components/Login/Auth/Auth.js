import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import "./auth.scss"

const Auth = () => {
    // global 전역 상태값 setUser를 받아옴
    const history = useHistory();

    const [account, setAccount] = useState({
        id: "",
        password: ""
    })

    const fetchLogin = async ({ id, password }) => {
        const response = await fetch("http://localhost:8000/login");

        if (response.ok) {
            const users = await response.json();

            const user = users.find(user => user.id === id);
            if (!user || user.password !== password) {
                throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.")
            }
            return user;
        }
        throw new Error("서버 통신이 원할하지 않습니다.")
    }

    const onChangeAccount = (e) => {
        // console.log(account)
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        })
    }

    // No!!!

    const onSubmitAccount = async () => {
        try {
            const user = await fetchLogin(account);

            // 성공하면 메인페이지로
            history.replace("/")
        } catch (error) {
            // 실패하면 throw new Error("") 값 출력
            window.alert(error);
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-login">
                로그인
            </div>
            <div className="id-password-container">
                <input name="id" placeholder="아이디" type="text" onChange={onChangeAccount} />
                <input name="password" placeholder="비밀번호" type="password" onChange={onChangeAccount} />
            </div>
            <div className="login-button">
                <button onClick={onSubmitAccount}>로그인</button>
            </div>
            <div className="auth-small-container">
                <button>회원가입</button>
                <button>ID/PW 찾기</button>
                <button>인증메일 재발송</button>
            </div>
        </div>
    )
}

export default Auth;