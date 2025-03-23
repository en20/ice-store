import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Pencil",
    title: "Projeto Personalizado",
    description:
      "Desenvolvemos cada projeto de forma única, considerando as necessidades específicas e estilo de vida de cada cliente.",
  },
  {
    icon: "Leaf",
    title: "Arquitetura Sustentável",
    description:
      "Comprometidos com soluções ecologicamente responsáveis, utilizando materiais e técnicas que minimizam o impacto ambiental.",
  },
  {
    icon: "Lightbulb",
    title: "Design Inovador",
    description:
      "Criamos espaços que combinam estética arrojada com funcionalidade, trazendo soluções criativas para cada desafio.",
  },
  {
    icon: "Building2",
    title: "Expertise em Diversos Projetos",
    description:
      "Experiência comprovada em projetos residenciais, comerciais e institucionais, adaptando nossa visão às necessidades de cada segmento.",
  },
  {
    icon: "ClipboardList",
    title: "Gestão Completa",
    description:
      "Acompanhamento integral do projeto, desde a concepção até a entrega final, garantindo que cada detalhe seja executado conforme planejado.",
  },
  {
    icon: "Award",
    title: "Reconhecimento no Mercado",
    description:
      "Nosso trabalho é reconhecido pela excelência e inovação, com projetos premiados e clientes satisfeitos em toda a região.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Especialidades
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Por Que Escolher Nosso Escritório
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Com mais de 15 anos de experiência, nosso estúdio de arquitetura combina
        visão artística, conhecimento técnico e compromisso com a
        sustentabilidade para criar espaços que inspiram.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
