"use client";

import { useState } from "react";
import {
  Eye,
  Fuel,
  Gauge,
  Settings,
  Calendar as CalendarIcon, // Icon
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar"; // UI date picker
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Car } from "@/types/car";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { format } from "date-fns";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [demoDate, setDemoDate] = useState<Date | undefined>(undefined);
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [bookedInfo, setBookedInfo] = useState<{
    date: Date;
    time: string;
  } | null>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);

  const formatMileage = (mileage: number) =>
    new Intl.NumberFormat("en-US").format(mileage);

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
    <Card className="group transition-all duration-300 bg-gradient-card border overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_4px_#0ff,0_0_8px_#0ff]">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
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
        {/* Overlay */}
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
        {/* Title & Price */}
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
            <CalendarIcon className="w-4 h-4" />
            <span>{car.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2">
          {car.description}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex flex-col space-y-3">
        {/* Book a Demo */}
        <div className="flex space-x-2 w-full">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="flex-1 bg-[var(--primary)]"
                disabled={car.status === "Sold"}
              >
                Book a Demo
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={demoDate}
                onSelect={(date) => {
                  setDemoDate(date);
                  if (date) {
                    setIsDemoDialogOpen(true);
                  }
                }}
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Booking Info */}
        {bookedInfo && (
          <div className="text-xs text-[var(--muted-foreground)]">
            Demo booked on {format(bookedInfo.date, "PP")} at {bookedInfo.time}
          </div>
        )}
      </CardFooter>

      {/* Dialog */}
      <Dialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book a Demo</DialogTitle>
            <DialogDescription>
              {demoDate
                ? `Selected date: ${format(demoDate, "PP")}`
                : "Choose a date to continue"}
            </DialogDescription>
          </DialogHeader>

          {/* Form */}
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full name</label>
                <Input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0730001234"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Preferred time</label>
                <Input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Notes (optional)</label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Anything we should prepare?"
              />
            </div>
          </div>

          {/* Actions */}
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() => setIsDemoDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (!demoDate) {
                  toast.error("Please select a date for the demo.");
                  return;
                }
                if (!fullName || !email || !phone || !time) {
                  toast.error(
                    "Please fill name, email, phone, and preferred time."
                  );
                  return;
                }
                setBookedInfo({ date: demoDate, time });
                setIsDemoDialogOpen(false);
                toast.success(
                  `We’ll contact you to confirm ${format(
                    demoDate,
                    "PP"
                  )} at ${time}.`
                );
                setFullName("");
                setEmail("");
                setPhone("");
                setTime("");
                setNotes("");
              }}
              className="bg-[var(--primary)] "
            >
              Confirm Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
