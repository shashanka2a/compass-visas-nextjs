import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Lock, UserCheck } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Start Your Visa Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get a free consultation and discover the best visa pathway for your unique situation.
          </p>
        </div>
        
        <Card className="rounded-2xl shadow-xl border border-gray-100">
          <CardHeader className="text-center space-y-2 pb-8">
            <CardTitle className="text-2xl text-gray-900">Free Consultation Request</CardTitle>
            <CardDescription className="text-gray-600">
              Tell us about your situation and we&apos;ll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="rounded-lg border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="rounded-lg border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-lg border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="rounded-lg border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="visaType">Visa Type of Interest</Label>
                <Select>
                  <SelectTrigger className="rounded-lg border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB]">
                    <SelectValue placeholder="Select a visa type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="o1">O-1 Visa</SelectItem>
                    <SelectItem value="eb1">EB-1 Visa</SelectItem>
                    <SelectItem value="niw">NIW (National Interest Waiver)</SelectItem>
                    <SelectItem value="h1b">H-1B Visa</SelectItem>
                    <SelectItem value="tn">TN Visa</SelectItem>
                    <SelectItem value="other">Other / Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Tell Us About Your Situation</Label>
                <Textarea
                  id="message"
                  placeholder="Briefly describe your background, goals, and any specific questions you have..."
                  rows={4}
                  className="rounded-lg border-gray-200 focus:border-[#2563EB] focus:ring-[#2563EB] resize-none"
                />
              </div>
              
              <Button 
                className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                size="lg"
              >
                Request Free Consultation
              </Button>
            </form>
            
            {/* Trust badges */}
            <div className="pt-8 border-t border-gray-100">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Secure Form</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span>Privacy Protected</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <UserCheck className="w-4 h-4 text-green-600" />
                  <span>Lawyer-Backed</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}