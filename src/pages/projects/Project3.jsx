import "../../assets/css/index.css";
import image3 from "../../assets/images/Project3.jpg";

export default function Project3() {
	return (
		<div className="projects-nested-route">
			<h2>3d assignment</h2>
				<img className="project-route-image" src={image3} alt="ritesh's project3"/>
				<div className="project-description">
					<p>Name: The Sword of Truth</p>
					<p>Type: 3d Modeling</p>
					<p>Programs Used: Maya, Mudbox, Substance 3d Painter, Photoshop.</p>
				</div>
		</div>
		
	);
}