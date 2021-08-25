import "./NavBar.css";
import logo from "./logo.png";
import { useAuthDispatch } from "../../context/UseAuth/UseAuth";

function NavBar() {
	const authDispatcher = useAuthDispatch();
	function handleSignOut() {
		authDispatcher({ type: "log out" });
	}
	return (
		<div className="Nav-container">
			<ul className="Nav-container_ul">
				<i className="far fa-user-circle"></i>
				<li className="sign-out" onClick={handleSignOut}>
					| <i className="fas fa-sign-out-alt out"></i>
				</li>
			</ul>

			<div className="logo">
				—<img src={logo} alt="Logo" />—
			</div>

			<div className="company">
				la casa <span>de</span> papel
			</div>
		</div>
	);
}

export default NavBar;
