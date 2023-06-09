import { Outlet, NavLink } from "react-router-dom";
import "../assets/css/index.css";

import Header from "./Header";

export default function Layout() {
	return (
	  <div>
		{/* A "layout route" is a good place to put markup you want to
			share across all the pages on your site, like navigation. */}
		
		{/* Calls Header.jsx and displays it. */}	
		<Header />
  
		{/* An <Outlet> renders whatever child route is currently active,
			so you can think about this <Outlet> as a placeholder for
			the child routes we defined above. */}
		<Outlet />
	  </div>
	);
  }
