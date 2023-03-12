import { Routes, Route, Outlet, NavLink } from "react-router-dom";

export default function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<NavLink to="/">Go to the home page</NavLink>
			</p>
		</div>
	);
}