
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import BankingMenu from './BankingMenu';
import CreditCardsMenu from './CreditCardsMenu';
import DemoMenu from './DemoMenu';
import LoansMenu from './LoansMenu';
import MortgagesMenu from './MortgagesMenu';
import InvestingMenu from './InvestingMenu';

const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          <BankingMenu />
          <CreditCardsMenu />
          <DemoMenu />
          <LoansMenu />
          <MortgagesMenu />
          <InvestingMenu />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNav;
