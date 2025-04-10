
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-10 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold tracking-tight uppercase">PUBLIC LABEL</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/#about" className="font-medium hover:text-primary transition-colors">About</Link>
          <Link to="/#capabilities" className="font-medium hover:text-primary transition-colors">Capabilities</Link>
          <Link to="/#growth-framework" className="font-medium hover:text-primary transition-colors">Growth Framework</Link>
          <Link to="/#clients" className="font-medium hover:text-primary transition-colors">Clients</Link>
          <Link to="/#contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
        </div>

        <button className="hidden md:block btn-primary">Get In Touch</button>

        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
            <Link to="/" className="font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/#about" className="font-medium" onClick={toggleMenu}>About</Link>
            <Link to="/#capabilities" className="font-medium" onClick={toggleMenu}>Capabilities</Link>
            <Link to="/#growth-framework" className="font-medium" onClick={toggleMenu}>Growth Framework</Link>
            <Link to="/#clients" className="font-medium" onClick={toggleMenu}>Clients</Link>
            <Link to="/#contact" className="font-medium" onClick={toggleMenu}>Contact</Link>
            <a href="#contact" className="btn-primary" onClick={toggleMenu}>Get In Touch</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
