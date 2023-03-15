// Importing the necessary CSS and image files
import "../../assets/css/index.css";
import image2 from "../../assets/images/Project2.jpg";

// Defining the Project2 component
export default function Project2() {
	return (
		<div className="projects-nested-route">
			{/*Section Title*/}
			<h2>Media Tools assignment</h2>
				<img className="project-route-image" src={image2} alt="a wintery night scene in which a woman weilding a sword with her pet dog face off against a giant wolf."/>
				<div className="project-description">
					<p>Name: The Warrior and the Wolf</p>
					<p>Type: Photo Manipulation Project</p>
					<p>Program Used: Photoshop</p>
				</div>
		</div>
		
	);
}