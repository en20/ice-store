import { icons } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Droplets",
    title: "Pureza Garantida",
    description:
      "Nosso gelo é produzido com água duplamente filtrada e tratada, garantindo produtos cristalinos, sem impurezas e seguros para o consumo.",
    color: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    icon: "Timer",
    title: "Entrega Rápida",
    description:
      "Sistema de logística eficiente que garante entregas em até 2 horas após a confirmação do pedido, mantendo o gelo nas condições ideais.",
    color: "bg-sky-50 dark:bg-sky-900/10",
  },
  {
    icon: "BadgeCheck",
    title: "Qualidade Superior",
    description:
      "Equipamentos de última geração que garantem gelo com formato perfeito, densidade ideal e derretimento lento, perfeito para drinks e alimentos.",
    color: "bg-cyan-50 dark:bg-cyan-900/10",
  },
  {
    icon: "Package",
    title: "Embalagem Especial",
    description:
      "Utilizamos embalagens térmicas que preservam o gelo por mais tempo, reduzindo o derretimento durante o transporte e armazenamento.",
    color: "bg-indigo-50 dark:bg-indigo-900/10",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="relative py-24 sm:py-32 overflow-hidden bg-gray-50 dark:bg-gray-900/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-[0.05]">
        <Image
          src="/ice-texture.png"
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
            Nossos Diferenciais
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Vantagens de Escolher <span className="text-[#29ABE2]">Nosso Gelo Premium</span>
          </h3>
          <div className="w-24 h-1 bg-[#29ABE2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Nossa fábrica combina tecnologia avançada e processos rigorosos de controle 
            de qualidade para entregar o melhor gelo da região com rapidez e excelência.
          </p>
        </div>

        {/* Benefits grid with more creative layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitList.map(({ icon, title, description, color }, index) => (
            <div
              key={title}
              className={`group relative rounded-lg overflow-hidden transition-all duration-300 border border-gray-100 dark:border-gray-800 p-6 pt-12 h-full hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800`}
            >
              {/* Accent color top border */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-[#29ABE2]`}></div>
              
              {/* Numbered tag */}
              <div className="absolute top-3 right-3 bg-[#29ABE2]/10 text-[#29ABE2] text-xs font-medium py-1 px-2 rounded tracking-wider">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>

              {/* Icon with decorative elements */}
              <div className={`mb-6 relative ${color} p-3 inline-flex rounded-lg`}>
                <Icon
                  color="#29ABE2"
                  name={icon as keyof typeof icons}
                  size={32}
                  className="text-[#29ABE2]"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#29ABE2] transition-colors">
                {title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#29ABE2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-20 bg-[#29ABE2]/5 rounded-lg p-8 border border-[#29ABE2]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Produção <span className="text-[#29ABE2]">Sustentável</span></h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                Nosso processo de produção é otimizado para reduzir o consumo de água e energia, 
                contribuindo para a preservação do meio ambiente sem comprometer a qualidade.
              </p>
            </div>
            <div>
              <Image 
                src="/gelo-hero.jpg" 
                alt="Produção sustentável" 
                width={670} 
                height={700} 
                className="rounded-lg object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
