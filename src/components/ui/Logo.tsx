import { Link } from "react-router";
const Logo = () => (
	<Link to='/' className='text-xl font-bold text-gray-800'>
		<h1 className='text-3xl font-bold flex justify-center items-center gap-2 text-gray-800 mb-4'>
					<span role='img' aria-label='icon'>
					🍲
					</span>
					<span>
						Smart<span className='text-orange-500'>Plates</span>
					</span>
				</h1>
	</Link>
);
export default Logo;
