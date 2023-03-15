import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

//Imports the layout page
import Layout from "./components/Layout";

// Imports page components
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import NoMatch from "./pages/NoMatch";
import Project1 from "./pages/projects/Project1";
import Project2 from "./pages/projects/Project2";
import Project3 from "./pages/projects/Project3";

// Imports global styles
import "./assets/css/index.css";

// Imports transition component
import TransitionComponent from "./components/Transition";

export default function App() {
	return (
		<div>
			{/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="projects" element={<Projects />}>
						{/* Nested routes here are used to represent sub-pages of the "/projects" route.*/}
						<Route
							path="project1"
							element={
								// The <TransitionComponent> for transition animations - Project 1.
								<TransitionComponent>
									<Project1 />
								</TransitionComponent>
							}
						/>
						<Route
							path="project2"
							element={
								// The <TransitionComponent> for transition animations - Project 2.
								<TransitionComponent>
									<Project2 />
								</TransitionComponent>
							}
						/>
						<Route
							path="project3"
							element={
								// The <TransitionComponent> for transition animations - Project 3.
								<TransitionComponent>
									<Project3 />
								</TransitionComponent>
							}
						/>
					</Route>
					<Route path="contactUs" element={<ContactUs />} />
					{/* Using path="*"" means "match anything", so this route
                	acts like a catch-all for URLs that we don't have explicit
                	routes for. */}
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</div>
	);
}
