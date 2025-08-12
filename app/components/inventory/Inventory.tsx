"use client";
import {
  Search,
  Filter,
  SlidersHorizontal,
  Car as CarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CarCard } from "@/components/ui/car-card";
import { Car } from "@/types/car";
import { mockCars } from "@/data/cars";
import { useState } from "react";

export default function InventorySection() {
  const [cars] = useState<Car[]>(mockCars);
  const [filteredCars, setFilteredCars] = useState<Car[]>(mockCars);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique brands for filter
  const brands = Array.from(new Set(cars.map((car) => car.brand))).sort();

  // Price ranges
  const priceRanges = [
    { label: "Under $25,000", value: "0-25000" },
    { label: "$25,000 - $35,000", value: "25000-35000" },
    { label: "$35,000 - $50,000", value: "35000-50000" },
    { label: "Over $50,000", value: "50000+" },
  ];

  // Year ranges
  const yearRanges = [
    { label: "2023-2024", value: "2023-2024" },
    { label: "2021-2022", value: "2021-2022" },
    { label: "2019-2020", value: "2019-2020" },
    { label: "Older than 2019", value: "0-2018" },
  ];

  // Filter logic
  const applyFilters = () => {
    let filtered = cars;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (car) =>
          car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Brand filter
    if (selectedBrand !== "all") {
      filtered = filtered.filter((car) => car.brand === selectedBrand);
    }

    // Price filter
    if (selectedPrice !== "all") {
      const [min, max] = selectedPrice
        .split("-")
        .map((p) => (p === "+" ? Infinity : parseInt(p)));
      filtered = filtered.filter((car) => {
        if (selectedPrice.includes("+")) {
          return car.price >= min;
        }
        return car.price >= min && car.price <= max;
      });
    }

    // Year filter
    if (selectedYear !== "all") {
      const [minYear, maxYear] = selectedYear
        .split("-")
        .map((y) => parseInt(y));
      filtered = filtered.filter((car) => {
        if (selectedYear.includes("+")) {
          return car.year >= minYear;
        }
        return car.year >= minYear && car.year <= maxYear;
      });
    }

    setFilteredCars(filtered);
  };

  // Apply filters when dependencies change
  useState(() => {
    applyFilters();
  });

  const handleViewDetails = (car: Car) => {
    console.log("View details for:", car.title);
    // TODO: Implement modal or navigation to detail page
  };

  const handleScheduleTestDrive = (car: Car) => {
    console.log("Schedule test drive for:", car.title);
    // TODO: Implement test drive scheduling
  };

  const handleContact = (car: Car) => {
    console.log("Contact about:", car.title);
    // TODO: Implement contact modal
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrand("all");
    setSelectedPrice("all");
    setSelectedYear("all");
    setFilteredCars(cars);
  };

  return (
    <section id="inventory" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-[var(--primary)] rounded-full text-sm font-medium">
            <CarIcon className="w-4 h-4 mr-2" />
            Our Inventory
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-automotive-dark">
            Browse Our Premium Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium vehicles. Each
            car is inspected, verified, and ready for its next adventure.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 mb-8">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search by make, model, or year..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                applyFilters();
              }}
              className="pl-10 h-12"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="bg-card p-6 rounded-lg shadow-card border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Brand
                  </label>
                  <Select
                    value={selectedBrand}
                    onValueChange={(value) => {
                      setSelectedBrand(value);
                      applyFilters();
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Brands" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Brands</SelectItem>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price Range
                  </label>
                  <Select
                    value={selectedPrice}
                    onValueChange={(value) => {
                      setSelectedPrice(value);
                      applyFilters();
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Price</SelectItem>
                      {priceRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Year</label>
                  <Select
                    value={selectedYear}
                    onValueChange={(value) => {
                      setSelectedYear(value);
                      applyFilters();
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Year</SelectItem>
                      {yearRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="w-full"
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-muted-foreground">
            Showing {filteredCars.length} of {cars.length} vehicles
          </div>
        </div>
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onViewDetails={handleViewDetails}
                onScheduleTestDrive={handleScheduleTestDrive}
                onContact={handleContact}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-muted-foreground text-lg mb-4">
              No vehicles found matching your criteria
            </div>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
