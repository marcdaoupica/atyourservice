
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmad Khalil",
      location: "Beirut, Lebanon",
      property: "2BR Apartment",
      revenue: "$1,850/month",
      rating: 5,
      text: "I was skeptical about Airbnb management services, but these guys completely transformed my property. From $750 to $1,850 monthly revenue in just 3 months. They handle everything - I literally do nothing and get paid.",
      beforeRevenue: 750,
      afterRevenue: 1850
    },
    {
      name: "Nadia Khoury", 
      location: "Jounieh, Lebanon",
      property: "3BR Villa",
      revenue: "$2,400/month",
      rating: 5,
      text: "The level of service is incredible. Professional photos, 24/7 guest support, maintenance coordination - everything is seamless. My guests love the QR code system and the property consistently gets 5-star reviews.",
      beforeRevenue: 950,
      afterRevenue: 2400
    },
    {
      name: "Elie Mansour",
      location: "Byblos, Lebanon", 
      property: "Luxury Apartment",
      revenue: "$2,100/month",
      rating: 5,
      text: "Best decision I made for my investment property. They optimized everything - pricing, listing, guest experience. The automated systems and professional management make this completely passive income.",
      beforeRevenue: 800,
      afterRevenue: 2100
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 mb-4">
            <Star className="w-3 h-3 mr-1" />
            Client Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Property Owners Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped property owners transform their investments into 
            high-performing, completely passive income streams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-blue-100">
                <Quote className="w-8 h-8" />
              </div>
              
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                      <p className="text-sm text-gray-500">{testimonial.property}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      {testimonial.revenue}
                    </Badge>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-4">
                    <div className="flex justify-between items-center text-sm">
                      <div className="text-center">
                        <div className="text-red-600 font-semibold">Before</div>
                        <div className="text-lg font-bold text-red-700">
                          ${testimonial.beforeRevenue.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-gray-400">→</div>
                      <div className="text-center">
                        <div className="text-green-600 font-semibold">After</div>
                        <div className="text-lg font-bold text-green-700">
                          ${testimonial.afterRevenue.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                        +{Math.round((testimonial.afterRevenue - testimonial.beforeRevenue) / testimonial.beforeRevenue * 100)}% increase
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Hundreds of Successful Property Owners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--primary))]">2.1x</div>
                <div className="text-sm text-gray-600">Average Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">4.9</div>
                <div className="text-sm text-gray-600">Average Guest Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">87%</div>
                <div className="text-sm text-gray-600">Average Occupancy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
