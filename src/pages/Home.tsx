import { Link } from "react-router-dom";
import SmartPlatesImage from "../assets/images/SmartPlates3.png";
import BackgroundPattern from "../components/ui/BackgroundPattern";
import { motion } from "framer-motion";

const features = [
	"🍽️ Find Recipes",
	"🥕 Filter by Ingredients",
	"🍲 Plan your meals",
	"📅 Create Shopping Lists",
];

function Home() {
	return (
		<div
			className="h-screen bg-[#f6ebda] flex flex-col items-center justify-center p-6 relative overflow-hidden"
			role="main"
			aria-label="Homepage"
		>
			{/* Background */}
			<BackgroundPattern />

			{/* Main Content */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full"
			>
				{/* Text Section */}
				<div
					className="text-center md:text-left max-w-4xl text-3xl text-gray-600 italic w-xl h-92 bg-orange-200 p-6 rounded-lg shadow"
					aria-label="App introduction"
				>
					{/* Logo Title */}
					<h1 className="text-4xl md:text-7xl font-bold flex justify-center md:justify-start items-center gap-2">
						<span role="img" aria-label="bowl emoji">
							🍲
						</span>
						<span className="text-7xl">
							Smart<span className="text-orange-500">Plates</span>
						</span>
					</h1>

					{/* Slogan */}
					<div className="text-2xl mt-4 italic mb-4">
						<h2>"Your ingredients. Your meals. Your way."</h2>
					</div>

					{/* Features List */}
					<ul className="mt-6 space-y-1 text-gray-700 font-medium text-lg ml-8">
						{features.map((feature, index) => (
							<li key={index} role="listitem">
								{feature}
							</li>
						))}
					</ul>

					{/* Learn More CTA */}
					<div className="mt-6 ml-8">
						<Link
							to="/about-us"
							className="bg-orange-400 text-white px-6 py-2 rounded-full shadow hover:bg-orange-500 transition"
							aria-label="Learn more about SmartPlates"
						>
							Learn More
						</Link>
					</div>
				</div>
			</motion.div>

			{/* Smartphone Image */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.2, delay: 0.3 }}
				className="absolute bottom-0 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[900px] overflow-hidden right-0"
			>
				<img
					src={SmartPlatesImage}
					alt="SmartPlates App preview"
					className="w-full"
					loading="lazy"
					srcSet={`${SmartPlatesImage} 1x`}
				/>
			</motion.div>
		</div>
	);
}

export default Home;
