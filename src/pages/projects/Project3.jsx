// Importing the necessary CSS and image files
import "../../assets/css/index.css";
import image3 from "../../assets/images/Project3.jpg";

// Defining the Project3 component
export default function Project3() {
	return (
		<div className="projects-nested-route">
			{/*Section Title*/}
			<h2>3d assignment</h2>
				<img className="project-route-image" src={image3} alt="a scene depicting a legendary sword wedged deep into a stone pedastal surrounded by large mushrooms."/>
				<div className="project-description">
					<p>Name: The Sword of Truth</p>
					<p>Type: 3d Modeling</p>
					<p>Programs Used: Maya, Mudbox, Substance 3d Painter, Photoshop.</p>
				</div>
		</div>
		
	);
}