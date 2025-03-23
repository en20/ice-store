import { Separator } from "@/components/ui/separator";
import {
  Building2,
  Mail,
  Phone,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="relative py-24 sm:py-32 overflow-hidden bg-black/5 dark:bg-white/5"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-primary/10"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full border-r border-primary/5 -z-10" />
      <div className="absolute top-0 left-1/3 w-1/3 h-full border-r border-primary/5 -z-10" />
      <div className="absolute top-0 left-2/3 w-1/3 h-full border-r border-primary/5 -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-12 mb-16">
          {/* Logo and main info */}
          <div className="md:col-span-3 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 relative border border-primary/30">
                  {/* Logo placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-primary"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-primary"></div>
                </div>
                <span className="text-2xl font-light tracking-wider">
                  STUDIO
                  <span className="font-bold text-primary">ARQUITETURA</span>
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground max-w-md leading-relaxed text-sm">
              Transformamos visões em espaços que inspiram. Nosso estúdio de
              arquitetura combina estética, funcionalidade e sustentabilidade
              para criar projetos únicos que atendam às necessidades dos nossos
              clientes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start text-sm">
                <MapPin className="text-primary h-4 w-4 mr-2 mt-0.5" />
                <span className="text-muted-foreground">
                  Avenida Paulista, 1578
                  <br />
                  São Paulo, SP 01310-200
                </span>
              </div>

              <div className="flex items-start text-sm">
                <Phone className="text-primary h-4 w-4 mr-2 mt-0.5" />
                <span className="text-muted-foreground">
                  +55 (11) 3456-7890
                </span>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-primary tracking-wider text-sm font-medium">
                NAVEGAÇÃO
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Portfólio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-primary tracking-wider text-sm font-medium">
                SERVIÇOS
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Projetos Residenciais
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Projetos Comerciais
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Design de Interiores
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Retrofit e Reformas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Arquitetura Sustentável
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-primary tracking-wider text-sm font-medium">
                LEGAL
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-primary tracking-wider text-sm font-medium">
                SOCIAL
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors flex items-center"
                  >
                    Instagram
                    <ExternalLink className="ml-1.5 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors flex items-center"
                  >
                    LinkedIn
                    <ExternalLink className="ml-1.5 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors flex items-center"
                  >
                    Pinterest
                    <ExternalLink className="ml-1.5 h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:text-primary transition-colors flex items-center"
                  >
                    Behance
                    <ExternalLink className="ml-1.5 h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter subscription - optional */}
        <div className="border border-primary/10 p-6 rounded-sm mb-16 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-medium mb-1 font-serif">
                Inscreva-se em nossa newsletter
              </h3>
              <p className="text-sm text-muted-foreground">
                Receba novidades, projetos e inspirações em arquitetura
              </p>
            </div>

            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="p-2.5 bg-transparent border border-primary/20 focus:border-primary/40 rounded-sm w-full md:w-auto min-w-[240px]"
              />
              <button className="bg-primary text-white px-4 py-2.5 rounded-sm ml-2 hover:bg-primary/90 transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and credits */}
        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Studio Arquitetura. Todos os
            direitos reservados.
          </div>

          <div className="text-sm text-muted-foreground flex items-center">
            Designed & Developed by
            <Link
              href="https://github.com/en20"
              target="_blank"
              className="ml-1.5 text-primary hover:underline flex items-center"
            >
              Enzo Lozano <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Optional measuring line decoration */}
        <div className="w-full h-12 relative mt-20">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/10"></div>
          <div className="absolute top-0 left-1/4 h-3 w-[1px] bg-primary/30"></div>
          <div className="absolute top-0 left-2/4 h-3 w-[1px] bg-primary/30"></div>
          <div className="absolute top-0 left-3/4 h-3 w-[1px] bg-primary/30"></div>
        </div>
      </div>
    </footer>
  );
};
