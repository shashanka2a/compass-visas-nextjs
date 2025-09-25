import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { MessageSquare, Target, FileCheck, PenTool, Eye, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "We assess your background and determine the best visa strategy for your goals."
  },
  {
    icon: Target,
    title: "Case Strategy",
    description: "Develop a comprehensive plan tailored to your specific circumstances and timeline."
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Gather and organize all required supporting documents and evidence."
  },
  {
    icon: PenTool,
    title: "Petition Preparation",
    description: "Draft and prepare your petition with compelling legal arguments."
  },
  {
    icon: Eye,
    title: "Review",
    description: "Thorough review and quality check before submission to ensure accuracy."
  },
  {
    icon: CheckCircle,
    title: "Approval",
    description: "Track your case and provide updates until you receive your visa approval."
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A clear, structured approach that has helped hundreds of professionals achieve their visa goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Process steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center text-white shadow-lg">
                      <span className="font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-[#2563EB]" />
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 mt-12 w-px h-8 bg-gray-200"></div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB3b3JrZXIlMjBkb2N1bWVudHMlMjB2aXNhfGVufDF8fHwxNzU4ODMxMDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional team working on visa applications"
                className="w-full h-[600px] object-cover"
                width={1080}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-2xl font-bold text-[#2563EB]">98%</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2563EB]">30</p>
                    <p className="text-sm text-gray-600">Days Average</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#2563EB]">24/7</p>
                    <p className="text-sm text-gray-600">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}