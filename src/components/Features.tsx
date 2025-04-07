
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Home, PiggyBank, LineChart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <CreditCard className="h-12 w-12 text-us-blue" />,
      title: "Credit Cards",
      description: "Find the right card for your lifestyle with competitive rates and rewards."
    },
    {
      icon: <Home className="h-12 w-12 text-us-blue" />,
      title: "Mortgages",
      description: "Get expert guidance and competitive rates on home loans that fit your needs."
    },
    {
      icon: <PiggyBank className="h-12 w-12 text-us-blue" />,
      title: "Savings",
      description: "Build your future with savings accounts designed to help you reach your goals."
    },
    {
      icon: <LineChart className="h-12 w-12 text-us-blue" />,
      title: "Investments",
      description: "Grow your wealth with personalized investment strategies and expert advice."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-us-navy mb-12">
          Products & Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-center">{feature.icon}</div>
                <CardTitle className="text-xl text-center mt-4 text-us-navy">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
