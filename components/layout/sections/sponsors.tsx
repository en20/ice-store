"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";

interface sponsorsProps {
  icon: string;
  name: string;
  color: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "Building2",
    name: "Construx",
    color: "bg-amber-500/10",
  },
  {
    icon: "Lightbulb",
    name: "LuminarDesign",
    color: "bg-blue-500/10",
  },
  {
    icon: "Hammer",
    name: "MateriaisNobres",
    color: "bg-emerald-500/10",
  },
  {
    icon: "PaintBucket",
    name: "ColorStudio",
    color: "bg-rose-500/10",
  },
  {
    icon: "Sofa",
    name: "MobíliaPlus",
    color: "bg-purple-500/10",
  },
  {
    icon: "TreePine",
    name: "PaisagemVerde",
    color: "bg-green-500/10",
  },
  {
    icon: "Pencil",
    name: "DesignMaster",
    color: "bg-orange-500/10",
  },
];

export const SponsorsSection = () => {
  return (
    <section
      id="sponsors"
      className="max-w-[75%] mx-auto py-24 sm:py-32 mt-12 sm:mt-20 border-t border-gray-800"
    >
      <div className="flex flex-col items-center mb-12">
        <span className="text-sm uppercase tracking-widest text-primary mb-2">
          Colaboração
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Parceiros de Confiança
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full"></div>
      </div>

      <div className="mx-auto bg-gray-900/40 rounded-xl py-10 px-4 backdrop-blur-sm border border-primary/10">
        <Marquee
          className="gap-[4rem]"
          fade
          innerClassName="gap-[4rem]"
          pauseOnHover
        >
          {sponsors.map(({ icon, name, color }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gray-800/60 p-3 rounded-lg mr-3 border border-white/5">
                <Icon
                  name={icon as keyof typeof icons}
                  size={28}
                  color="hsl(var(--primary))"
                  className="text-primary"
                />
              </div>
              <span className="text-gray-100">{name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
