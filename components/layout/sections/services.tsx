import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Projeto Arquitetônico",
    description:
      "Desenvolvimento completo de projetos desde o estudo preliminar até o executivo, com detalhamento técnico e soluções personalizadas.",
    pro: 0,
  },
  {
    title: "Interiores & Ambientação",
    description:
      "Concepção de espaços internos com especificação de materiais, mobiliário e iluminação para criar ambientes harmônicos e funcionais.",
    pro: 0,
  },
  {
    title: "Retrofit & Patrimônio",
    description:
      "Requalificação de edificações existentes e restauro de patrimônio histórico, preservando valores culturais e adequando às normas vigentes.",
    pro: 0,
  },
  {
    title: "Arquitetura Bioclimática",
    description:
      "Projetos com certificação ambiental, técnicas passivas de conforto térmico e acústico, e integração com sistemas de energia renovável.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="container py-24 sm:py-32 border-t border-muted/40"
    >
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider font-light">
        ATELIER DE ARQUITETURA
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 font-serif">
        Concepção Arquitetônica
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-12 font-light">
        Do conceito à edificação, desenvolvemos soluções que equilibram forma,
        função e contexto em cada projeto.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full lg:w-[70%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/30 dark:bg-card h-full relative backdrop-blur-sm border-muted/50"
          >
            <CardHeader className="pb-6">
              <CardTitle className="font-serif mb-3">{title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {description}
              </CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden font-light tracking-wide"
            >
              ESPECIALIDADE
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
