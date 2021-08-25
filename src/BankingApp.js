import Deposit from "./Components/Deposit/Deposit";
import Transfer from "./Components/Transfer/Transfer";
import Withdraw from "./Components/Withdraw/Withdraw";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import NavBar from "./Components/Nav/NavBar";
import Aside from "./Components/AsideNav/Aside";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { useAuth } from "./context/UseAuth/UseAuth";

const BankingApp = () => {
	const user = useAuth();
	const { url } = useRouteMatch();
	if (!user) {
		return <Redirect to="/signin" />;
	}
	if (user.id !== "0") {
		return <Redirect to="/" />;
	}
	return (
		<div>
			<NavBar />
			<div className="rendered-container">
				<Aside />

				<div>
					<Route path={`${url}/deposit`} component={Deposit} />
					<Route path={`${url}/transfer`} component={Transfer} />
					<Route path={`${url}/withdraw`} component={Withdraw} />
					<Route path={`${url}/add-user`} component={AddUser} />
					<UsersList />
				</div>
			</div>
		</div>
	);
};
export default BankingApp;
