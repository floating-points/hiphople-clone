import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
	return (
		<div className="login">
			<a href="/Login">LOGIN</a>
			<Link to="/Register">   REGISTER</Link>
		</div>
	)
}

export default Login;