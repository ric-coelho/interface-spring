
import React from 'react';
import NavMenuItem, { NavLink } from './NavMenuItem';

const LoansMenu: React.FC = () => {
  return (
    <NavMenuItem title="Loans">
      <ul className="grid w-[400px] gap-3 p-4">
        <li>
          <NavLink
            href="#"
            title="Personal Loans"
            description="Flexible personal loans for any need"
          />
        </li>
        <li>
          <NavLink
            href="#"
            title="Auto Loans"
            description="Competitive rates on auto financing"
          />
        </li>
        <li>
          <NavLink
            href="#"
            title="Student Loans"
            description="Finance your education with our student loans"
          />
        </li>
      </ul>
    </NavMenuItem>
  );
};

export default LoansMenu;
