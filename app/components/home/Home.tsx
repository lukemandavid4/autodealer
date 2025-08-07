import React from "react";
import Image from "next/image";
import { ArrowRight, Play, Star, Users, Car } from "lucide-react";

function Home() {
  const stats = [
    { icon: Car, value: "500+", label: "Vehicles Available" },
    { icon: Users, value: "10K+", label: "Happy Customers" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ];

  return (
    <div>
      <div className="min-h-screen flex items-center overflow-hidden container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-[var(--primary)] rounded-full text-sm font-medium text-white">
              <Star className="w-4 h-4 mr-2" />
              #1 Trusted Car Dealer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--automotive-dark)] leading-tight">
              Find Your
              <span className="text-[var(--primary)]"> Dream Car</span>
              <br />
              Today
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl">
              Discover premium vehicles with transparent pricing, comprehensive
              warranties, and exceptional customer service. Your perfect car is
              just a click away.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="flex items-center cursor-pointer text-white h-11 rounded-md bg-[var(--primary)] transition-all duration-300 text-lg px-8">
              Browse Inventory
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <div className="bg-blue-200 p-2 rounded-lg">
                    <stat.icon className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-automotive-dark">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img
              src="img"
              alt="Luxury car showcase"
              className="w-full h-auto object-cover"
            />

            {/* Floating Elements */}
            <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-card">
              <div className="text-sm text-muted-foreground">Starting from</div>
              <div className="text-2xl font-bold text-automotive-dark">
                $24,500
              </div>
            </div>

            <div className="absolute bottom-6 left-6 bg-accent text-accent-foreground rounded-xl px-4 py-2 shadow-premium">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse"></div>
                <span className="font-medium">Live Inventory Updates</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-hero rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-premium rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
