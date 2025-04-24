"use client";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ProductSection = () => {
  return (
    <section id="produto" className="relative py-20 sm:py-28 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <Image
          src="/escama1.jpg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-[#29ABE2] uppercase tracking-wider mb-2">
            Nosso Produto
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Gelo em Escama Pescgelo: <span className="text-[#29ABE2]">A Solução Eficiente em Refrigeração</span>
          </h3>
          <div className="w-24 h-1 bg-[#29ABE2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Na Pescgelo, somos especialistas dedicados exclusivamente à produção de Gelo em Escama de alta qualidade.
            Compreendemos que, para aplicações que exigem resfriamento rápido e conservação eficaz, o gelo em escama 
            oferece vantagens incomparáveis sobre outros tipos. Nosso foco garante um produto superior para suas necessidades.
          </p>
        </div>

        {/* Main content with image and benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/peixe.jpg"
                alt="Gelo em Escama Pescgelo com pescados frescos"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-4 py-1 bg-[#29ABE2] text-white text-sm font-semibold rounded-full mb-2">
                  Qualidade Premium
                </span>
                <h4 className="text-white text-2xl font-bold">Gelo em Escama da Pescgelo</h4>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#29ABE2]/30 rounded-tl-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#29ABE2]/30 rounded-br-xl"></div>
          </div>

          {/* Right side - Benefits */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
              Benefícios Essenciais do Gelo em Escama Pescgelo:
            </h4>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#29ABE2]/10 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#29ABE2]" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Resfriamento Rápido e Eficaz</h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    Maximiza o contato com a superfície, transferindo frio de forma ágil e uniforme.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#29ABE2]/10 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#29ABE2]" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Conservação Prolongada</h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ideal para pescados e alimentos perecíveis, mantendo o frescor por mais tempo.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#29ABE2]/10 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#29ABE2]" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Proteção e Adaptabilidade</h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    Molda-se perfeitamente aos produtos sem danificá-los, excelente para transporte e exposição.
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              className="mt-4 bg-[#29ABE2] hover:bg-[#29ABE2]/90 text-white group"
              asChild
              size="lg"
            >
              <Link href="#contact">
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Applications section */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-center mb-10">
            Aplicações Recomendadas
          </h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {['Peixarias', 'Restaurantes', 'Supermercados', 'Eventos', 'Bares', 'Buffets', 'Transporte', 'Indústrias'].map((application, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4 text-center hover:shadow-md hover:border-[#29ABE2]/50 transition-all duration-300 hover:-translate-y-1">
                <span className="text-sm font-medium">{application}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment section with image gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side - Images */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
              <Image 
                src="/escama3.jpeg"
                alt="Exposição de pescados em gelo" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
              <Image 
                src="/escama2.jpg"
                alt="Bebidas resfriadas em balde de gelo" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="relative h-40 md:h-48 rounded-lg overflow-hidden col-span-2">
              <Image 
                src="/escama4.png"
                alt="Variedade de peixes conservados em gelo" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          {/* Right side - Commitment */}
          <div className="lg:col-span-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold mb-6">
              Nosso Compromisso
            </h4>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#29ABE2] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Qualidade e Pureza Asseguradas</h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    Todo nosso gelo é produzido com água filtrada e seguindo rigorosos padrões de higiene.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#29ABE2] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">O Melhor Preço Garantido</h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-bold">COBRIMOS QUALQUER ORÇAMENTO.</span> Traga o orçamento comprovado e faremos o melhor preço para você.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-[#29ABE2] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Retirada Conveniente</h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    Disponível para retirada em nossa unidade localizada em Maracanaú, com atendimento rápido e eficiente.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pl-14">
              <Button 
                variant="outline" 
                className="border-[#29ABE2] text-[#29ABE2] hover:bg-[#29ABE2] hover:text-white"
                asChild
              >
                <Link href="https://wa.me/5585991124238?text=Olá! Gostaria de informações sobre o Gelo em Escama da Pescgelo">
                  Mais Informações via WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 