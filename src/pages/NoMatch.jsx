//This page displays the 404-page not found "Go to home page". 
import { Routes, Route, Outlet, NavLink } from "react-router-dom";

// exporting the function component - NoMatch
export default function NoMatch() {
	return (
		<div>
			{/*Section Title*/}
			<h2>Nothing to see here!</h2>
			<p className="no-match-styling">
				<NavLink to="/">Go to the home page</NavLink>
			</p>
		</div>
	);
}