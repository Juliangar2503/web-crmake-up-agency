'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <header className={`fixed w-full z-10 h-10 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 bg-opacity-50 text-white' : 'bg-white bg-opacity-30 text-gray-800'}`}>

      <div className="container mx-auto h-full px-5 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">Logo</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-blue-500 transition-colors">Trayectoria</Link>
          <Link href="#" className="hover:text-blue-500 transition-colors">Servicios</Link>
          <Link href="#" className="hover:text-blue-500 transition-colors">Portfolio</Link>
          <Link href="/Contacto" className="hover:text-blue-500 transition-colors">Contacto</Link>
          <Link href="#" className="hover:text-blue-500 transition-colors">MakeUp School</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link href="#" className="block hover:text-blue-500 transition-colors">Option 1</Link>
            <Link href="#" className="block hover:text-blue-500 transition-colors">Option 2</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;