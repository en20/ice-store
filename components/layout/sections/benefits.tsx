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
    icon: "PenTool",
    title: "Design Personalizado",
    description:
      "Criamos projetos exclusivos que refletem sua personalidade e atendem às suas necessidades específicas, transformando ideias em espaços funcionais e impressionantes.",
    color: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: "LayoutGrid",
    title: "Otimização de Espaço",
    description:
      "Aproveitamos cada metro quadrado com soluções inteligentes que maximizam a funcionalidade e o conforto, criando ambientes harmoniosos e práticos.",
    color: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: "FileCheck",
    title: "Conformidade Técnica",
    description:
      "Garantimos que todos os projetos atendam às normas e regulamentações de construção, evitando problemas futuros e assegurando a aprovação legal dos projetos.",
    color: "bg-rose-50 dark:bg-rose-950/30",
  },
  {
    icon: "Leaf",
    title: "Arquitetura Sustentável",
    description:
      "Integramos princípios de sustentabilidade e eficiência energética em nossos projetos, reduzindo o impacto ambiental e proporcionando economia a longo prazo.",
    color: "bg-emerald-50 dark:bg-emerald-950/30",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-[0.12] dark:opacity-[0.02]">
        <Image
          src="/dale.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="absolute top-0 left-0 w-1/3 h-full border-r border-primary/5 -z-10" />
      <div className="absolute top-0 left-1/3 w-1/3 h-full border-r border-primary/5 -z-10" />
      <div className="absolute top-0 left-2/3 w-1/3 h-full border-r border-primary/5 -z-10" />

      <div className="container">
        {/* Header with diagonal accent line */}
        <div className="relative mb-20">
          <div className="absolute w-24 h-[1px] bg-primary top-1/2 -left-32 hidden xl:block" />

          <h2 className="text-lg text-primary mb-2 tracking-wider font-light">
            NOSSOS BENEFÍCIOS
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl leading-tight">
              Vantagens de Contratar Nosso
              <br />
              <span className="text-primary relative">
                Estúdio de Arquitetura
                <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-primary/20"></span>
              </span>
            </h2>

            <p className="text-base text-muted-foreground max-w-md">
              Nosso estúdio combina criatividade, expertise técnica e atenção
              aos detalhes para transformar sua visão em espaços excepcionais
              que superam suas expectativas.
            </p>
          </div>
        </div>

        {/* Benefits grid with more creative layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefitList.map(({ icon, title, description, color }, index) => (
            <div
              key={title}
              className={`group relative rounded-md transition-all duration-300 ${color} border border-black/5 dark:border-white/5 p-6 pt-12 h-full hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Numbered tag */}
              <div className="absolute top-0 right-0 bg-white dark:bg-black border border-black/5 dark:border-white/10 text-xs font-medium py-1 px-3 rounded-bl-md rounded-tr-md tracking-widest">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>

              {/* Icon with decorative elements */}
              <div className="mb-6 relative">
                <div className="absolute w-8 h-8 -top-3 -left-3 border-t border-l border-primary/20"></div>
                <Icon
                  name={icon as keyof typeof icons}
                  size={36}
                  color="hsl(var(--primary))"
                  className="text-primary"
                />
                <div className="absolute w-8 h-8 -bottom-3 -right-3 border-b border-r border-primary/20"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {title}
              </h3>

              <p className="text-muted-foreground text-sm">{description}</p>

              {/* Hover indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 11.5L11.5 3.5M11.5 3.5H6.5M11.5 3.5V8.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Optional measuring line decoration */}
        <div className="w-full h-12 relative mt-20">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/10"></div>
          <div className="absolute top-0 left-1/4 h-3 w-[1px] bg-primary/30"></div>
          <div className="absolute top-0 left-2/4 h-3 w-[1px] bg-primary/30"></div>
          <div className="absolute top-0 left-3/4 h-3 w-[1px] bg-primary/30"></div>
        </div>
      </div>
    </section>
  );
};
