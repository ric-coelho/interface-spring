
import React from 'react';
import NavMenuItem, { NestedNavMenuItem, NavLink, FeatureCard } from './NavMenuItem';

const BankingMenu: React.FC = () => {
  return (
    <NavMenuItem title="Banking">
      <ul className="grid gap-3 p-4 w-[400px]">
        <li className="row-span-3">
          <FeatureCard
            href="#"
            title="Banking Services"
            description="Explore our range of banking products and services."
            bgClass="bg-gradient-to-b from-us-navy/50 to-us-navy"
          />
        </li>
        <li>
          <NestedNavMenuItem title="Checking">
            <ul className="grid w-[200px] gap-3 p-4">
              <li>
                <NavLink
                  href="#"
                  title="Standard Checking"
                />
              </li>
              <li>
                <NavLink
                  href="#"
                  title="Premium Checking"
                />
              </li>
              <li>
                <NavLink
                  href="#"
                  title="Student Checking"
                />
              </li>
            </ul>
          </NestedNavMenuItem>
        </li>
        <li>
          <NavLink
            href="#"
            title="Savings"
            description="Savings accounts with competitive rates"
          />
        </li>
        <li>
          <NavLink
            href="#"
            title="CDs"
            description="Certificates of deposit with guaranteed returns"
          />
        </li>
      </ul>
    </NavMenuItem>
  );
};

export default BankingMenu;
