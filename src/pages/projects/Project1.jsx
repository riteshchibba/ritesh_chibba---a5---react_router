// Importing the necessary CSS and image files
import "../../assets/css/index.css";
import image1 from "../../assets/images/Project1.jpg";

// Defining the Project1 component
export default function Project1() {
	return (
		<div className="projects-nested-route" id="project1test">
			{/*Section Title*/}
			<h2>Psychology Creativity Project</h2>
				<img className="project-route-image" src={image1} alt="a 2d representation of a bright city at night near a harbor"/>
				<div className="project-description">
					<p>Name: City Lights</p>
					<p>Type: 2d Illustration</p>
					<p>Program used: Adobe Illustrator</p>
				</div>
		</div>
		
	);
}
