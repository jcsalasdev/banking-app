import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
	const expenseItems = [];
	for (let i = 0; i < props.items.length; i++) {
		expenseItems.push(
			<ExpenseItem
				title={props.items[i].title}
				amount={props.items[i].amount}
				date={props.items[i].date}
			/>
		);
	}

	return (
		<div>
			<Card className="expenses">{expenseItems}</Card>
		</div>
	);
};

export default Expenses;
