
import React from 'react';
import NavMenuItem, { NavLink } from './NavMenuItem';

const CreditCardsMenu: React.FC = () => {
  return (
    <NavMenuItem title="Credit Cards">
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
        <li>
          <NavLink
            href="#"
            title="Cash Rewards"
            description="Earn cash back on everyday purchases"
          />
        </li>
        <li>
          <NavLink
            href="#"
            title="Travel Rewards"
            description="Earn points for travel on every purchase"
          />
        </li>
        <li>
          <NavLink
            href="#"
            title="Low Rate"
            description="Low interest rate for everyday spending"
          />
        </li>
        <li>
          <NavLink
            href="#"
            title="Business"
            description="Business credit cards with rewards"
          />
        </li>
      </ul>
    </NavMenuItem>
  );
};

export default CreditCardsMenu;
