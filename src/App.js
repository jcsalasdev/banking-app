import SignIn from "./Components/SignIn/SignIn";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import BudgetApp2 from "./BudgetApp2";
import BankingApp from "./BankingApp";

function App() {
	return (
		<Router basename="/banking-app">
			<div>
				<Switch>
					<Route path={"/signin"} component={SignIn} />
					<Route path={"/admin"} component={BankingApp} />
					<Route exact path={"/"} component={BudgetApp2} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
