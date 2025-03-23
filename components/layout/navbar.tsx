"use client";
import { Building2, Grid2X2, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
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
import { ToggleTheme } from "./toogle-theme";

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
    href: "#portfolio",
    label: "Portfolio",
  },
  {
    href: "#services",
    label: "Serviços",
  },
  {
    href: "#about",
    label: "Sobre",
  },
  {
    href: "#contact",
    label: "Contato",
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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-40 border-b border-secondary bg-card shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg flex items-center">
          <Building2 className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
          ARCHSTUDIO
        </Link>

        {/* <!-- Mobile --> */}
        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer lg:hidden"
              />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-between bg-card border-secondary"
            >
              <div>
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle className="flex items-center">
                    <Link href="/" className="flex items-center">
                      <Building2 className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                      ArchStudio
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2">
                  {routeList.map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-base"
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </div>
              </div>

              <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                <Separator className="mb-2" />

                <ToggleTheme />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* <!-- Desktop --> */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            href="#portfolio"
            className="text-base hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#services"
            className="text-base hover:text-primary transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#about"
            className="text-base hover:text-primary transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#contact"
            className="text-base hover:text-primary transition-colors"
          >
            Contato
          </Link>

          <div className="pl-4 border-l border-muted">
            <ToggleTheme />
          </div>
        </nav>
      </div>
    </header>
  );
};
