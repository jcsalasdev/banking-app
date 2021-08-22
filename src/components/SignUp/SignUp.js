import { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import Home from "../homepage/home";
import "./SignUp.css";
function SignUp() {
	const [adminUsers, setAdminUsers] = useState([
		{
			name: "jc",
			email: "jcdev@gmail.com",
			username: "jcdev",
			password: "Admin123",
			id: 123,
		},
	]);
	useEffect(() => {
		const adminUsers = JSON.parse(localStorage.getItem("adminUsers"));
		if (adminUsers) {
			setAdminUsers(adminUsers);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("adminUsers", JSON.stringify(adminUsers));
	}, [adminUsers]);

	const onSignUpHandler = (aName, aEmail, aUserName, aPassword) => {
		setAdminUsers((prevAdminUsers) => {
			return [
				...prevAdminUsers,
				{
					name: aName,
					email: aEmail,
					username: aUserName,
					password: aPassword,
					id: Math.floor(1000 + Math.random() * 9000).toString(),
				},
			];
		});
		console.log(adminUsers);
	};
	return (
		<div className="SignUpForm-con">
			<Home />
			<SignUpForm onSignUp={onSignUpHandler} />
		</div>
	);
}
export default SignUp;
