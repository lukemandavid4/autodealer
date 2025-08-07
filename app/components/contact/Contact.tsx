"use client";
import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockCars } from "@/data/cars";
import { ContactFormData } from "@/types/car";

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    interestedCar: "",
    preferredContact: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // toast({
    //   title: "Message Sent!",
    //   description: "Thank you for your interest. We'll contact you within 24 hours.",
    // });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interestedCar: "",
      preferredContact: "email",
    });

    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(555) 123-4567",
      description: "Mon-Sat 9AM-7PM, Sun 11AM-5PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "sales@autodealerpro.com",
      description: "We reply within 2 hours",
    },
    {
      icon: MapPin,
      title: "Visit Showroom",
      details: "123 Auto Plaza, City, ST 12345",
      description: "Free parking available",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 9AM-7PM",
      description: "Sunday: 11AM-5PM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-automotive-dark">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to find your dream car? Contact our expert team for
            personalized assistance, financing options, and exclusive deals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-automotive-dark mb-6">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-automotive-dark">
                      {info.title}
                    </h4>
                    <p className="text-automotive-dark font-medium">
                      {info.details}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="mt-8">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">
                      123 Auto Plaza, City, ST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-automotive-dark">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Car Interest */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Interested Vehicle
                      </label>
                      <Select
                        value={formData.interestedCar}
                        onValueChange={(value) =>
                          handleInputChange("interestedCar", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No specific car</SelectItem>
                          {mockCars.map((car) => (
                            <SelectItem key={car.id} value={car.id}>
                              {car.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Preferred Contact Method
                      </label>
                      <Select
                        value={formData.preferredContact}
                        onValueChange={(
                          value: "phone" | "email" | "whatsapp"
                        ) => handleInputChange("preferredContact", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us about your car preferences, budget, or any specific questions..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-hero text-lg py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
