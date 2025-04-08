
import React from 'react';
import NavMenuItem, { NestedNavMenuItem, NavLink, FeatureCard } from './NavMenuItem';

const DemoMenu: React.FC = () => {
  return (
    <NavMenuItem title="Demo">
      <ul className="grid gap-3 p-4 w-[400px]">
        <li className="row-span-3">
          <FeatureCard
            href="#"
            title="Interactive Demos"
            description="Experience our features with interactive demos."
            bgClass="bg-gradient-to-b from-us-blue/50 to-us-blue"
          />
        </li>
        <li>
          <NestedNavMenuItem title="Banking Demos">
            <ul className="grid w-[200px] gap-3 p-4">
              <li>
                <NestedNavMenuItem title="Mobile Banking">
                  <ul className="grid w-[200px] gap-3 p-4">
                    <li>
                      <NavLink
                        href="#"
                        title="App Tour"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="#"
                        title="Mobile Deposit"
                      />
                    </li>
                    <li>
                      <NavLink
                        href="#"
                        title="Mobile Alerts"
                      />
                    </li>
                  </ul>
                </NestedNavMenuItem>
              </li>
              <li>
                <NavLink
                  href="#"
                  title="Online Banking"
                />
              </li>
              <li>
                <NavLink
                  href="#"
                  title="Zelle"
                />
              </li>
            </ul>
          </NestedNavMenuItem>
        </li>
        <li>
          <NavLink
            href="#"
            title="Credit Card Demos"
            description="Explore our credit card features"
          />
        </li>
        <li>
          <NavLink
            href="#"
            title="Mortgage Demos"
            description="See how our mortgage application works"
          />
        </li>
      </ul>
    </NavMenuItem>
  );
};

export default DemoMenu;
