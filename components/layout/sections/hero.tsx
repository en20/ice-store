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
  const imagePath = isMobile ? "/HERO-IMAGE.png" : "/HERO-IMAGE.png";

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Full screen background image */}
      <div className="absolute inset-0 w-full md:h-full h-[500px] z-0">
        <Image
          src={imagePath}
          alt="Gelo em escama de alta qualidade"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-blue-400/50 z-10"></div>
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
        <div className="flex flex-col h-full justify-center md:items-start md:max-w-2xl text-[#0a2463]">
          <div className="space-y-4">
            {/* Decorative line and snowflake logo */}
            <div className="flex items-center space-x-4">
              <div className="h-px w-16 bg-[#0a2463]/60"></div>
              <span className="text-[#0a2463] uppercase tracking-widest text-sm font-light flex items-center">
                <Snowflake className="size-4 mr-2" /> Fabrica de Gelo Premium
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="block text-[#0a2463] drop-shadow-md px-3 rounded-md backdrop-blur-sm">GELO EM ESCAMA</span>
              <span className="block relative text-[#0a2463] drop-shadow-md px-3 rounded-md backdrop-blur-sm">
                Preço baixo, alta qualidade
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
            <p className="text-md text-[#0a2463] my-6 font-medium leading-relaxed">
              A Pescgelo é sua especialista em Gelo em Escama em Maracanaú. Ideal para 
              conservação superior de pescados, bebidas e eventos. Garantimos o melhor negócio: 
              <span className="block mt-2 py-1 px-3 text-lg font-bold text-[#0a2463] bg-white/30 rounded-md border border-[#29ABE2]/30 inline-flex items-center transform hover:scale-105 transition-all">
                <Snowflake className="size-4 mr-2" /> COBRIMOS QUALQUER ORÇAMENTO
              </span>
              <span className="block mt-2 text-md italic">(Serviço exclusivo para retirada no local)</span>
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 z-50">
              <Button
                size="lg"
                className="bg-white text-[#29ABE2] hover:bg-white/90 font-medium rounded-md px-8 group"
                asChild
              >
                <Link href="https://wa.me/5585991124238">
                  Solicite seu Orçamento via WhatsApp
                  <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#0a2463] text-[#0a2463] bg-transparent border hover:bg-[#0a2463] hover:text-white font-medium rounded-md px-8 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg group"
                asChild
              >
                <Link href="#produto">
                  Conheça as Vantagens do Gelo em Escama
                  <ArrowRight className="ml-2 size-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator - bottom centered */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity z-30">
          <Link href="#produto" className="text-center  px-4 py-2 rounded-full backdrop-blur-sm   transition-all duration-300">
            <span className="text-[#0a2463] text-sm tracking-widest uppercase font-medium block">
              Explore
            </span>
            <ArrowDown className="text-[#0a2463] animate-bounce size-5 mx-auto mt-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
