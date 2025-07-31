
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Property Assessment",
      description: "We evaluate your property's potential and provide a detailed revenue analysis with optimization recommendations.",
      duration: "1-2 days",
      deliverables: ["Revenue projection", "Market analysis", "Optimization plan", "Investment recommendations"]
    },
    {
      step: "02", 
      title: "Professional Setup",
      description: "Complete property preparation including professional photography, staging recommendations, and amenity sourcing.",
      duration: "3-5 days",
      deliverables: ["Professional photos", "Staging consultation", "Amenity checklist", "Property optimization"]
    },
    {
      step: "03",
      title: "Listing Creation",
      description: "We craft compelling listings with professional copywriting, competitive pricing strategy, and platform optimization.",
      duration: "1-2 days", 
      deliverables: ["Optimized listing", "Pricing strategy", "SEO optimization", "Multi-platform setup"]
    },
    {
      step: "04",
      title: "Operations Launch",
      description: "Smart lock installation, QR codes setup, automated systems activation, and 24/7 support deployment.",
      duration: "2-3 days",
      deliverables: ["Smart access system", "QR code & website", "Automated messaging", "Support activation"]
    },
    {
      step: "05",
      title: "Ongoing Management",  
      description: "Complete hands-off management including guest communication, maintenance coordination, and revenue optimization.",
      duration: "Ongoing",
      deliverables: ["24/7 guest support", "Maintenance management", "Revenue optimization", "Monthly reporting"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50 mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            From Property to Profit in 5 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process transforms your property into a high-performing Airbnb 
            while you enjoy completely passive income
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8 items-center">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[hsl(var(--brand-dark))] text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                        <Badge variant="outline" className="text-[hsl(var(--primary))] border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.1)]">
                          {step.duration}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1 flex justify-center">
                      {index < steps.length - 1 ? (
                        <div className="w-16 h-16 bg-[hsl(var(--primary)/0.15)] rounded-full flex items-center justify-center">
                          <ArrowRight className="w-6 h-6 text-[hsl(var(--primary))]" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -bottom-4 w-0.5 h-8 bg-gray-200 transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
