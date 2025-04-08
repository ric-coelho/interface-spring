
import React from 'react';
import NavMenuItem, { NavLink } from './NavMenuItem';

const InvestingMenu: React.FC = () => {
  return (
    <NavMenuItem title="Investing">
      <ul className="grid w-[400px] gap-3 p-4">
        <li>
          <NavLink
            href="#"
            title="Retirement"
            description="Plan for your future with our retirement options"
          />
        </li>
        <li>
          <NavLink
            href="#"
            title="Brokerage"
            description="Invest in stocks, bonds, and more"
          />
        </li>
        <li>
          <NavLink
            href="#"
            title="Managed Portfolios"
            description="Professional investment management"
          />
        </li>
      </ul>
    </NavMenuItem>
  );
};

export default InvestingMenu;
