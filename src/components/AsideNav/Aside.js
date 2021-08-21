import "./Aside.css";
import { Link } from "react-router-dom";
function Aside() {
	return (
		<div className="Aside-container">
			<Link to="/Admin/UserData/Transfer">
				<button className="send-money">Transfer</button>
			</Link>

			<Link to="/Admin/UserData/Deposit">
				<button> Deposit</button>
			</Link>

			<Link to="/Admin/UserData/Withdraw">
				<button>Withdraw</button>
			</Link>

			<Link to="/Admin/UserData/Add-user">
				<button className="Accounts">
					Accounts <i className="fas fa-plus-circle"></i>
				</button>
			</Link>

			<Link to="/Admin/BudgetApp">
				<button className="Budget">Budget App</button>
			</Link>
		</div>
	);
}

export default Aside;
