
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Home, 
  MessageSquare, 
  Wrench, 
  Key, 
  Shield, 
  QrCode, 
  DollarSign,
  Clock,
  Star,
  Users,
  Smartphone
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Professional Photography",
      description: "High-quality photos that showcase your property's best features and attract premium guests",
      features: ["Professional photographer", "Multiple angles", "Lighting optimization", "Same-day delivery"]
    },
    {
      icon: Home,
      title: "Property Setup & Staging",
      description: "Complete property preparation with furniture recommendations and essential amenities",
      features: ["Furniture consultation", "Amenity sourcing", "Interior optimization", "Guest essentials"]
    },
    {
      icon: MessageSquare,
      title: "Guest Communication",
      description: "24/7 professional guest support from booking to checkout with instant response times",
      features: ["Pre-booking inquiries", "Check-in assistance", "During-stay support", "Checkout coordination"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Operations",
      description: "Proactive maintenance and immediate issue resolution to ensure perfect guest experiences",
      features: ["AC & appliance checks", "Emergency repairs", "Preventive maintenance", "Vendor coordination"]
    },
    {
      icon: Key,
      title: "Keyless Entry Management",
      description: "Professional lockbox installation and code management for seamless guest access",
      features: ["Lockbox installation", "Code generation & updates", "Guest code communication", "Security coordination"]
    },
    {
      icon: QrCode,
      title: "Digital Guest Experience",
      description: "Custom QR codes and dedicated websites for each property with all essential information",
      features: ["Property-specific website", "QR code integration", "Local recommendations", "House rules & guides"]
    }
  ];

  const additional = [
    { icon: DollarSign, title: "Cash Revenue Monthly", desc: "Reliable cash payments" },
    { icon: Clock, title: "Automated Operations", desc: "Streamlined processes" },
    { icon: Star, title: "Listing Optimization", desc: "Professional copywriting" },
    { icon: Users, title: "Host Dashboard", desc: "Real-time analytics" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-[hsl(var(--primary))] border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.1)] mb-4">
            Full-Service Management
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Succeed on Airbnb
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From property preparation to guest checkout, we handle every aspect of your Airbnb business 
            so you can enjoy passive income without any of the work. Get paid in cash every month.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-[hsl(var(--primary)/0.15)] rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[hsl(var(--primary))] rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[hsl(var(--primary)/0.1)] to-purple-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Plus Many More Features</h3>
            <p className="text-gray-600">Additional services included in our comprehensive management package</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additional.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <item.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
