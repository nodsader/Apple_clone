import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Model from "./components/Model.jsx";
import {Works} from "./components/Works.jsx";
import Features from "./components/Features.jsx";

const App = () => {
	return (
		<main className={"bg-black"}>
			<NavBar/>
			<Hero/>
			<Highlights/>
			<Model/>
			<Features/>
			<Works/>
		</main>
	)
}

export default App;