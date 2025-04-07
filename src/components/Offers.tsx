
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Offers: React.FC = () => {
  const offers = [
    {
      title: "Earn $300 with a new checking account",
      description: "Open a new US Bank checking account and earn a $300 bonus when you set up direct deposit.",
      cta: "Learn More"
    },
    {
      title: "0% Intro APR on Balance Transfers",
      description: "Save on interest with 0% intro APR for 18 billing cycles on balance transfers.",
      cta: "Apply Now"
    },
    {
      title: "Digital Banking Tools",
      description: "Manage your money anywhere, anytime with our award-winning mobile app and online banking.",
      cta: "Get Started"
    }
  ];

  return (
    <section className="py-16 bg-us-gray">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-us-navy mb-4">
          Special Offers
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our latest promotions and special offers designed to help you save and make the most of your money.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card key={index} className="card-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-us-navy">
                  {offer.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{offer.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="bg-us-blue hover:bg-blue-700 text-white w-full">
                  {offer.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
