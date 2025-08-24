import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Waves, Mountain, Trees, Building2 } from "lucide-react";
import { AirbnbEmbed } from "./AirbnbEmbed";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    airbnbEmbed?: {
      renderEmbeds: () => void;
    };
  }
}

export const PropertyShowcase = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    { name: "All", icon: Building2 },
    { name: "Achrafieh", icon: Building2 },
    { name: "Zouk Mosbeh", icon: Mountain },
    { name: "Jal el Dib", icon: Waves },
  ];

  const properties = [
    // {
    //   id: 1,
    //   title: "Outstanding Modern Stay - Sea View",
    //   location: "Jal el Dib, Lebanon",
    //   price: 45,
    //   rating: 4.9,
    //   reviews: 127,
    //   guests: 4,
    //   bedrooms: 2,
    //   bathrooms: 2,
    //   image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   type: "Jal el Dib",
    //   airbnbId: "51495736", // Your actual Airbnb listing ID
    //   airbnbUrl: "https://www.airbnb.com/rooms/51495736?guests=1&adults=1&s=66&source=embed_widget"
    // },
    {
      id: 1,
      title: "Cedar View Retreat • Garden & Pool Access • 101",
      location: "Arz Al Barouk, Lebanon",
      price: 45,
      rating: 4.9,
      reviews: 127,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Jal el Dib",
      airbnbId: "1490802314296186663", // Your actual Airbnb listing ID
      airbnbUrl: "https://www.airbnb.com/rooms/1490802314296186663?guests=1&adults=1&s=66&source=embed_widget"
    },
    {
      id: 2,
      title: "Luxurious 2BR Haven - City Views",
      location: "Achrafieh, Beirut, Lebanon",
      price: 70,
      rating: 5.0,
      reviews: 203,
      guests: 6,
      bedrooms: 2,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Achrafieh",
      airbnbId: "1308747579227635928",
      airbnbUrl: "https://www.airbnb.com/rooms/1308747579227635928?guests=1&adults=1&s=66&source=embed_widget"
    },
    {
      id: 3,
      title: "Stylish Studio Retreat - Downtown",
      location: "Achrafieh, Beirut, Lebanon",
      price: 40,
      rating: 4.9,
      reviews: 98,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Achrafieh",
      airbnbId: "1311468561815404750",
      airbnbUrl: "https://www.airbnb.com/rooms/1311468561815404750?guests=1&adults=1&s=66&source=embed_widget"
    },
    {
      id: 4,
      title: "Spacious 3BR Coastal Escape - Premium",
      location: "Zouk Mosbeh, Mount Lebanon",
      price: 65,
      rating: 5.0,
      reviews: 89,
      guests: 6,
      bedrooms: 3,
      bathrooms: 3, // 2.5 baths rounded up
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Zouk Mosbeh",
      airbnbId: "50113039", // Your actual Airbnb listing ID
      airbnbUrl: "https://www.airbnb.com/rooms/50113039?check_in=2025-12-01&check_out=2025-12-06&guests=1&adults=1&s=66&source=embed_widget"
    },
    {
      id: 5,
      title: "Contemporary Urban Loft - Central",
      location: "Achrafieh, Beirut, Lebanon",
      price: 50,
      rating: 4.7,
      reviews: 67,
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Achrafieh",
      airbnbId: "1314360430081139692",
      airbnbUrl: "https://www.airbnb.com/rooms/1314360430081139692?guests=1&adults=1&s=66&source=embed_widget"
    },
    {
      id: 6,
      title: "Charming Seaside Condo - Waterfront",
      location: "Zouk Mosbeh, Mount Lebanon",
      price: 45,
      rating: 4.83,
      reviews: 156,
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Zouk Mosbeh",
      airbnbId: "717035280873686484", // Your actual Airbnb listing ID
      airbnbUrl: "https://www.airbnb.com/rooms/717035280873686484?guests=1&adults=1&s=66&source=embed_widget"
    },
    {
      id: 7,
      title: "Executive Suite Experience - Prime Location",
      location: "Achrafieh, Beirut, Lebanon",
      price: 55,
      rating: 5.0,
      reviews: 134,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Achrafieh",
      airbnbId: "1312875896663735918",
      airbnbUrl: "https://www.airbnb.com/rooms/1312875896663735918?guests=1&adults=1&s=66&source=embed_widget"
    }
  ];

  const filteredProperties = selectedFilter === "All" 
    ? properties 
    : properties.filter(property => property.type === selectedFilter);

  // Force Airbnb embeds to re-render when filter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.airbnbEmbed) {
        try {
          window.airbnbEmbed.renderEmbeds();
        } catch (error) {
          console.log('Global embed render attempt:', error);
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedFilter]);

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
          
          {/* Filter Buttons - HIDDEN FOR NOW, UNCOMMENT TO ENABLE
          <div className="flex justify-center gap-4 mb-6">
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
          */}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="space-y-4">
              <div className="text-center">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{property.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{property.location}</p>
              </div>
              {property.airbnbId && property.airbnbId !== "PLACEHOLDER_ID" ? (
                <AirbnbEmbed 
                  key={`${property.airbnbId}-${selectedFilter}`}
                  listingId={property.airbnbId} 
                  width={500} 
                  height={300} 
                />
              ) : (
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <p className="text-gray-500 mb-2">Airbnb Embed Placeholder</p>
                  <p className="text-sm text-gray-400">Replace with actual Airbnb listing ID</p>
                </div>
              )}
            </div>
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