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
		className='text-gray-700 hover:text-orange-500 font-medium transition-colors'
	>
		{label}
	</Link>
);
export default NavLinkItem;
