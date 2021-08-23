import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	// window.localStorage.removeItem("expenses");
	return (
		<Card className="expense-item">
			<div className="expense-item__title">
				<ExpenseDate date={props.date} />
				<h2>{props.title}</h2>
			</div>
			<div className="expense-item__price">
				{Number(props.price).toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				})}
			</div>
		</Card>
	);
};

export default ExpenseItem;
