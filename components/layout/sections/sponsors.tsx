"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
import Image from "next/image";

interface sponsorsProps {
  icon: string;
  name: string;
  color: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "Beer",
    name: "Cervejaria Premium",
    color: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    icon: "Wine",
    name: "Adega Central",
    color: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    icon: "UtensilsCrossed",
    name: "Restaurant Supply",
    color: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    icon: "Martini",
    name: "Premium Drinks",
    color: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    icon: "Warehouse",
    name: "Cold Storage Inc.",
    color: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    icon: "Droplets",
    name: "Água Pura",
    color: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    icon: "PartyPopper",
    name: "Festa Express",
    color: "bg-blue-50 dark:bg-blue-900/10",
  },
];

export const SponsorsSection = () => {
  return (
    <section
      id="parceiros"
      className="relative py-16 sm:py-24 mt-12 overflow-hidden bg-gray-50 dark:bg-gray-900/50"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <Image
          src="/ice-pattern.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-[#29ABE2] uppercase tracking-wider mb-2">
            Parcerias
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-[#29ABE2]">Parceiros de Confiança</span>
          </h3>
          <div className="w-24 h-1 bg-[#29ABE2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Trabalhamos com as melhores empresas do mercado para garantir a qualidade dos nossos produtos e serviços.
          </p>
        </div>

        <div className="mx-auto bg-white dark:bg-gray-800 rounded-lg py-10 px-6 shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#29ABE2]"></div>
          
          <Marquee
            className="gap-[3rem]"
            fade
            innerClassName="gap-[3rem]"
            pauseOnHover
          >
            {sponsors.map(({ icon, name, color }) => (
              <div
                key={name}
                className="flex items-center text-lg md:text-xl font-medium transition-all duration-300 hover:scale-105 group"
              >
                <div className={`${color} p-3 rounded-lg mr-3 border border-[#29ABE2]/10 group-hover:border-[#29ABE2]/30 transition-colors`}>
                  <Icon
                    color="#29ABE2"
                    name={icon as keyof typeof icons}
                    size={24}
                    className="text-[#29ABE2]"
                  />
                </div>
                <span className="text-gray-700 dark:text-gray-200 group-hover:text-[#29ABE2] transition-colors">{name}</span>
              </div>
            ))}
          </Marquee>
        </div>
        
        {/* Partner with us callout */}
        <div className="mt-12 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-2">
            Interessado em se tornar um parceiro da GeloPremium?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-[#29ABE2] font-medium hover:underline"
          >
            Entre em contato conosco
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1 group-hover:translate-x-1 transition-transform"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
