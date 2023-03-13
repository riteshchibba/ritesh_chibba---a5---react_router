import "../../assets/css/index.css";
import image1 from "../../assets/images/Project1.jpg";

export default function Project1() {
	return (
		<div className="projects-nested-route">
			<h2>Psychology Creativity Project</h2>
				<img className="project-route-image" src={image1} alt="ritesh's project1"/>
				<div className="project-description">
					<p>Name: City Lights</p>
					<p>Type: 2d Illustration</p>
					<p>Program used: Adobe Illustrator</p>
				</div>
		</div>
		
	);
}