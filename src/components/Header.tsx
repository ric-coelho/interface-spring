
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white header-shadow">
      {/* Main header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-us-blue font-medium">Banking</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-us-navy/50 to-us-navy p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Banking Services
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Explore our range of banking products and services.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuTrigger className="w-full justify-between">
                          <span>Checking</span>
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-3 p-4">
                            <li>
                              <NavigationMenuLink asChild>
                                <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  href="#">
                                  <div className="text-sm font-medium">Standard Checking</div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  href="#">
                                  <div className="text-sm font-medium">Premium Checking</div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  href="#">
                                  <div className="text-sm font-medium">Student Checking</div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Savings</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Savings accounts with competitive rates
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">CDs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Certificates of deposit with guaranteed returns
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-us-blue font-medium">Credit Cards</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Cash Rewards</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Earn cash back on everyday purchases
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Travel Rewards</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Earn points for travel on every purchase
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Low Rate</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Low interest rate for everyday spending
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Business</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Business credit cards with rewards
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-us-blue font-medium">Demo</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-us-blue/50 to-us-blue p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Interactive Demos
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Experience our features with interactive demos.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuTrigger className="w-full justify-between">
                          <span>Banking Demos</span>
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-3 p-4">
                            <li>
                              <NavigationMenuTrigger className="w-full justify-between">
                                <span>Mobile Banking</span>
                                <ChevronRight className="h-4 w-4 ml-2" />
                              </NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-3 p-4">
                                  <li>
                                    <NavigationMenuLink asChild>
                                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        href="#">
                                        <div className="text-sm font-medium">App Tour</div>
                                      </a>
                                    </NavigationMenuLink>
                                  </li>
                                  <li>
                                    <NavigationMenuLink asChild>
                                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        href="#">
                                        <div className="text-sm font-medium">Mobile Deposit</div>
                                      </a>
                                    </NavigationMenuLink>
                                  </li>
                                  <li>
                                    <NavigationMenuLink asChild>
                                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        href="#">
                                        <div className="text-sm font-medium">Mobile Alerts</div>
                                      </a>
                                    </NavigationMenuLink>
                                  </li>
                                </ul>
                              </NavigationMenuContent>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  href="#">
                                  <div className="text-sm font-medium">Online Banking</div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  href="#">
                                  <div className="text-sm font-medium">Zelle</div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Credit Card Demos</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore our credit card features
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Mortgage Demos</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              See how our mortgage application works
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-us-blue font-medium">Loans</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Personal Loans</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Flexible personal loans for any need
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Auto Loans</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Competitive rates on auto financing
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Student Loans</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Finance your education with our student loans
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-us-blue font-medium">Mortgages</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Fixed Rate</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Stable payments for the life of your loan
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Adjustable Rate</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Lower initial rates with potential adjustments
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Refinance</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Lower your rate or payment with refinancing
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-800 hover:text-us-blue font-medium">Investing</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Retirement</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Plan for your future with our retirement options
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Brokerage</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Invest in stocks, bonds, and more
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Managed Portfolios</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Professional investment management
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile menu button */}
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

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
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
      )}
    </header>
  );
};

export default Header;
