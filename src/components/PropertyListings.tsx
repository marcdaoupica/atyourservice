
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ArrowRight } from "lucide-react";

export const PropertyListings = () => {
  const listings = [
    {
      id: 1,
      title: "Luxury Beirut Apartment",
      location: "Gemmayzeh, Beirut",
      price: 45,
      rating: 4.9,
      reviews: 127,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Sea View", "Rooftop", "Generator"],
      monthlyRevenue: 1200,
      occupancy: 92,
      season: "Peak Summer"
    },
    {
      id: 2,
      title: "Byblos Heritage House",
      location: "Old Souk, Byblos",
      price: 35,
      rating: 4.8,
      reviews: 89,
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Historic Location", "Garden", "Parking"],
      monthlyRevenue: 900,
      occupancy: 85,
      season: "Year Round"
    },
    {
      id: 3,
      title: "Faraya Mountain Chalet",
      location: "Faraya, Mount Lebanon",
      price: 55,
      rating: 4.9,
      reviews: 156,
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Mountain View", "Fireplace", "Ski Access"],
      monthlyRevenue: 1400,
      occupancy: 88,
      season: "Winter Peak"
    }
  ];

  return (
    <section 
      id="listings" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 mb-4">
            Lebanese Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Properties We Manage Across Lebanon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the bustling streets of Beirut to the ancient shores of Byblos, 
            see how we've transformed Lebanese properties into profitable Airbnb listings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {listings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-white text-gray-900 hover:bg-white">
                  ${listing.price}/night
                </Badge>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{listing.rating}</span>
                </div>
                <Badge className="absolute bottom-3 left-3 bg-[hsl(var(--brand-dark))] text-white">
                  {listing.season}
                </Badge>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{listing.title}</h3>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span>{listing.guests} guests</span>
                  </div>
                  <div>{listing.bedrooms} bed</div>
                  <div>{listing.bathrooms} bath</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {listing.amenities.map((amenity, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-[hsl(var(--primary)/0.1)] to-green-50 rounded-lg p-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Monthly Revenue</span>
                    <span className="font-bold text-green-600">${listing.monthlyRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Occupancy Rate</span>
                    <span className="font-semibold text-[hsl(var(--primary))]">{listing.occupancy}%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{listing.rating}</span>
                    <span className="text-sm text-gray-600">({listing.reviews} reviews)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Want to see your Lebanese property featured here? 🇱🇧
          </p>
          <Link to="/get-started">
            <Button size="lg" className="bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-light))] text-white px-8 py-4 rounded-xl">
              List Your Lebanese Property
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
