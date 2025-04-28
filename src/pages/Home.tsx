import { Link } from "react-router-dom";
import SmartPlatesImage from "../assets/images/SmartPlates2.png";

function Home() {
	return (
		<div className='min-h-screen bg-[#f6ebda] flex flex-col items-center justify-center p-6 relative overflow-hidden'>
			{/* Hintergrund Deko */}
			<div className="absolute top-0 left-0 w-full h-full bg-[url('/background-pattern.svg')] bg-cover bg-no-repeat opacity-10 z-0"></div>

			{/* Hauptinhalt */}
			<div className='relative z-10 text-center max-w-4xl'>
				{/* Logo */}
				<h1 className='text-4xl md:text-5xl font-bold flex justify-center items-center gap-2 text-gray-800 mb-4'>
					<span role='img' aria-label='icon'>
					🍲
					</span>
					<span>
						Smart<span className='text-orange-500'>Plates</span>
					</span>
				</h1>
				<h2 className='text-lg md:text-xl text-gray-600 italic'>
					Your ingredients. Your meals. Your way.
				</h2>

				{/* Text-Features */}
				<div className='mt-6 space-y-1 text-gray-700 font-medium'>
					<p>🍽️ Find Recipes</p>
					<p>🥕 Filter by Ingredients</p>
					<p>🍲 Plan your meals</p>
					<p>📅 Create Shopping Lists</p>
				</div>

				{/* Link zur About Page */}
				<div className='mt-6'>
					<Link
						to='/about-us'
						className='bg-orange-400 text-white px-6 py-2 rounded-full shadow hover:bg-orange-500 transition'
					>
						Learn More
					</Link>
				</div>
			</div>

			{/* Smartphone Mockup */}
			<div className='relative mt-12 w-[300px] md:w-[350px] shadow-2xl rounded-3xl overflow-hidden'>
				<img
					src={SmartPlatesImage}
					alt='SmartPlates App'
					className='w-full object-cover rounded-3xl'
				/>
			</div>
		</div>
	);
}

export default Home;
