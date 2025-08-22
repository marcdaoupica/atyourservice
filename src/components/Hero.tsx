import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, MapPin, DollarSign, Users, TrendingUp, Calendar } from "lucide-react";
export const Hero = () => {
  return <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-[hsl(var(--primary)/0.1)] flex items-center pt-16">
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-[hsl(var(--primary))] border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.1)]">              
                <Star className="w-3 h-3 mr-1" />
                Premium Airbnb Management in Lebanon
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Lebanese Property Into a 
                <span className="text-[hsl(var(--primary))]"> Revenue Machine</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                End-to-end Airbnb management across Lebanon's most beautiful destinations. 
                From Beirut to Baalbek, from Byblos to the Cedars - we handle everything 
                while you earn cash effortlessly.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--primary))]">2.1x</div>
                <div className="text-sm text-gray-600">Average Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Support in Arabic & English</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">20%</div>
                <div className="text-sm text-gray-600">Commission Only</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-light))] text-white px-8 py-4 rounded-xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Property Analysis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl" onClick={() => document.getElementById('listings')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                View Lebanese Success Stories
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">All over Lebanon</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Cash payments monthly</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="aspect-video rounded-xl mb-6 relative overflow-hidden">
                <img src="/lovable-uploads/b53a4fd6-a902-4656-bf14-899c484b49a4.jpg" alt="Modern luxury Lebanese property interior" className="w-full h-full object-cover" />
                
                {/* Static Stats Bubbles */}
                <div className="absolute bg-white rounded-full p-3 shadow-lg border-4 border-[hsl(var(--primary))] top-4 left-4 hidden md:block">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[hsl(var(--primary))]" />
                    <span className="text-sm font-bold">89% Occupancy</span>
                  </div>
                </div>

                <div className="absolute bg-white rounded-full p-3 shadow-lg border-4 border-green-500 top-1/2 right-4 hidden md:block">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-bold">$2300/mo</span>
                  </div>
                </div>

                <div className="absolute bg-white rounded-full p-3 shadow-lg border-4 border-purple-500 bottom-4 left-1/3 hidden md:block">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-bold">Peak Summer</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Revenue</span>
                  <span className="text-2xl font-bold text-green-600">$2300</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Occupancy Rate (Summer)</span>
                  <span className="text-lg font-semibold text-[hsl(var(--primary))]">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Guest Rating</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    <span className="ml-1 font-semibold">4.9</span>
                  </div>
                </div>
                <div className="bg-[hsl(var(--primary)/0.1)] rounded-lg p-3 text-center">
                  <p className="text-sm text-[hsl(var(--primary))] font-medium">
                    🇱🇧 Proudly serving Lebanon's hospitality heritage - paid in cash monthly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};