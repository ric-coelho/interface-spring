
import React from 'react';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from 'lucide-react';

export interface NavMenuItemProps {
  title: string;
  children: React.ReactNode;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ title, children }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-gray-800 hover:text-us-blue font-medium">{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        {children}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export interface NestedNavMenuItemProps {
  title: string;
  children: React.ReactNode;
}

export const NestedNavMenuItem: React.FC<NestedNavMenuItemProps> = ({ title, children }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="w-full justify-between">
        <span>{title}</span>
        <ChevronRight className="h-4 w-4 ml-2" />
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        {children}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export interface NavLinkProps {
  href: string;
  title: string;
  description?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, title, description }) => {
  return (
    <NavigationMenuLink asChild>
      <a
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        href={href}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        {description && (
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        )}
      </a>
    </NavigationMenuLink>
  );
};

export const FeatureCard: React.FC<{
  href: string;
  title: string;
  description: string;
  bgClass: string;
}> = ({ href, title, description, bgClass }) => {
  return (
    <NavigationMenuLink asChild>
      <a
        className={`flex h-full w-full select-none flex-col justify-end rounded-md ${bgClass} p-6 no-underline outline-none focus:shadow-md`}
        href={href}
      >
        <div className="mt-4 mb-2 text-lg font-medium text-white">
          {title}
        </div>
        <p className="text-sm leading-tight text-white/90">
          {description}
        </p>
      </a>
    </NavigationMenuLink>
  );
};

export default NavMenuItem;
