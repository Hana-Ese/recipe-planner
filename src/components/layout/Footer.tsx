import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import GoogelStoreImg  from "../../assets/images/SmartGooglePlay.png";

const Footer = () => {
	return (
		<footer className='bg-gray-500 text-white py-10 px-6 mt-10'>
			<div className='max-w-7xl mx-auto'>
				{/* Logo */}
				<div className='text-3xl font-bold mb-4 mt-6 flex'>SmartPlates</div>

				{/* Main Content */}
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-12'>
					{/* Links Section */}
					<div className='flex flex-col'>
						<div className='flex gap-8'>
							<ul className='space-y-1'>
								<li>
									<a href='#' className='hover:underline pr-5'>
										Blog
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Support
									</a>
								</li>
								<li>
									<Link to='/contact' className='hover:underline'>
										Contact
									</Link>
								</li>
							</ul>
							<ul className='space-y-1 pl-36'>
								<li>
									<a href='#' className='hover:underline'>
										For Work
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Press Kit
									</a>
								</li>
							</ul>
						</div>

						{/* Legal Section */}
						<div className='text-sm text-gray-300 mt-6 pr-5'>
							<p className='pr-28'>TERMS | PRIVACY | © 2025</p>
							<p>DO NOT SELL MY PERSONAL INFORMATION</p>
						</div>
					</div>

					{/* Social Media Icons */}
					<div className='flex gap-8 mb-20 pr-40'>
						<a href='#' aria-label='Facebook'>
							<FaFacebookF className='text-2xl hover:text-primary transition' />
						</a>
						<a href='#' aria-label='Twitter'>
							<FaTwitter className='text-2xl hover:text-primary transition' />
						</a>
						<a href='#' aria-label='Instagram'>
							<FaInstagram className='text-2xl hover:text-primary transition' />
						</a>
					</div>

					{/* App Store and Google Play Links */}
					<div className='flex gap-4 mb-12 pr-16'>
						<img
							src='https://via.placeholder.com/150x50?text=App+Store'
							alt='App Store'
							className='h-10'
						/>
						<img
							src={GoogelStoreImg}
							alt='Google Play'
							className='h-10'
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
