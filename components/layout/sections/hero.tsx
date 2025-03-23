"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';

export const HeroSection = () => {
  const { theme } = useTheme();

  // Usando imagens locais da pasta public (sem incluir /public no caminho)
  const imagePath =
    theme === "light"
      ? "/arqui.png" // Removido o /public do caminho
      : "/arqui.png"; // Removido o /public do caminho

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Imagem de fundo em tela cheia */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={imagePath}
          alt="Projeto arquitetônico"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay escuro para melhorar legibilidade */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Grid decorativo - elemento visual de arquitetura */}
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

      {/* Conteúdo principal */}
      <div className="relative z-20 container mx-auto h-full">
        <div className="flex flex-col h-full justify-center md:items-start md:max-w-2xl text-white">
          <div className="space-y-4">
            {/* Linha decorativa e descrição */}
            <div className="flex items-center space-x-4">
              <div className="h-px w-16 bg-white/60"></div>
              <span className="text-white/80 uppercase tracking-widest text-sm font-light">
                Estúdio de Arquitetura
              </span>
            </div>

            {/* Título principal */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              <span className="block">Design </span>
              <span className="block">que </span>
              <span className="block relative">
                inspira
                <svg
                  className="absolute -bottom-4 -left-20 w-full md:-left-56"
                  height="8"
                  viewBox="0 0 200 8"
                >
                  <path
                    d="M1 4.5C50 2.5 100 2.5 199 6.5"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Descrição */}
            <p className="text-xl text-white/80 my-6 font-light leading-relaxed">
              Criamos espaços que transcendem a funcionalidade para se tornarem
              expressões artísticas que dialogam com seu entorno e propósito.
            </p>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-normal rounded-none px-8 group"
              >
                Nossos projetos
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black bg-white border-2 font-normal rounded-none px-8 transition-colors"
              >
                Entre em contato
              </Button>
            </div>
          </div>
        </div>

        {/* Indicador de rolagem */}
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
