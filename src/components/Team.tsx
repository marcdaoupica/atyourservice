
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Code, Wrench, Headphones } from "lucide-react";

export const Team = () => {
  const team = [
    {
      name: "Elie Costantine",
      role: "Guest Relations Specialist", 
      icon: MessageSquare,
      color: "bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))]",
      description: "Handles all pre-booking communications, guest inquiries, verification processes, and manages financial reporting and accounting operations for all properties.",
      responsibilities: [
        "Pre-booking guest communication",
        "Guest verification and ID checks",
        "Financial reporting and accounting operations",
        "Booking rules and guidelines",
        "Cancellation management",
      ]
    },
    
    {
      name: "Kevin Azar Karam",
      role: "Customer Success & Social Media Manager", 
      icon: Headphones,
      color: "bg-blue-100 text-blue-600",
      description: "Provides comprehensive support to both guests and property owners, coordinating property photography, and driving brand engagement through social media.",
      responsibilities: [
        "24/7 guest support via WhatsApp",
        "Property photography coordination and updates",
        "Operations coordination",
        "Social media content creation and management",
        "Brand engagement and online community building"
      ]
    },
    {
      name: "Christ Apochian", 
      role: "Operations Manager",
      icon: Wrench,
      color: "bg-emerald-100 text-emerald-600", 
      description: "Ensures all properties are maintained to the highest standards with proactive maintenance and vendor coordination.",
      responsibilities: [
        "Property maintenance oversight",
        "Vendor and contractor coordination",
        "Quality assurance inspections",
        "Emergency repair management",
        "On-site issue resolution"
      ]
    },
    {
      name: "Marc Daou",
      role: "Technology Director",
      icon: Code, 
      color: "bg-indigo-100 text-indigo-600",
      description: "Manages all digital aspects including website development, listing creation, automated messaging workflows, and QR code systems for apartment management.",
      responsibilities: [
        "Website development and maintenance",
        "Professional listing creation",
        "Automated messaging systems and workflows", 
        "QR code and digital systems for apatments",
        "SEO and platform optimization"
      ]
    }
    
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-[hsl(var(--primary))] border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.1)] mb-4">
            Expert Team
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Your Dedicated Specialists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each property is supported by our specialized team of experts, ensuring every aspect 
            of your Airbnb business is handled with professional expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${member.color}`}>
                    <member.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                    <p className="text-sm text-gray-600 font-medium">{member.role}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Responsibilities:</h4>
                  <div className="space-y-2">
                    {member.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[hsl(var(--brand-dark))] to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Dedicated Support for Every Property
          </h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Unlike other property management companies, each of our team members specializes in their area of expertise, 
            ensuring your property receives professional attention in every aspect of the business.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">&lt; 2hr</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/80">Coverage Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5★</div>
              <div className="text-sm text-white/80">Service Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
