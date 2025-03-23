import { Building2, Mail, Phone, Clock, MapPin, ExternalLink, Instagram, Facebook, Twitter, Linkedin, Snowflake } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="relative py-24 sm:py-32 overflow-hidden bg-gray-900 text-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src="/ice-pattern.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-12 mb-16">
          {/* Logo and main info */}
          <div className="md:col-span-3 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-3">
                <div className="relative flex items-center">
                <Snowflake className="bg-[#111827]  rounded-lg w-9 h-9 mr-2  text-[#29ABE2]" />
                <span className="text-2xl font-light tracking-wider">
                  GELO<span className="font-bold text-[#29ABE2]">PREMIUM</span>
                </span>
              </div>
              </div>
            </Link>

            <p className="text-gray-400 max-w-md leading-relaxed text-sm">
              Fornecemos gelo de alta qualidade para eventos, bares, restaurantes e residências. 
              Nossa produção utiliza água purificada e processos rigorosos para garantir 
              um produto cristalino e sem impurezas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start text-sm">
                <MapPin className="text-[#29ABE2] h-4 w-4 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Rua do Gelo Cristalino, 123
                  <br />
                  Fortaleza, CE 60000-000
                </span>
              </div>

              <div className="flex items-start text-sm">
                <Phone className="text-[#29ABE2] h-4 w-4 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  +55 (85) 99112-4238
                </span>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-[#29ABE2] tracking-wider text-sm font-medium">
                NAVEGAÇÃO
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="#benefits"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Benefícios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Diferenciais
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Produtos
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#29ABE2] tracking-wider text-sm font-medium">
                PRODUTOS
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Gelo em Cubo
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Gelo em Escama
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Gelo em Bala
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Gelo em Bloco
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Esculturas de Gelo
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#29ABE2] tracking-wider text-sm font-medium">
                LEGAL
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors"
                  >
                    Política de Entrega
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#29ABE2] tracking-wider text-sm font-medium">
                SOCIAL
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors flex items-center"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors flex items-center"
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors flex items-center"
                  >
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors flex items-center"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter subscription */}
        <div className="border border-gray-800 p-6 rounded-lg mb-16 bg-gray-800/50 backdrop-blur-sm relative overflow-hidden">
          {/* Accent color top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#29ABE2]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-medium mb-1">
                Receba nossas ofertas
              </h3>
              <p className="text-sm text-gray-400">
                Inscreva-se para receber promoções e novidades sobre nossos produtos
              </p>
            </div>

            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="p-2.5 bg-transparent border border-gray-700 focus:border-[#29ABE2]/40 rounded-l-md w-full md:w-auto min-w-[240px] text-white"
              />
              <button className="bg-[#29ABE2] text-white px-4 py-2.5 rounded-r-md hover:bg-[#29ABE2]/90 transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and credits */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gelo Premium. Todos os
            direitos reservados.
          </div>

          <div className="text-sm text-gray-500 flex items-center">
            Desenvolvido por
            <a
              href="#"
              className="ml-1.5 text-[#29ABE2] hover:underline flex items-center"
            >
              SOLTECH <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
        
        {/* WhatsApp floating button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link 
            href="https://wa.me/5585991124238" 
            target="_blank"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};
