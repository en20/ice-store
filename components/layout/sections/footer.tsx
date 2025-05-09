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
        
        {/* WhatsApp floating button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://wa.me/5585984353984" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
