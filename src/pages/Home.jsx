// Importing the necessary CSS
import "../assets/css/index.css";

// exporting the function component - Home
export default function Home() {
	return (
		<div className="home-style">
			<h2>Hello, Welcome to my React assignment.</h2>
			<h2>INM420SBB</h2>
			<h4>This website has been built using React Router.</h4>
			<h4>Nested Routes have been used in the Projects page.</h4>
			<h4>GSAP animation has been used on the Projects page to animate the transition when different projects are chosen.</h4>
		</div>
		
	);
}