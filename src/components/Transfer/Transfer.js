import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./Transfer.module.css";

const Transfer = (props) => {
	const [transferID, setTransferID] = useState("");
	const [transferAmount, setTransferAmount] = useState("");
	const [error, setError] = useState();

	const transferHandler = (event) => {
		event.preventDefault();
		if (transferID.trim().length === 0 || transferAmount.trim().length === 0) {
			setError({
				title: "Invalid input",
				message:
					"Please enter a valid ID  and transfer amount (non-empty values).",
			});
			return;
		}
		if (transferAmount < 5) {
			setError({
				title: "Invalid amount",
				message: "Please enter a valid amount (min. 5$).",
			});
			return;
		}
		props.onTransfer(transferID, transferAmount);
		setTransferID("");
		setTransferAmount("");
	};

	const transferIDHandler = (event) => {
		setTransferID(event.target.value);
	};

	const transferAmountHandler = (event) => {
		setTransferAmount(event.target.value);
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
				<form onSubmit={transferHandler}>
					<div>
						<label htmlFor="ID">ID#</label>
						<input
							id="ID"
							type="number"
							value={transferID}
							onChange={transferIDHandler}
						/>
					</div>
					<div>
						<label htmlFor="amount">Transfer Amount</label>
						<input
							id="currency"
							type="number"
							value={transferAmount}
							onChange={transferAmountHandler}
						/>
					</div>

					<Button type="submit">Transfer</Button>
				</form>
			</Card>
		</div>
	);
};

export default Transfer;
