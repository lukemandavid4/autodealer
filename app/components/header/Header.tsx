import Link from "next/link";
import React from "react";
import { Menu, X, Car, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Inventory", href: "#inventory" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-white shadow-sm border-b-[var(--border)] sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <Link href="" className="flex gap-2 items-center">
            <span className="bg-[var(--primary)] p-2 rounded-[0.3rem]">
              <Car className="w-6 h-6 text-white" />
            </span>
            <span className="text-[1.3rem] font-semibold">AutoDealer Pro</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-black hover:text-[var(--primary)] transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <Link
            href=""
            className="flex items-center gap-6 bg-[var(--primary)] text-white p-2 rounded-[0.3rem] font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
