import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AllRouts from "./router/routes";
import { BrowserRouter } from "react-router";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AllRouts />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
