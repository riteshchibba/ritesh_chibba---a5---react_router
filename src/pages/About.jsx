// Importing the necessary CSS and image files
import "../assets/css/index.css";
import image from '../assets/images/ritesh-image.jpg';

// exporting the function component - About
export default function About() {
	return (
		<div>
			{/*Section Title*/}
			<h2>About Me</h2>
			<article className="avatar-container">
				<img className="about-avatar" src={image} alt="ritesh's avatar"/>
			</article>
			<h4>Ritesh Chibba</h4>
			<h5>Student of Interactive Media Design at Seneca College.</h5>
		</div>
	);
}