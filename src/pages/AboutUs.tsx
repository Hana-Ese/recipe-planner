import { motion } from "framer-motion";
import { Link } from "react-router";
import TeamImage1 from "../assets/images/Ese.png";
import TeamImage2 from "../assets/images/Hana.png";

function AboutUs() {
	return (
		<div className='min-h-screen bg-[#f6ebda] flex flex-col items-center justify-center p-8 relative overflow-hidden'>
			{/* Background Decoration */}
			<div className="absolute top-0 left-0 w-full h-full bg-[url('/background-pattern.svg')] bg-cover bg-no-repeat opacity-10 z-0"></div>

			{/* Main Content */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='relative z-10 max-w-5xl text-gray-800 text-center'
			>
				<motion.h1
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
					className='text-5xl font-bold mb-6'
				>
					<span role='img' aria-label='heart'>
						❤️
					</span>{" "}
					About Smart
					<span className='text-orange-500'>Plates</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3 }}
					className='text-lg leading-relaxed mb-6'
				>
					We wanted to create an app that helps families, singles—really
					everyone—plan their meals every day. Our mission is to make cooking
					easy, joyful, and stress-free.
				</motion.p>

				<motion.p
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5 }}
					className='text-lg leading-relaxed mb-6'
				>
					Whether you’re cooking for breakfast, lunch, dinner, or following a
					special diet (vegan, vegetarian, etc.), SmartPlates helps you select
					and plan your weekly meals easily. You'll even get a ready-made
					shopping list you can take straight to the store!
				</motion.p>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
					className='text-lg leading-relaxed mb-8'
				>
					It’s all about making food planning smarter and your kitchen
					experience more fun!
				</motion.p>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.9 }}
					className='bg-white/70 p-6 rounded-xl shadow-lg'
				>
					<h2 className='text-2xl font-semibold mb-4 text-orange-600'>
						Meet the Developers
					</h2>
					<div className='flex flex-col md:flex-row gap-4'>
						{/* Card 1 */}
						<div className='bg-orange-100 p-6 rounded-lg shadow-md flex-1 flex flex-col items-center'>
							<img
								src={TeamImage1}
								alt='Ese Osagie'
								className='w-24 h-24 rounded-full mb-4'
							/>
							<h3 className='text-lg font-bold text-gray-800'>
								Mis Ese Osagie
							</h3>
							<p className='text-gray-600'>Full Stack Developer</p>
						</div>

						{/* Card 2 */}
						<div className='bg-orange-100 p-6 rounded-lg shadow-md flex-1 flex flex-col items-center'>
							<img
								src={TeamImage2}
								alt='Hana Abrham'
								className='w-24 h-24 rounded-full mb-4'
							/>
							<h3 className='text-lg font-bold text-gray-800'>
								Mis Hana Abrham
							</h3>
							<p className='text-gray-600'>Full Stack Developer</p>
						</div>
					</div>
				</motion.div>
			</motion.div>
			{/* Link back */}
			<div className='mt-8'>
				<Link
					to='/'
					className='bg-orange-400 text-white px-6 py-2 rounded-full shadow hover:bg-orange-500 transition'
				>
					← Back to Home
				</Link>
			</div>
		</div>
	);
}

export default AboutUs;
