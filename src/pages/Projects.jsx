// Importing the necessary React DOM, CSS, and images
import { Outlet, NavLink } from "react-router-dom";
import "../assets/css/index.css";
import image1 from "../assets/images/Project1.jpg";
import image2 from "../assets/images/Project2.jpg";
import image3 from "../assets/images/Project3.jpg";

export default function Projects() {
	return (
		<div className="grid-grandparent">
			{/*Section Title*/}
			<h2>Projects</h2>
			<div className="grid-container">
				{/* Displays the content on the Project page */}
				<NavLink className="grid-item" exact to="Project1">
					<img className="project-image" src={image1} alt="ritesh's project1"/>
				</NavLink>
				<NavLink className="grid-item" exact to="Project2">
					<img className="project-image" src={image2} alt="ritesh's project1"/>
				</NavLink>
				<NavLink className="grid-item" exact to="Project3">
					<img className="project-image" src={image3} alt="ritesh's project1"/>
				</NavLink>
			</div>
			<Outlet />
		</div>
	);
}