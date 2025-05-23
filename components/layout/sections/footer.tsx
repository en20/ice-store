import { Phone, Mail, Instagram, ExternalLink, MapPin, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative py-16 sm:py-24 overflow-hidden bg-gray-900 text-white"
    >
      {/* Background decorative elements - adding pointer-events-none to fix click issues */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <Image
          src="/ice-pattern.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Logo and main info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center group">
                <div className="relative p-1.5 bg-gray-900 rounded-lg border-2 border-[#29ABE2]/20 group-hover:border-[#29ABE2]/50 transition-all duration-300 mr-3">
                  <Image 
                    src="/pescgelo.jpg" 
                    alt="PescGelo" 
                    width={50} 
                    height={50} 
                    className="w-14 h-14 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#29ABE2]"></div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#29ABE2]"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-light tracking-wider text-white">
                    PESC<span className="font-bold text-[#29ABE2]">GELO</span>
                  </span>
                  <span className="text-xs text-gray-400 tracking-wider">SUA MARCA DE GELO ESCAMA</span>
                </div>
              </div>
            </Link>

            <p className="text-gray-400 max-w-md leading-relaxed text-sm select-text">
              Fornecemos gelo em escama de alta qualidade para peixarias, embarcações, 
              indústrias e outros segmentos que necessitam de conservação refrigerada.
              Nosso produto é fabricado com água tratada e processos que garantem qualidade superior.
            </p>
          </div>

          {/* Navigation and Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-[#29ABE2] tracking-wider text-sm font-medium mb-4">
                  NAVEGAÇÃO
                </h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors cursor-pointer"
                    >
                      Início
                    </Link>
                  </li>
                  <li className="text-gray-600">|</li>
                  <li>
                    <Link
                      href="/#product"
                      className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors cursor-pointer"
                    >
                      Gelo em Escama
                    </Link>
                  </li>
                  <li className="text-gray-600">|</li>
                  <li>
                    <Link
                      href="/#about"
                      className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors cursor-pointer"
                    >
                      Sobre Nós
                    </Link>
                  </li>
                  <li className="text-gray-600">|</li>
                  <li>
                    <Link
                      href="/#contact"
                      className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors cursor-pointer"
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-[#29ABE2] tracking-wider text-sm font-medium mb-4">
                  CONTATO RÁPIDO
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="tel:+5585984353984"
                      className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors flex items-center cursor-pointer"
                    >
                      <Phone className="text-[#29ABE2] h-4 w-4 mr-2" />
                      <span className="select-text">(85) 98435-3984</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:pescgelo@gmail.com"
                      className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors flex items-center cursor-pointer"
                    >
                      <Mail className="text-[#29ABE2] h-4 w-4 mr-2" />
                      <span className="select-text">pescgelo@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://instagram.com/pescgelo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors flex items-center cursor-pointer"
                    >
                      <Instagram className="text-[#29ABE2] h-4 w-4 mr-2" />
                      <span className="select-text">@pescgelo</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://facebook.com/pescgelo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-[#29ABE2] transition-colors flex items-center cursor-pointer"
                    >
                      <Facebook className="text-[#29ABE2] h-4 w-4 mr-2" />
                      <span className="select-text">Pescgelo</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0 select-text">
            &copy; {currentYear} Pescgelo. Todos os direitos reservados.
          </div>

          <div className="text-sm text-gray-500 flex items-center">
            <span className="select-text">Desenvolvido por</span>
            <a
              href="https://soltechsoftware.com"
              className="ml-1.5 text-[#29ABE2] hover:underline flex items-center cursor-pointer"
            >
              <span className="select-text">SOLTECH</span> <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
