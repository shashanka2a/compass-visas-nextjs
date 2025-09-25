import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50/30 to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 border-green-200">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              100% success rate with O-1s for founders
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Navigate Your <span className="text-[#2563EB]">Visa Options</span><br />
                With Compass
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Visa and green card support for founders, investors, builders, researchers, 
                and extraordinary people in business and tech.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Explore Your Options
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-8 py-4 rounded-xl transition-all"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMGRvY3VtZW50cyUyMHRyYXZlbCUyMmltbWlncmF0aW9ufGVufDF8fHwxNzU4ODMxMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional visa and immigration services"
                className="w-full h-[500px] object-cover"
                width={1080}
                height={500}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Visas Approved</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-sm">🌍</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}