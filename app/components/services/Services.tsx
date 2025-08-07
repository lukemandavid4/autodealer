import { Wrench, Shield, Clock, Award, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Expert Auto Repairs",
      description:
        "Complete automotive repair services from routine maintenance to complex engine work.",
      features: [
        "Engine diagnostics & repair",
        "Brake system service",
        "Transmission repair",
        "AC & heating systems",
        "Electrical system repair",
      ],
    },
    {
      icon: Shield,
      title: "Preventive Maintenance",
      description:
        "Keep your vehicle running smoothly with our comprehensive maintenance packages.",
      features: [
        "Oil changes & fluid checks",
        "Tire rotation & alignment",
        "Battery testing & replacement",
        "Filter replacements",
        "Multi-point inspections",
      ],
    },
    {
      icon: Clock,
      title: "Quick Service",
      description:
        "Fast, reliable service to get you back on the road quickly.",
      features: [
        "Same-day service available",
        "While-you-wait repairs",
        "Free shuttle service",
        "Loaner vehicles available",
        "Online appointment booking",
      ],
    },
    {
      icon: Award,
      title: "Certified Technicians",
      description:
        "ASE-certified technicians with years of experience and ongoing training.",
      features: [
        "Factory-trained experts",
        "Latest diagnostic equipment",
        "Genuine parts & warranties",
        "Quality guarantee",
        "Transparent pricing",
      ],
    },
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Cars Repaired" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Emergency Service" },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Wrench className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-automotive-dark">
            Professional Auto Repair Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond selling quality vehicles, we provide comprehensive automotive
            repair and maintenance services to keep your car running at its
            best.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-card border-0 hover:shadow-elegant transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-automotive-dark">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Guarantee */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-automotive-gold mr-2" />
                <h3 className="text-2xl font-bold text-automotive-dark">
                  Our Service Guarantee
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                We stand behind our work with comprehensive warranties and a
                commitment to customer satisfaction. Your vehicle is in expert
                hands.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>12-month/12,000-mile warranty on repairs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Free diagnostic with any repair</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Upfront pricing with no hidden fees</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Genuine OEM parts when available</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-background rounded-xl p-8 shadow-card">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground mb-4">
                  Customer Satisfaction Rate
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-automotive-gold fill-current"
                    />
                  ))}
                </div>
                <Button className="w-full bg-[var(--primary)]">
                  Schedule Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
