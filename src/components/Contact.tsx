import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
export const Contact = () => {
  const benefits = ["Free property analysis & revenue projection", "No upfront costs - we only succeed when you do", "Complete setup within 2 weeks", "24/7 professional guest support", "Guaranteed revenue optimization"];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyDescription: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Web3Forms - Simple and reliable email service
      const formDataToSend = new FormData();
      
      formDataToSend.append('access_key', '0e960a6a-6a56-471e-a012-506afd1cbd98');
      
      formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('property_address', formData.propertyAddress);
      formDataToSend.append('message', formData.propertyDescription);
      
      formDataToSend.append('subject', 'New Property Analysis Request');
      formDataToSend.append('from_name', 'AtYourService Website');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          propertyAddress: '',
          propertyDescription: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20 text-white bg-slate-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-white border-white bg-white/20 mb-4">
            Get Started Today
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of property owners who've discovered the power of professional Airbnb management. 
            Get your free consultation and revenue analysis today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">What You Get (Free)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>)}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Call Us/ Whatsapp</h3>
                  <p className="text-gray-300 text-sm mb-3">Speak with our team directly</p>
                  <p className="text-white font-semibold">+961 76 603 820</p>
                  <p className="text-white font-semibold">or +961 70 200 613</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Email Us</h3>
                  <p className="text-gray-300 text-sm mb-3">Get detailed information</p>
                  <p className="text-white font-semibold">atyourservice.co.lb@gmail.com</p>
                  <p className="text-white font-semibold">or kevinkaram@hotmail.com</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-[hsl(var(--brand-dark))] to-purple-600 border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-white" />
                  <div>
                    <h3 className="font-bold text-white mb-1">Quick Response</h3>
                    <p className="text-white/80 text-sm">
                      We typically respond within 2 hours during business hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white text-gray-900">
            <CardHeader>
              <CardTitle className="text-2xl">Get Your Free Analysis</CardTitle>
              <p className="text-gray-600">
                Tell us about your property and we'll provide a detailed revenue projection
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
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
                    <label className="text-sm font-medium">Property Address *</label>
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
                    <label className="text-sm font-medium">Tell us about your property</label>
                    <Textarea 
                      name="propertyDescription"
                      value={formData.propertyDescription}
                      onChange={handleInputChange}
                      placeholder="Number of bedrooms, bathrooms, property type, current rental status, etc." 
                      className="min-h-[100px]" 
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      ✅ Thank you! Your request has been sent successfully. We'll contact you within 24 hours.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      ❌ Sorry, there was an error sending your request. Please try again or contact us directly.
                    </div>
                  )}

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-light))] text-white rounded-xl text-lg disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Get My Free Analysis'}
                    {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </div>
              </form>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to receive communications from our team. 
                We respect your privacy and never spam.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Why Property Owners Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[hsl(var(--brand-dark))] rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Proven Results</h4>
                <p className="text-gray-400 text-sm">2.1x average revenue increase</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Completely Passive</h4>
                <p className="text-gray-400 text-sm">Zero work required from you</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Local Expertise</h4>
                <p className="text-gray-400 text-sm">Deep market knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};