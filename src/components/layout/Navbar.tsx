import { useState } from "react";
import Logo from "../ui/Logo";
import NavLinkItem from "../ui/NavLinkItem";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";

const navLinks = [
    { name: "Recipes", href: "/recipes" },
    { name: "Cookware", href: "/cookware" },
    { name: "About Us", href: "/about-us" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogin = () => {
        console.log("Open Login Modal"); // for Login logic
    };

    const handleDownload = () => {
        console.log("Download App"); // for Download logic
    };

    return (
        <nav className='flex items-center justify-between p-4 mt-8 bg-white shadow-md sticky z-50 w-full max-w-7xl mx-auto'>
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-6'>
                {navLinks.map((link) => (
                    <NavLinkItem key={link.name} href={link.href} label={link.name} />
                ))}
            </div>

			<div className='hidden md:flex items-center space-x-4 '>
				<Button variant='outline' label='Login' onClick={handleLogin} />
				<Button variant='solid' label='Download' onClick={handleDownload} />
			</div>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
                <Button
                    label='☰'
                    variant='outline'
                    onClick={() => setMenuOpen(!menuOpen)}
                />
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <MobileMenu links={navLinks} closeMenu={() => setMenuOpen(false)} />
            )}
        </nav>
    );
};

export default Navbar;