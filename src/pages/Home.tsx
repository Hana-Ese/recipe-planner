import { Link } from "react-router-dom";
import SmartPlatesImage from "../assets/images/SmartPlates3.png";

function Home() {
	return (
		<div className='h-screen bg-[#f6ebda] flex flex-col items-center justify-center p-6 relative overflow-hidden'>
			{/* Background Decoration */}
			<div className="absolute top-0 left-0 w-full h-full bg-[url('/background-pattern.svg')] bg-cover bg-no-repeat opacity-10 z-0"></div>

			{/* Main Content */}
			<div className='relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full'>
				{/* Text Content */}
				<div className='text-center md:text-left max-w-4xl text-3xl text-gray-600 italic w-xl h-92 bg-orange-200'>
					{/* Logo */}
					<h1 className='text-4xl md:text-7xl font-bold flex justify-center md:justify-start items-center gap-2'>
						<span role='img' aria-label='icon'>
							🍲
						</span>
						<span className='text-7xl'>
							Smart<span className='text-orange-500'>Plates</span>
						</span>
					</h1>
					<div className='text-2xl mt-4 italic mb-4'>
						<h2>"Your ingredients. Your meals. Your way".</h2>
					</div>

					{/* Text Features */}
					<div className='mt-6 space-y-1 text-gray-700 font-medium text-lg ml-8'>
						<p>🍽️ Find Recipes</p>
						<p>🥕 Filter by Ingredients</p>
						<p>🍲 Plan your meals</p>
						<p>📅 Create Shopping Lists</p>
					</div>

					{/* Link to About Page */}
					<div className='mt-6 ml-8'>
						<Link
							to='/about-us'
							className='bg-orange-400 text-white px-6 py-2 rounded-full shadow hover:bg-orange-500 transition'
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>

			{/* Smartphone Mockup */}
			<div className='absolute bottom-0 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[900px] overflow-hidden right-0'>
				<img src={SmartPlatesImage} alt='SmartPlates App' className='w-full' />
			</div>
		</div>
	);
}

export default Home;
