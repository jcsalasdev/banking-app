import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./Withdraw.module.css";

const Withdraw = (props) => {
	const [withdrawID, setWithdrawID] = useState("");
	const [withdrawAmount, setWithdrawAmount] = useState("");
	const [error, setError] = useState();

	const withdrawHandler = (event) => {
		event.preventDefault();
		if (withdrawID.trim().length === 0 || withdrawAmount.trim().length === 0) {
			setError({
				title: "Invalid input",
				message:
					"Please enter a valid ID  and withdrawal amount (non-empty values).",
			});
			return;
		}
		if (withdrawAmount < 1) {
			setError({
				title: "Invalid amount",
				message: "Please enter a valid amount (min 1$).",
			});
			return;
		}
		props.onAddUser(withdrawID, withdrawAmount);
		setWithdrawID("");
		setWithdrawAmount("");
	};

	const withdrawIDHandler = (event) => {
		setWithdrawID(event.target.value);
	};

	const withdrawAmountHandler = (event) => {
		setWithdrawAmount(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={withdrawHandler}>
					<div>
						<label htmlFor="ID">ID#</label>
						<input
							id="ID"
							type="number"
							value={withdrawID}
							onChange={withdrawIDHandler}
						/>
					</div>
					<div>
						<label htmlFor="amount">Withdraw Amount</label>
						<input
							id="currency"
							type="number"
							value={withdrawAmount}
							onChange={withdrawAmountHandler}
						/>
					</div>

					<Button type="submit">Withdraw</Button>
				</form>
			</Card>
		</div>
	);
};

export default Withdraw;
