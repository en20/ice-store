"use client";
import { Building2, Grid2X2, Menu, X, ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#produtos",
    label: "Produtos",
  },
  {
    href: "#benefits",
    label: "Diferenciais",
  },
  {
    href: "#features",
    label: "Por Que Nós",
  },
  {
    href: "#contact",
    label: "Pedidos",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Design Inovador",
    description:
      "Criamos espaços únicos que combinam estética, funcionalidade e inovação.",
  },
  {
    title: "Sustentabilidade",
    description:
      "Projetos comprometidos com práticas sustentáveis e eficiência energética.",
  },
  {
    title: "Experiência Personalizada",
    description:
      "Cada projeto é desenvolvido com base nas necessidades e visão específicas do cliente.",
  },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`static top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm py-3' 
        : 'bg-white dark:bg-gray-900 py-5'
    }`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo with image and text */}
          <Link href="/" className="flex items-center group">
            <div className="relative p-1.5 bg-white dark:bg-gray-900 rounded-lg border-2 border-[#29ABE2]/20 group-hover:border-[#29ABE2]/50 transition-all duration-300 mr-3">
              <Image 
                src="/pescgelo.jpg" 
                alt="PescGelo" 
                width={100} 
                height={100} 
                className="w-20 h-20 group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#29ABE2]"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#29ABE2]"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-light tracking-wider text-gray-900 dark:text-white">
                PESC<span className="font-bold text-[#29ABE2]">GELO</span>
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 tracking-wider">SUA MARCA DE GELO ESCAMA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="#produto">Produtos</NavLink>
            <NavLink href="#benefits">Diferenciais</NavLink>
            <NavLink href="#about">Quem Somos</NavLink>
            <NavLink href="#testimonials">Depoimentos</NavLink>
            <NavLink href="#contact">Contato</NavLink>
            
            <div className="ml-4 flex items-center">
              <Link href="https://wa.me/5585984353984?text=Olá! Gostaria de fazer um pedido de gelo em escama.">
                <Button className="bg-[#29ABE2] hover:bg-[#29ABE2]/90 text-white rounded-lg px-6 py-6 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#29ABE2]/20 flex items-center gap-2 group">
                  <ShoppingCart className="group-hover:scale-110 transition-transform" />
                  <span>Pedido Online</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="block md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800">
                <div className="flex flex-col h-full">
                  <div className="flex-1 py-6 px-2">
                    <div className="mb-8 flex items-center">
                      <Image 
                        src="/pescgelo.jpg" 
                        alt="PescGelo" 
                        width={40} 
                        height={40} 
                        className="h-16 w-16 mr-2" 
                      />
                      <span className="text-xl font-light text-gray-900 dark:text-white">
                        PESC<span className="font-bold text-[#29ABE2]">GELO</span>
                      </span>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <MobileNavLink href="#produto" closeMenu={() => setMobileMenuOpen(false)}>Produtos</MobileNavLink>
                      <MobileNavLink href="#benefits" closeMenu={() => setMobileMenuOpen(false)}>Diferenciais</MobileNavLink>
                      <MobileNavLink href="#about" closeMenu={() => setMobileMenuOpen(false)}>Quem Somos</MobileNavLink>
                      <MobileNavLink href="#testimonials" closeMenu={() => setMobileMenuOpen(false)}>Depoimentos</MobileNavLink>
                      <MobileNavLink href="#contact" closeMenu={() => setMobileMenuOpen(false)}>Contato</MobileNavLink>
                      <MobileNavLink href="#faq" closeMenu={() => setMobileMenuOpen(false)}>FAQ</MobileNavLink>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                    <Link href="https://wa.me/5585984353984?text=Olá! Gostaria de fazer um pedido de gelo em escama." onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-[#29ABE2] hover:bg-[#29ABE2]/90 text-white rounded-lg py-5 font-medium transition-all flex items-center justify-center gap-2">
                        <ShoppingCart className="h-5 w-5" />
                        <span>Pedido Online</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="relative px-4 py-3 text-gray-700 dark:text-gray-300 font-medium hover:text-[#29ABE2] dark:hover:text-[#29ABE2] transition-colors group"
    >
      {children}
      <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#29ABE2] group-hover:w-2/3 group-hover:left-[15%] transition-all duration-300"></span>
    </Link>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  closeMenu 
}: { 
  href: string; 
  children: React.ReactNode;
  closeMenu: () => void;
}) => {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg hover:text-[#29ABE2] dark:hover:text-[#29ABE2] transition-all"
      onClick={() => {
        closeMenu();
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }}
    >
      {children}
    </Link>
  );
};
