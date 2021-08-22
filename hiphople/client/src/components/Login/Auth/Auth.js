import React, { useState } from "react"
import "./auth.scss"

const Auth = () => {
    const [inputData, setInputData] = useState({
        id: "",
        password: ""
    })

    const LoginButtonClick = () => {
        const { id, password } = inputData;
        if (!id || !password) {
            return alert("로그인 정보를 입력해주세요.")
        }
        setInputData({
            id: "",
            password: ""
        })
    }

    return (
        <div className="auth-container">
            <div className="auth-login">
                로그인
            </div>
            <div className="id-password-container">
                <input name="id" placeholder="아이디" type="text"  />
                <input name="password" placeholder="비밀번호" type="password"  />
            </div>
            <div className="login-button">
                <button onClick={LoginButtonClick} >로그인</button>
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