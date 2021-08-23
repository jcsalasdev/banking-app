import SignIn from "./Components/SignIn/SignIn";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import BankingApp from "./BankingApp";
import BudgetApp2 from "./BudgetApp2";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/signin" component={SignIn} />
					<Route path="/admin" component={BankingApp} />
					<Route exact path="/" component={BudgetApp2} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
