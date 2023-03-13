import { Outlet, NavLink } from "react-router-dom";
import "../assets/css/index.css";

export default function Layout() {
  function toggleMenu() {
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("show");
  }

  return (
    <div>
      	<i className="fa-solid fa-bars" onClick={toggleMenu}></i>
		<div class="site-title">Ritesh's React</div>
		<nav className="nav-menu">
			<ul className="nav-list">
				<li className="nav-item">
					<NavLink exact to="/" className="nav-link">
					Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/about" className="nav-link">
					About
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/projects" className="nav-link">
					Projects
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/contactUs" className="nav-link">
					Contact Us
					</NavLink>
				</li>
			</ul>
		</nav>
		<Outlet />
    </div>
  );
}
