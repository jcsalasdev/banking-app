import "./Aside.css";
import { Link, useRouteMatch } from "react-router-dom";
function Aside() {
	const { url } = useRouteMatch();
	return (
		<div className="Aside-container">
			<Link to={`${url}/deposit`}>
				<button className="send-money">
					<i className="fas fa-donate"></i> Deposit
				</button>
			</Link>

			<Link to={`${url}/transfer`}>
				<button>
					<i className="fas fa-hand-holding-usd"></i> Transfer
				</button>
			</Link>

			<Link to={`${url}/withdraw`}>
				<button>
					<i className="far fa-money-bill-alt"></i> Withdraw
				</button>
			</Link>

			<Link to={`${url}/add-user`}>
				<button className="Accounts">
					Accounts <i className="fas fa-plus-circle"></i>
				</button>
			</Link>
		</div>
	);
}

export default Aside;
