
import React from 'react';
import { Button } from "@/components/ui/button";

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-us-navy text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-white/80">
          Whether you're looking to open an account, apply for a loan, or learn more about our services, we're here to help you every step of the way.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Button className="bg-white text-us-navy hover:bg-gray-100">
            Open an Account
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Contact Us
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Find a Location
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
