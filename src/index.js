// Importing necessary dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Importing the main App component
import App from "./App";

// Creates a React root to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renders the app inside the React root
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
