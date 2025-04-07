
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="bg-us-light-blue py-12 md:py-20">
      <div className="container-custom">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-us-navy mb-4">
              Banking that fits your life
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Discover financial solutions designed around what matters most to you.
            </p>
            <div className="space-x-4">
              <Button className="bg-us-navy hover:bg-blue-900 text-white">
                Open an Account
              </Button>
              <Button variant="outline" className="border-us-navy text-us-navy hover:bg-us-light-blue">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white rounded-lg p-6 card-shadow">
              <h2 className="text-2xl font-semibold text-us-navy mb-4">Quick Access</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start border-gray-300 hover:border-us-blue hover:text-us-blue">
                  Check balances
                </Button>
                <Button variant="outline" className="justify-start border-gray-300 hover:border-us-blue hover:text-us-blue">
                  Transfer money
                </Button>
                <Button variant="outline" className="justify-start border-gray-300 hover:border-us-blue hover:text-us-blue">
                  Pay bills
                </Button>
                <Button variant="outline" className="justify-start border-gray-300 hover:border-us-blue hover:text-us-blue">
                  Deposit checks
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
