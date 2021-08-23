import { createContext, useReducer, useEffect } from "react";
import reducerFn from "./UsersReducer";
const initialState = JSON.parse(localStorage.getItem("users"));

// const initialState = [
// 	{
// 		name: "jcdev",
// 		id: "0",
// 		email: "jcdev@mail.com",
// 		password: "admin1",
// 		balance: 1000,
// 	},
// 	{
// 		name: "user1",
// 		id: "1",
// 		email: "user1@mail.com",
// 		password: "pass1",
// 		balance: 1000,
// 	},
// 	{
// 		name: "user2",
// 		id: "2",
// 		email: "user2@mail.com",
// 		password: "pass2",
// 		balance: 2500,
// 	},
// 	{
// 		name: "user3",
// 		id: "3",
// 		email: "user3@mail.com",
// 		password: "pass3",
// 		balance: 3000,
// 	},
// ];

export const dispatchContext = createContext();
export const stateContext = createContext();

export default function UsersProvider(props) {
	const [state, dispatch] = useReducer(reducerFn, initialState);
	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(state));
	});

	return (
		<stateContext.Provider value={state}>
			<dispatchContext.Provider value={dispatch}>
				{props.children}
			</dispatchContext.Provider>
		</stateContext.Provider>
	);
}
