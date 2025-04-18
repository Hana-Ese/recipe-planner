import NavLinkItem from "../ui/NavLinkItem";
import Button from "../ui/Button";

type MobileMenuProps = {
	links: { name: string; href: string }[];
	closeMenu: () => void;
};

const MobileMenu = ({ links, closeMenu }: MobileMenuProps) => (
	<div className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 p-4 md:hidden'>
		{links.map((link) => (
			<NavLinkItem
				key={link.name}
				href={link.href}
				label={link.name}
				onClick={closeMenu}
			/>
		))}
		<Button
			variant='outline'
			label='Login'
			onClick={() => console.log("Open Login")}
		/>
		<Button
			variant='solid'
			label='Download'
			onClick={() => console.log("Download")}
		/>
	</div>
);
export default MobileMenu;
