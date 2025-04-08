
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  // Could add state for tracking which submenu is open
  // const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t py-4">
      <div className="container-custom">
        <nav className="flex flex-col space-y-3">
          <div className="border-b py-2">
            <button
              className="flex w-full justify-between items-center py-2 text-gray-800 font-medium"
              onClick={() => {}} // Add mobile submenu toggle here
            >
              Banking <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="border-b py-2">
            <button
              className="flex w-full justify-between items-center py-2 text-gray-800 font-medium"
              onClick={() => {}} // Add mobile submenu toggle here
            >
              Credit Cards <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="border-b py-2">
            <button
              className="flex w-full justify-between items-center py-2 text-gray-800 font-medium"
              onClick={() => {}} // Add mobile submenu toggle here
            >
              Demo <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="border-b py-2">
            <button
              className="flex w-full justify-between items-center py-2 text-gray-800 font-medium"
              onClick={() => {}} // Add mobile submenu toggle here
            >
              Loans <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="border-b py-2">
            <button
              className="flex w-full justify-between items-center py-2 text-gray-800 font-medium"
              onClick={() => {}} // Add mobile submenu toggle here
            >
              Mortgages <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="border-b py-2">
            <button
              className="flex w-full justify-between items-center py-2 text-gray-800 font-medium"
              onClick={() => {}} // Add mobile submenu toggle here
            >
              Investing <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
