import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Star, Briefcase, GraduationCap, MapPin, FileText } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "O-1 Visa",
    description: "For individuals with extraordinary ability in business, arts, or athletics.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Briefcase,
    title: "EB-1 Visa",
    description: "Employment-based green card for priority workers and entrepreneurs.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: GraduationCap,
    title: "NIW (National Interest Waiver)",
    description: "Green card for professionals whose work benefits U.S. national interest.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Globe,
    title: "H-1B Visa",
    description: "Temporary work visa for specialty occupations in technology and business.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: MapPin,
    title: "TN Visa",
    description: "NAFTA professional visa for Canadian and Mexican citizens.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: FileText,
    title: "Other Visas",
    description: "L-1, E-2, and other visa categories tailored to your specific needs.",
    color: "bg-gray-100 text-gray-600"
  }
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Visa Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive immigration solutions tailored to your unique situation and goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 rounded-2xl overflow-hidden"
              >
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}