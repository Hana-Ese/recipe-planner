import "./App.css";
import { Navbar } from "./components/layout/Navbar";
import AllRouts from "./router/routes";
import { BrowserRouter } from "react-router";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AllRouts />
		</BrowserRouter>
	);
}

export default App;
