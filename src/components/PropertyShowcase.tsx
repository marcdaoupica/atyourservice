import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ExternalLink, Waves, Mountain, Trees, Building2 } from "lucide-react";

export const PropertyShowcase = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    { name: "All", icon: Building2 },
    { name: "Sea", icon: Waves },
    { name: "Mountain", icon: Mountain },
    { name: "Forest", icon: Trees },
  ];

  const properties = [
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
      type: "Sea",
      airbnbUrl: "#"
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
      type: "Sea",
      airbnbUrl: "#"
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
      type: "Mountain",
      airbnbUrl: "#"
    },
    {
      id: 4,
      title: "Cedar Forest Retreat",
      location: "Bcharre, North Lebanon",
      price: 65,
      rating: 4.8,
      reviews: 203,
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Forest",
      airbnbUrl: "#"
    },
    {
      id: 5,
      title: "Tyre Beach Villa",
      location: "Tyre, South Lebanon",
      price: 75,
      rating: 4.9,
      reviews: 98,
      guests: 10,
      bedrooms: 5,
      bathrooms: 4,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Sea",
      airbnbUrl: "#"
    },
    {
      id: 6,
      title: "Douma Stone House",
      location: "Douma, Batroun",
      price: 40,
      rating: 4.7,
      reviews: 67,
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Mountain",
      airbnbUrl: "#"
    },
    {
      id: 7,
      title: "Jounieh Bay Apartment",
      location: "Jounieh, Mount Lebanon",
      price: 50,
      rating: 4.8,
      reviews: 134,
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Sea",
      airbnbUrl: "#"
    },
    {
      id: 8,
      title: "Ehden Mountain Lodge",
      location: "Ehden, North Lebanon",
      price: 60,
      rating: 4.9,
      reviews: 89,
      guests: 8,
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Forest",
      airbnbUrl: "#"
    },
    {
      id: 9,
      title: "Sidon Old City Riad",
      location: "Sidon, South Lebanon",
      price: 38,
      rating: 4.6,
      reviews: 76,
      guests: 5,
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Sea",
      airbnbUrl: "#"
    },
    {
      id: 10,
      title: "Baalbek Valley Farm",
      location: "Baalbek, Bekaa",
      price: 45,
      rating: 4.7,
      reviews: 112,
      guests: 8,
      bedrooms: 4,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Mountain",
      airbnbUrl: "#"
    },
    {
      id: 11,
      title: "Anfeh Coastal Cottage",
      location: "Anfeh, North Lebanon",
      price: 42,
      rating: 4.8,
      reviews: 93,
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Sea",
      airbnbUrl: "#"
    },
    {
      id: 12,
      title: "Hammana Pine Retreat",
      location: "Hammana, Mount Lebanon",
      price: 52,
      rating: 4.9,
      reviews: 87,
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Forest",
      airbnbUrl: "#"
    }
  ];

  const filteredProperties = selectedFilter === "All" 
    ? properties 
    : properties.filter(property => property.type === selectedFilter);

  return (
    <section id="listings" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Properties Across Lebanon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover exceptional stays from the Mediterranean coast to the Lebanese mountains
          </p>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <Button
                  key={filter.name}
                  variant={selectedFilter === filter.name ? "default" : "outline"}
                  onClick={() => setSelectedFilter(filter.name)}
                  className={`flex items-center gap-2 ${
                    selectedFilter === filter.name 
                      ? "bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-light))]" 
                      : "border-[hsl(var(--brand-dark))] text-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-dark))] hover:text-white"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {filter.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{property.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-1">{property.title}</h3>
                  <div className="flex items-center gap-1 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{property.guests} guests</span>
                  <span>{property.bedrooms} bed</span>
                  <span>{property.bathrooms} bath</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-600">({property.reviews} reviews)</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-lg">${property.price}</span>
                    <span className="text-gray-600 text-sm">/night</span>
                  </div>
                </div>

                <Button 
                  asChild
                  className="w-full bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-light))] text-white"
                >
                  <a 
                    href={property.airbnbUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    View on Airbnb
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to list your Lebanese property with us? 🇱🇧
          </p>
          <Button 
            size="lg" 
            className="bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-light))] text-white px-8 py-4 rounded-xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            List Your Property
          </Button>
        </div>
      </div>
    </section>
  );
};