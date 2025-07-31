import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, Calculator, Star, Calendar, Snowflake, Sun, Leaf } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const PricePrediction = () => {
  const [location, setLocation] = useState("");
  const [primeLevel, setPrimeLevel] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [amenities, setAmenities] = useState<string[]>([]);
  const [prediction, setPrediction] = useState<any>(null);

  const lebanonLocations = [
    { value: "beirut-central", label: "Beirut Central", multiplier: 2.2 },
    { value: "beirut-hamra", label: "Beirut - Hamra", multiplier: 2.0 },
    { value: "beirut-gemmayzeh", label: "Beirut - Gemmayzeh", multiplier: 2.1 },
    { value: "beirut-achrafieh", label: "Beirut - Achrafieh", multiplier: 1.9 },
    { value: "beirut-verdun", label: "Beirut - Verdun", multiplier: 1.8 },
    { value: "beirut-raouche", label: "Beirut - Raouche", multiplier: 1.7 },
    { value: "jounieh", label: "Jounieh", multiplier: 1.6 },
    { value: "jounieh-kaslik", label: "Jounieh - Kaslik", multiplier: 1.7 },
    { value: "byblos", label: "Byblos (Jbeil)", multiplier: 1.8 },
    { value: "batroun", label: "Batroun", multiplier: 1.5 },
    { value: "tripoli", label: "Tripoli", multiplier: 1.2 },
    { value: "bcharre", label: "Bcharre", multiplier: 1.6 },
    { value: "faraya", label: "Faraya", multiplier: 1.9 },
    { value: "ehden", label: "Ehden", multiplier: 1.4 },
    { value: "cedars", label: "The Cedars", multiplier: 1.8 },
    { value: "zahle", label: "Zahle", multiplier: 1.3 },
    { value: "aley", label: "Aley", multiplier: 1.4 },
    { value: "broummana", label: "Broummana", multiplier: 1.5 },
    { value: "beit-mery", label: "Beit Mery", multiplier: 1.6 },
    { value: "douma", label: "Douma", multiplier: 1.6 },
    { value: "harissa", label: "Harissa", multiplier: 1.5 },
    { value: "antelias", label: "Antelias", multiplier: 1.4 },
    { value: "dbaye", label: "Dbaye", multiplier: 1.3 },
    { value: "amchit", label: "Amchit", multiplier: 1.4 },
    { value: "enfeh", label: "Enfeh", multiplier: 1.3 },
    { value: "halat", label: "Halat", multiplier: 1.2 },
    { value: "chekka", label: "Chekka", multiplier: 1.1 },
    { value: "koura", label: "Koura", multiplier: 1.0 },
    { value: "zgharta", label: "Zgharta", multiplier: 1.1 },
    { value: "kfardebian", label: "Kfardebian", multiplier: 1.7 },
    { value: "mzaar", label: "Mzaar Kfardebian", multiplier: 1.8 },
    { value: "faqra", label: "Faqra", multiplier: 1.6 },
    { value: "qadisha", label: "Qadisha Valley", multiplier: 1.5 },
    { value: "tyre", label: "Tyre (Sour)", multiplier: 1.2 },
    { value: "sidon", label: "Sidon (Saida)", multiplier: 1.3 },
    { value: "jezzine", label: "Jezzine", multiplier: 1.4 },
    { value: "baakline", label: "Baakline", multiplier: 1.2 },
    { value: "deir-qamar", label: "Deir al-Qamar", multiplier: 1.3 },
    { value: "beiteddine", label: "Beiteddine", multiplier: 1.4 },
    { value: "chouf", label: "Chouf Mountains", multiplier: 1.3 },
    { value: "baalbek", label: "Baalbek", multiplier: 1.1 },
    { value: "ksara", label: "Ksara", multiplier: 1.0 },
    { value: "anjar", label: "Anjar", multiplier: 0.9 },
    { value: "rashaya", label: "Rashaya", multiplier: 1.0 },
    { value: "hasbaya", label: "Hasbaya", multiplier: 0.9 },
    { value: "marjayoun", label: "Marjayoun", multiplier: 0.8 },
    { value: "nabatieh", label: "Nabatieh", multiplier: 0.9 },
    { value: "bint-jbeil", label: "Bint Jbeil", multiplier: 0.8 }
  ];

  const primeLevels = [
    { value: "prime", label: "Prime Location (Seafront, City Center)", multiplier: 1.4 },
    { value: "excellent", label: "Excellent Location (Walking distance to attractions)", multiplier: 1.2 },
    { value: "good", label: "Good Location (Easy access to transport)", multiplier: 1.0 },
    { value: "average", label: "Average Location", multiplier: 0.8 }
  ];

  const availableAmenities = [
    { id: "sea-view", label: "Sea View", impact: 25 },
    { id: "mountain-view", label: "Mountain View", impact: 15 },
    { id: "pool", label: "Swimming Pool", impact: 30 },
    { id: "parking", label: "Private Parking", impact: 20 },
    { id: "balcony", label: "Large Balcony/Terrace", impact: 15 },
    { id: "ac", label: "Air Conditioning", impact: 20 },
    { id: "generator", label: "Private Generator", impact: 25 },
    { id: "internet", label: "High-Speed Internet", impact: 10 },
    { id: "kitchen", label: "Full Kitchen", impact: 15 }
  ];

  const calculatePrediction = () => {
    const selectedLocation = lebanonLocations.find(loc => loc.value === location);
    const selectedPrime = primeLevels.find(prime => prime.value === primeLevel);
    
    if (!selectedLocation || !selectedPrime) return;

    const basePrice = propertyType === "apartment" ? 13 : propertyType === "house" ? 16 : propertyType === "villa" ? 20 : 10;
    const bedroomMultiplier = parseInt(bedrooms) || 1;
    const locationMultiplier = selectedLocation.multiplier;
    const primeMultiplier = selectedPrime.multiplier;
    
    // Calculate amenities impact
    const amenityBonus = amenities.reduce((total, amenityId) => {
      const amenity = availableAmenities.find(a => a.id === amenityId);
      return total + (amenity ? amenity.impact : 0);
    }, 0);

    const baseNightlyRate = Math.round(basePrice * bedroomMultiplier * locationMultiplier * primeMultiplier);
    const finalNightlyRate = Math.round(baseNightlyRate * (1 + amenityBonus / 100));

    // Seasonal calculations
    const summerRate = Math.round(finalNightlyRate * 1.3); // Peak summer
    const springAutumnRate = Math.round(finalNightlyRate * 1.0); // Moderate seasons
    const winterRate = Math.round(finalNightlyRate * 0.8); // Lower season
    const holidayRate = Math.round(finalNightlyRate * 1.4); // Holiday peaks

    // Monthly revenue calculations (considering occupancy rates)
    const summerRevenue = Math.round(summerRate * 20); // 65% occupancy
    const springAutumnRevenue = Math.round(springAutumnRate * 15); // 50% occupancy
    const winterRevenue = Math.round(winterRate * 12); // 40% occupancy
    const holidayRevenue = Math.round(holidayRate * 22); // 70% occupancy

    const annualRevenue = (summerRevenue * 3) + (springAutumnRevenue * 6) + (winterRevenue * 2) + (holidayRevenue * 1);
    const avgMonthlyRevenue = Math.round(annualRevenue / 12);
    const ourCommission = Math.round(avgMonthlyRevenue * 0.20);
    const yourEarnings = avgMonthlyRevenue - ourCommission;

    setPrediction({
      baseRate: finalNightlyRate,
      summerRate,
      springAutumnRate,
      winterRate,
      holidayRate,
      summerRevenue,
      springAutumnRevenue,
      winterRevenue,
      holidayRevenue,
      annualRevenue,
      avgMonthlyRevenue,
      ourCommission,
      yourEarnings,
      location: selectedLocation.label,
      primeLevel: selectedPrime.label
    });
  };

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    if (checked) {
      setAmenities([...amenities, amenityId]);
    } else {
      setAmenities(amenities.filter(id => id !== amenityId));
    }
  };

  return (
    <section id="prediction" className="py-20 bg-gradient-to-br from-gray-50 to-[hsl(var(--primary)/0.1)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50 mb-4">
            <Calculator className="w-3 h-3 mr-1" />
            Lebanon Revenue Calculator
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Lebanese Property's Earning Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get detailed seasonal predictions for your property across Lebanon's most sought-after destinations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MapPin className="w-6 h-6 text-[hsl(var(--primary))]" />
                Property Details - Lebanon
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location in Lebanon</label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Lebanese city/area" />
                  </SelectTrigger>
                  <SelectContent>
                    {lebanonLocations.map((loc) => (
                      <SelectItem key={loc.value} value={loc.value}>{loc.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location Prime Level</label>
                <Select value={primeLevel} onValueChange={setPrimeLevel}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="How prime is your location?" />
                  </SelectTrigger>
                  <SelectContent>
                    {primeLevels.map((prime) => (
                      <SelectItem key={prime.value} value={prime.value}>{prime.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Property Type</label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Number of Bedrooms</label>
                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Studio/1 Bedroom</SelectItem>
                    <SelectItem value="2">2 Bedrooms</SelectItem>
                    <SelectItem value="3">3 Bedrooms</SelectItem>
                    <SelectItem value="4">4+ Bedrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">Property Features & Amenities</label>
                <div className="grid grid-cols-2 gap-3">
                  {availableAmenities.map((amenity) => (
                    <div key={amenity.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={amenity.id}
                        checked={amenities.includes(amenity.id)}
                        onCheckedChange={(checked) => handleAmenityChange(amenity.id, checked as boolean)}
                      />
                      <label htmlFor={amenity.id} className="text-sm text-gray-700 cursor-pointer">
                        {amenity.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={calculatePrediction}
                disabled={!location || !primeLevel || !propertyType || !bedrooms}
                className="w-full h-12 bg-[hsl(var(--brand-dark))] hover:bg-[hsl(var(--brand-light))] text-white rounded-xl"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Calculate Seasonal Revenue Potential
              </Button>
            </CardContent>
          </Card>

          {prediction && (
            <Card className="shadow-xl border-0 bg-gradient-to-br from-[hsl(var(--brand-dark))] to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Star className="w-6 h-6" />
                  Your Seasonal Revenue Prediction
                </CardTitle>
                <p className="text-sm opacity-90">{prediction.location} • {prediction.primeLevel}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <Sun className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                    <div className="text-xl font-bold">${prediction.summerRate}/night</div>
                    <div className="text-xs opacity-90">Summer Peak</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <Snowflake className="w-6 h-6 mx-auto mb-2 text-[hsl(var(--primary)/0.7)]" />
                    <div className="text-xl font-bold">${prediction.holidayRate}/night</div>
                    <div className="text-xs opacity-90">Holiday Season</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <div className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-yellow-300" />
                      <span>Summer Revenue (Jun-Aug)</span>
                    </div>
                    <span className="text-xl font-bold">${prediction.summerRevenue.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-300" />
                      <span>Spring/Autumn (Mar-May, Sep-Nov)</span>
                    </div>
                    <span className="text-lg font-semibold">${prediction.springAutumnRevenue.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <div className="flex items-center gap-2">
                      <Snowflake className="w-4 h-4 text-blue-200" />
                      <span>Winter (Dec-Feb)</span>
                    </div>
                    <span className="text-lg">${prediction.winterRevenue.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="font-semibold">Annual Revenue</span>
                    <span className="text-2xl font-bold text-yellow-300">
                      ${prediction.annualRevenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span>Our Commission (20%)</span>
                    <span className="text-lg">${prediction.ourCommission.toLocaleString()}/mo avg</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold">Your Average Monthly Cash Earnings</span>
                    <span className="text-2xl font-bold text-green-300">
                      ${prediction.yourEarnings.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-sm opacity-90 mb-2">Ready to maximize your Lebanese property's potential?</p>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Get Free Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
