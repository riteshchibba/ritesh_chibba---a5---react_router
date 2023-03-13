import "../../assets/css/index.css";
import image2 from "../../assets/images/Project2.jpg";

export default function Project2() {
	return (
		<div className="projects-nested-route">
			<h2>Media Tools assignment</h2>
				<img className="project-route-image" src={image2} alt="ritesh's project2"/>
				<div className="project-description">
					<p>Name: The Warrior and the Wolf</p>
					<p>Type: Photo Manipulation Project</p>
					<p>Program Used: Photoshop</p>
				</div>
		</div>
		
	);
}