import { Outlet, NavLink } from "react-router-dom";
import "../assets/css/index.css";

export default function Layout() {
  
    

	return (
		<div>
			{/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
			<nav className=".nav-manu">
                
				<ul className="nav-list">
					<li className="nav-item">
						<NavLink to="/" className="nav-link">Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/about" className="nav-link">About</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/projects" className="nav-link">Projects</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/contactUs" className="nav-link">Contact Us</NavLink>
					</li>
					{/* <li>
						<Link to="/nothing-here">Nothing Here</Link>
					</li> */}
				</ul>
			</nav>

			<hr />

			{/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
			<Outlet />
		</div>
	);
}

