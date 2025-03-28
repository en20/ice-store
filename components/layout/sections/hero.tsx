"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Snowflake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and when window resizes
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Select appropriate image based on screen size only
  const imagePath = isMobile ? "/gelo-mobile.jpg" : "/gelo.jpg";

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Full screen background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={imagePath}
          alt="Gelo cristalino e refrescante"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Decorative grid - visual element */}
      <div className="absolute inset-0 z-10">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-8">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border-l border-white/10 h-full"></div>
            ))}
        </div>
        <div className="w-full h-full grid grid-rows-4 md:grid-rows-8">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border-t border-white/10 w-full"></div>
            ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 container mx-auto h-full">
        <div className="flex flex-col h-full justify-center md:items-start md:max-w-2xl text-white">
          <div className="space-y-4">
            {/* Decorative line and snowflake logo */}
            <div className="flex items-center space-x-4">
              <div className="h-px w-16 bg-white/60"></div>
              <span className="text-white/80 uppercase tracking-widest text-sm font-light flex items-center">
                <Snowflake className="size-4 mr-2" /> Fabrica de Gelo Premium
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              <span className="block">Gelo </span>
              <span className="block">puro e </span>
              <span className="block relative">
                cristalino
                <svg
                  className="absolute -bottom-4 -left-20 w-full md:-left-56"
                  height="8"
                  viewBox="0 0 200 8"
                >
                  <path
                    d="M1 4.5C50 2.5 100 2.5 199 6.5"
                    stroke="#29ABE2"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-white/80 my-6 font-light leading-relaxed">
              Oferecemos gelo de alta qualidade para eventos, bares, restaurantes e 
              uso doméstico com entrega rápida diretamente para você.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="bg-white text-[#29ABE2] hover:bg-white/90 font-medium rounded-md px-8 group"
                asChild
              >
                <Link href="#produtos">
                  Nossos produtos
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent border hover:bg-white hover:text-[#29ABE2] font-medium rounded-md px-8 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg group"
                asChild
              >
                <Link href="https://wa.me/5585991124238">
                  Faça seu pedido
                  <ArrowRight className="ml-2 size-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-white/70 text-sm tracking-widest uppercase mb-2">
            Explore
          </span>
          <ArrowDown className="text-white animate-bounce size-5" />
        </div>
      </div>
    </section>
  );
};
