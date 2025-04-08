
import React from 'react';
import NavMenuItem, { NavLink } from './NavMenuItem';

const MortgagesMenu: React.FC = () => {
  return (
    <NavMenuItem title="Mortgages">
      <ul className="grid w-[400px] gap-3 p-4">
        <li>
          <NavLink
            href="#"
            title="Fixed Rate"
            description="Stable payments for the life of your loan"
          />
        </li>
        <li>
          <NavLink
            href="#"
            title="Adjustable Rate"
            description="Lower initial rates with potential adjustments"
          />
        </li>
        <li>
          <NavLink
            href="#"
            title="Refinance"
            description="Lower your rate or payment with refinancing"
          />
        </li>
      </ul>
    </NavMenuItem>
  );
};

export default MortgagesMenu;
