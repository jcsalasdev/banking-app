import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	const clickHandler = () => {
		console.log("deleted");
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">
					{Number(props.amount).toLocaleString("en-US", {
						style: "currency",
						currency: "USD",
					})}
				</div>
			</div>
			<button
				className="expense-item__btn far fa-trash-alt"
				onClick={clickHandler}
			/>
		</Card>
	);
};

export default ExpenseItem;
