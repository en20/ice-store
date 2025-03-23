import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: string;
  location: string;
};

// Dados de exemplo para a página completa do portfólio
const allProjects: Project[] = [
  {
    id: "projeto-1",
    title: "Residência Horizonte",
    category: "Residencial",
    description: "Casa contemporânea com integração total à paisagem natural.",
    imageUrl: "/portfolio/projeto1.jpg",
    year: "2023",
    location: "São Paulo, Brasil",
  },
  {
    id: "projeto-2",
    title: "Edifício Vertical Gardens",
    category: "Comercial",
    description:
      "Torre de escritórios com fachada verde e espaços sustentáveis.",
    imageUrl: "/portfolio/projeto2.jpg",
    year: "2022",
    location: "Rio de Janeiro, Brasil",
  },
  {
    id: "projeto-3",
    title: "Museu de Arte Moderna",
    category: "Cultural",
    description: "Espaço cultural com design minimalista e iluminação natural.",
    imageUrl: "/portfolio/projeto3.jpg",
    year: "2021",
    location: "Belo Horizonte, Brasil",
  },
  {
    id: "projeto-4",
    title: "Plaza Central",
    category: "Urbanismo",
    description: "Revitalização de praça urbana com elementos interativos.",
    imageUrl: "/portfolio/projeto4.jpg",
    year: "2021",
    location: "Curitiba, Brasil",
  },
  {
    id: "projeto-5",
    title: "Residencial Ipanema",
    category: "Residencial",
    description:
      "Condomínio de alto padrão com ênfase em áreas comuns e paisagismo.",
    imageUrl: "/portfolio/projeto5.jpg",
    year: "2020",
    location: "Rio de Janeiro, Brasil",
  },
  {
    id: "projeto-6",
    title: "Centro Empresarial Pinheiros",
    category: "Comercial",
    description:
      "Complexo de escritórios com certificação LEED e soluções sustentáveis.",
    imageUrl: "/portfolio/projeto6.jpg",
    year: "2019",
    location: "São Paulo, Brasil",
  },
  {
    id: "projeto-7",
    title: "Biblioteca Municipal",
    category: "Cultural",
    description:
      "Espaço de leitura moderno com áreas de convivência integradas.",
    imageUrl: "/portfolio/projeto7.jpg",
    year: "2018",
    location: "Salvador, Brasil",
  },
  {
    id: "projeto-8",
    title: "Parque Linear",
    category: "Urbanismo",
    description:
      "Intervenção urbana ao longo de córrego com ciclovias e áreas de lazer.",
    imageUrl: "/portfolio/projeto8.jpg",
    year: "2018",
    location: "Recife, Brasil",
  },
];

export default function PortfolioPage() {
  const categories = [
    "Todos",
    "Residencial",
    "Comercial",
    "Cultural",
    "Urbanismo",
  ];

  return (
    <main className="min-h-screen py-24">
      {/* Header da página */}
      <div className="container mx-auto mb-16">
        <div className="mb-8">
          <Button
            asChild
            variant="ghost"
            className="mb-6 hover:bg-transparent p-0 group"
          >
            <Link href="/">
              <ChevronLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para o início
            </Link>
          </Button>
          <h1 className="text-4xl md:text-6xl font-bold">Nosso Portfólio</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-xl max-w-3xl">
            Explore todos os nossos projetos arquitetônicos e descubra como
            transformamos visões em espaços reais.
          </p>
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 
              dark:hover:bg-slate-800 transition-colors rounded-md text-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de projetos */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <Link
              href={`/portfolio/${project.id}`}
              key={project.id}
              className="group"
            >
              <div className="overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {project.category}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">
                    {project.description}
                  </p>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {project.location}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
