import { Link } from "react-router";

type NavLinkItemProps = {
	href: string;
	label: string;
	onClick?: () => void;
};

const NavLinkItem = ({ href, label, onClick }: NavLinkItemProps) => (
	<Link
		to={href}
		onClick={onClick}
		className='text-gray-700 hover:text-blue-600 font-medium transition-colors'
	>
		{label}
	</Link>
);
export default NavLinkItem;
