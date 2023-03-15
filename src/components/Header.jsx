/*Header code*/
import { NavLink } from "react-router-dom";
import "../assets/css/index.css";

/*Responsive nav hamburger button toggle*/
export default function Header() {
  function toggleMenu() {
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("show");
  }

  return (
    <div>
		{/*Hamburger menu graphic taken from font awesome*/}
      	<i className="fa-solid fa-bars" onClick={toggleMenu}></i>

		<div class="site-title">Ritesh's React</div>
		{/* Site title */}
		<nav className="nav-menu">
			<ul className="nav-list">
				{/* Home page link */}
				<li className="nav-item">
					<NavLink exact to="/" className="nav-link">
					Home
					</NavLink>
				</li>
				{/* About page link */}
				<li className="nav-item">
					<NavLink to="/about" className="nav-link">
					About
					</NavLink>
				</li>
				{/* Projects page link */}
				<li className="nav-item">
					<NavLink to="/projects" className="nav-link">
					Projects
					</NavLink>
				</li>
				{/* Contact Us page link */}
				<li className="nav-item">
					<NavLink to="/contactUs" className="nav-link">
					Contact Us
					</NavLink>
				</li>
			</ul>
		</nav>
		{/* <Outlet /> */}
    </div>
  );
}