// src/components/layout/Navbar.tsx
import { useState } from 'react';
import { Logo } from '../ui/Logo';
import { NavLinkItem } from '../ui/NavLinkItem';
import { MobileMenu } from './MobileMenu';
import { Button } from '../ui/Button';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Cookware', href: '/cookware' },
    { name: 'About Us', href: '/about-us' }, // Ensure this matches the route
];
  
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      <Logo />
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <NavLinkItem key={link.name} href={link.href} label={link.name} />
        ))}
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" label="Login" onClick={() => console.log('Open Login')} />
        <Button variant="primary" label="Download" onClick={() => console.log('Download')} />
      </div>
      <div className="md:hidden">
        <Button label="☰" variant="ghost" onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      {menuOpen && <MobileMenu links={navLinks} closeMenu={() => setMenuOpen(false)} />}
    </nav>
  );
};