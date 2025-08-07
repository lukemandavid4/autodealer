import { useState } from "react";
import {
  Heart,
  Eye,
  Calendar,
  Fuel,
  Gauge,
  Settings,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Car } from "@/types/car";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
  onScheduleTestDrive: (car: Car) => void;
  onContact: (car: Car) => void;
}

export function CarCard({
  car,
  onViewDetails,
  onScheduleTestDrive,
  onContact,
}: CarCardProps) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-US").format(mileage);
  };

  const getStatusColor = (status: Car["status"]) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 border-green-200";
      case "Reserved":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Sold":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Placeholder while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <div className="text-muted-foreground">Loading...</div>
          </div>
        )}

        <img
          src={car.image}
          alt={car.title}
          className={cn(
            "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <Button
              size="sm"
              variant="secondary"
              className="bg-background/95 backdrop-blur-sm"
              onClick={() => router.push(`/car/${car.id}`)}
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={getStatusColor(car.status)}>{car.status}</Badge>
        </div>

        {/* Featured Badge */}
        {car.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-premium text-accent-foreground shadow-premium">
              Featured
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Title and Price */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-automotive-dark group-hover:text-primary transition-colors">
            {car.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              {formatPrice(car.price)}
            </span>
            <span className="text-sm text-muted-foreground">
              {car.year} • {formatMileage(car.specifications.mileage)} miles
            </span>
          </div>
        </div>

        {/* Key Specs */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Fuel className="w-4 h-4" />
            <span>{car.specifications.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Settings className="w-4 h-4" />
            <span>{car.specifications.transmission}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Gauge className="w-4 h-4" />
            <span>{car.specifications.engineCapacity}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{car.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2">
          {car.description}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex flex-col space-y-3">
        {/* Primary Actions */}
        <div className="flex space-x-2 w-full">
          <Button
            className="flex-1 bg-[var(--primary)]"
            onClick={() => onScheduleTestDrive(car)}
            disabled={car.status === "Sold"}
          >
            Schedule Test Drive
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
