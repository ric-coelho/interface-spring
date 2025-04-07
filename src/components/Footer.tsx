
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const categories = [
    {
      title: "Banking",
      links: ["Checking", "Savings", "Credit Cards", "Digital Banking", "Student Banking"]
    },
    {
      title: "Borrowing",
      links: ["Mortgages", "Home Equity", "Auto Loans", "Personal Loans", "Student Loans"]
    },
    {
      title: "Investing",
      links: ["Retirement", "Brokerage", "Asset Management", "Financial Advisors", "Education Planning"]
    },
    {
      title: "About Us",
      links: ["Our Company", "Community Impact", "Careers", "Investor Relations", "Newsroom"]
    },
  ];

  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="container-custom">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-bold text-us-navy mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-us-blue">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact and Social */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-us-navy mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-2">1-800-USBANKS (1-800-872-2657)</p>
            <p className="text-gray-600">We're here to help 24/7</p>
          </div>
          <div>
            <h3 className="font-bold text-us-navy mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-us-blue">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-us-blue">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-us-blue">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-us-blue">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-us-blue">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Legal and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gradient text-2xl font-bold mb-4 md:mb-0">US Bank</div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-us-blue text-sm">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-us-blue text-sm">Security</a>
            <a href="#" className="text-gray-600 hover:text-us-blue text-sm">Terms & Conditions</a>
            <a href="#" className="text-gray-600 hover:text-us-blue text-sm">Accessibility</a>
            <a href="#" className="text-gray-600 hover:text-us-blue text-sm">Site Map</a>
          </div>
        </div>
        <p className="text-gray-500 text-sm text-center mt-6">
          © 2025 US Bank Template. All rights reserved. Member FDIC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
