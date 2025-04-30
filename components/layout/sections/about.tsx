import Image from "next/image";
import { Building2, Award, Clock, Calendar } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-gray-900">
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
            Quem Somos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Pescgelo: <span className="text-[#29ABE2]">Sua Referência em Gelo em Escama em Maracanaú</span>
          </h3>
          <div className="w-24 h-1 bg-[#29ABE2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conheça nossa história e missão para ser a melhor solução em gelo em escama da região
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left side - Image with decorative elements */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/pescgelo.jpg"
                alt="Fábrica da Pescgelo"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-4 py-1 bg-[#29ABE2] text-white text-sm font-semibold rounded-full mb-2">
                  Excelência em Gelo
                </span>
                <h4 className="text-white text-2xl font-bold">Pescgelo</h4>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#29ABE2]/30 rounded-tl-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#29ABE2]/30 rounded-br-xl"></div>
          </div>

          {/* Right side - About text content */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              {/* Accent color top border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#29ABE2]"></div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                A Pescgelo nasceu da missão de oferecer a melhor solução em gelo em escama para 
                Maracanaú e região. Combinamos tecnologia e expertise para produzir gelo de alta 
                performance, ideal para negócios que exigem máxima eficiência em refrigeração e 
                conservação.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Nosso compromisso é com a qualidade do produto, a satisfação do cliente e a garantia 
                do melhor preço do mercado. <span className="font-bold">COBRIMOS QUALQUER ORÇAMENTO.</span> 
                Conte com a Pescgelo para ser seu parceiro em gelo de qualidade.
              </p>
              
              {/* Bottom decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#29ABE2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
            
            {/* Highlights/Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:shadow-md hover:border-[#29ABE2]/20 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-[#29ABE2]/10 p-2 rounded-lg mr-3">
                    <Building2 className="text-[#29ABE2] h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-white">Nossa Fábrica</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Instalações modernas com equipamentos de última geração
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:shadow-md hover:border-[#29ABE2]/20 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-[#29ABE2]/10 p-2 rounded-lg mr-3">
                    <Award className="text-[#29ABE2] h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-white">Qualidade</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Processos rigorosos para garantir o melhor gelo
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:shadow-md hover:border-[#29ABE2]/20 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-[#29ABE2]/10 p-2 rounded-lg mr-3">
                    <Calendar className="text-[#29ABE2] h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-white">Experiência</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Anos de experiência no mercado de gelo escama
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:shadow-md hover:border-[#29ABE2]/20 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <div className="bg-[#29ABE2]/10 p-2 rounded-lg mr-3">
                    <Clock className="text-[#29ABE2] h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-white">Atendimento</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Equipe dedicada e pronta para atender você
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company values/mission statement */}
        <div className="mt-16 bg-[#29ABE2]/5 rounded-lg p-8 border border-[#29ABE2]/20 max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4 text-white">Nossa Missão</h4>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ser referência em gelo em escama, fornecendo produtos de qualidade superior que atendam 
            às necessidades de nossos clientes com o melhor custo-benefício do mercado.
          </p>
        </div>
      </div>
    </section>
  );
} 