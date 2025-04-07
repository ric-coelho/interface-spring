
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, ChevronDown, User, Lock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white header-shadow">
      {/* Top bar */}
      <div className="bg-us-navy text-white py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:underline">Personal</a>
            <a href="#" className="hover:underline">Business</a>
            <a href="#" className="hover:underline">Wealth Management</a>
            <a href="#" className="hover:underline">Corporate & Commercial</a>
          </div>
          <div className="flex space-x-4 ml-auto text-sm">
            <a href="#" className="hover:underline flex items-center">
              <Lock className="h-4 w-4 mr-1" />
              Sign In
            </a>
            <a href="#" className="hover:underline flex items-center">
              <User className="h-4 w-4 mr-1" />
              My Account
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-us-blue font-medium flex items-center">
              Banking <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-gray-800 hover:text-us-blue font-medium flex items-center">
              Credit Cards <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-gray-800 hover:text-us-blue font-medium flex items-center">
              Loans <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-gray-800 hover:text-us-blue font-medium flex items-center">
              Mortgages <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-gray-800 hover:text-us-blue font-medium flex items-center">
              Investing <ChevronDown className="ml-1 h-4 w-4" />
            </a>
          </nav>

          {/* Search and mobile menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Input
                type="text"
                placeholder="Search"
                className="w-48 pl-8 pr-2 py-1 border rounded"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="container-custom">
            <div className="flex items-center mb-4">
              <Input
                type="text"
                placeholder="Search"
                className="w-full pl-8 pr-2 py-1 border rounded"
              />
              <Search className="absolute left-6 top-[13.75rem] h-4 w-4 text-gray-400" />
            </div>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-800 hover:text-us-blue font-medium py-2 border-b">
                Banking
              </a>
              <a href="#" className="text-gray-800 hover:text-us-blue font-medium py-2 border-b">
                Credit Cards
              </a>
              <a href="#" className="text-gray-800 hover:text-us-blue font-medium py-2 border-b">
                Loans
              </a>
              <a href="#" className="text-gray-800 hover:text-us-blue font-medium py-2 border-b">
                Mortgages
              </a>
              <a href="#" className="text-gray-800 hover:text-us-blue font-medium py-2 border-b">
                Investing
              </a>
              <div className="pt-2 border-t border-gray-200">
                <a href="#" className="block py-2 text-us-navy font-medium">Personal</a>
                <a href="#" className="block py-2 text-us-navy font-medium">Business</a>
                <a href="#" className="block py-2 text-us-navy font-medium">Wealth Management</a>
                <a href="#" className="block py-2 text-us-navy font-medium">Corporate & Commercial</a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
