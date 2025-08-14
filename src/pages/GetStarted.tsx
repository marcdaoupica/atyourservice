
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, MapPin, Phone, Mail } from "lucide-react";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    propertyType: "",
    description: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours to discuss your property.");
  };

  const benefits = [
    "Free property analysis & revenue projection",
    "No upfront costs - we only succeed when you do",
    "Complete setup within 2 weeks",
    "24/7 professional guest support in Arabic & English",
    "Guaranteed revenue optimization",
    "Full property management & maintenance"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-[hsl(var(--primary)/0.1)] to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-[hsl(var(--primary))] border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.1)] mb-4">
              Get Started Today
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Turn Your Lebanese Property Into a 
              <span className="text-[hsl(var(--primary))]"> Profit Machine</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your free property analysis and discover how much you could earn with 
              professional Airbnb management across Lebanon.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">What You Get (Completely Free)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-[hsl(var(--brand-dark))] to-[hsl(var(--brand-light))] text-white border-0">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Call Us Now</h3>
                    <p className="text-[hsl(var(--primary)/0.7)] text-sm mb-3">Speak with our Lebanese team</p>
                    <p className="text-white font-semibold">+961 76 603 820</p>
                    <p className="text-white font-semibold">or +961 70 200 613</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white border-0">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Email Us</h3>
                    <p className="text-green-100 text-sm mb-3">Get detailed information</p>
                    <p className="text-white font-semibold">atyourservice.co.lb@gmail.com</p>
                    <p className="text-white font-semibold">or kevinkaram@hotmail.com</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-[hsl(var(--brand-dark))] to-purple-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <div>
                    <h3 className="font-bold text-xl">Trusted by 200+ Lebanese Property Owners</h3>
                    <p className="text-[hsl(var(--primary)/0.7)]">From Beirut to Baalbek, from Byblos to the Cedars</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">2.1x</div>
                    <div className="text-sm text-[hsl(var(--primary)/0.7)]">Avg Revenue Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-sm text-[hsl(var(--primary)/0.7)]">Guest Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-sm text-[hsl(var(--primary)/0.7)]">Avg Occupancy</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Property Analysis</CardTitle>
                <p className="text-gray-600">
                  Tell us about your Lebanese property and we'll provide a detailed revenue projection within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name *</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Marc"
                        className="h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name *</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Khalil"
                        className="h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="marc@example.com"
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number *</label>
                    <Input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+961 76 603 820"
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Property Location *</label>
                    <Input 
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleInputChange}
                      placeholder="e.g., Achrafieh, Beirut or Byblos Old Town"
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Property Type *</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                      required
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="villa">Villa</option>
                      <option value="chalet">Chalet</option>
                      <option value="studio">Studio</option>
                      <option value="penthouse">Penthouse</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tell us about your property</label>
                    <Textarea 
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Number of bedrooms, bathrooms, amenities, current rental status, special features, etc."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-light))] text-white rounded-xl text-lg">
                    Get My Free Analysis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to receive communications from AtYourService. 
                    We respect your privacy and never spam. 🇱🇧
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
