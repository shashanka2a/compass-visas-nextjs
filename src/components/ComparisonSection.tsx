import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Staff That Matters",
    compass: true,
    others: false,
    description: "Experienced immigration attorneys and specialists"
  },
  {
    feature: "100% approval rate with O-1s for founders",
    compass: true,
    others: false,
    description: "Proven track record with entrepreneur visas"
  },
  {
    feature: "Legal representation from an immigration attorney",
    compass: true,
    others: false,
    description: "Direct attorney involvement throughout the process"
  },
  {
    feature: "Same-day callback another law firm",
    compass: true,
    others: false,
    description: "Immediate response and communication"
  },
  {
    feature: "10 years of experience supporting startups",
    compass: true,
    others: false,
    description: "Deep understanding of startup ecosystem needs"
  },
  {
    feature: "Have helped thousands of companies and applicants",
    compass: true,
    others: false,
    description: "Extensive experience across diverse cases"
  }
];

export function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Us Against The Industry</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here&apos;s why thousands of professionals choose Compass for their immigration needs.
          </p>
        </div>
        
        <Card className="rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[#2563EB] to-blue-600 text-white p-0">
            <div className="grid grid-cols-3 p-6">
              <div></div>
              <CardTitle className="text-center text-xl">Compass</CardTitle>
              <CardTitle className="text-center text-xl">Others</CardTitle>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            {comparisonData.map((item, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 items-center p-6 border-b border-gray-100 ${
                  index % 2 === 0 ? 'bg-gray-50/30' : 'bg-white'
                } hover:bg-blue-50/30 transition-colors`}
              >
                <div className="pr-6">
                  <p className="font-semibold text-gray-900 mb-1">{item.feature}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                
                <div className="flex justify-center">
                  {item.compass ? (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                  )}
                </div>
                
                <div className="flex justify-center">
                  {item.others ? (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}