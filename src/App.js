import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
	const [expenses, setExpenses] = useState([
		{
			id: "e1",
			title: "Paper",
			amount: 9400.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 11924.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: "e2",
			title: "New TV",
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
	]);

	const addExpenseHandler = (expense) => {
		setExpenses([...expenses, expense]);
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
