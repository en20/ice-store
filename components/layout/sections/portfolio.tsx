"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
};

const featuredProjects: Project[] = [
  {
    id: "projeto-1",
    title: "Residência Horizonte",
    category: "Residencial",
    description: "Casa contemporânea com integração total à paisagem natural.",
    imageUrl: "/portfolio/projeto1.jpg",
  },
  {
    id: "projeto-2",
    title: "Edifício Vertical Gardens",
    category: "Comercial",
    description:
      "Torre de escritórios com fachada verde e espaços sustentáveis.",
    imageUrl: "/portfolio/projeto2.jpg",
  },
  {
    id: "projeto-3",
    title: "Museu de Arte Moderna",
    category: "Cultural",
    description: "Espaço cultural com design minimalista e iluminação natural.",
    imageUrl: "/portfolio/projeto3.jpg",
  },
  {
    id: "projeto-4",
    title: "Plaza Central",
    category: "Urbanismo",
    description: "Revitalização de praça urbana com elementos interativos.",
    imageUrl: "/portfolio/projeto4.jpg",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden">
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
            NOSSO PORTFÓLIO
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl leading-tight">
              Conheça Nossos Projetos
              <br />
              <span className="text-primary relative">
                Mais Destacados
                <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-primary/20"></span>
              </span>
            </h2>

            <p className="text-base text-muted-foreground max-w-md">
              Cada projeto reflete nossa abordagem única que combina estética,
              funcionalidade e inovação, transformando visões em espaços
              excepcionais.
            </p>
          </div>
        </div>

        {/* Featured project - larger display */}
        <div className="mb-16">
          <Link
            href={`/portfolio/${featuredProjects[0].id}`}
            className="group block"
          >
            <div className="relative rounded-md overflow-hidden border border-black/5 dark:border-white/5 bg-white dark:bg-black/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-medium py-1 px-3 rounded-bl-md rounded-tr-md tracking-widest z-10">
                DESTAQUE
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative h-96 lg:h-auto col-span-3 overflow-hidden">
                  <Image
                    src={featuredProjects[0].imageUrl}
                    alt={featuredProjects[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-8 col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 relative">
                      <div className="absolute w-8 h-8 -top-3 -left-3 border-t border-l border-primary/20"></div>
                      <span className="text-sm text-primary tracking-wider font-medium uppercase">
                        {featuredProjects[0].category}
                      </span>
                      <div className="absolute w-8 h-8 -bottom-3 -right-3 border-b border-r border-primary/20"></div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredProjects[0].title}
                    </h3>

                    <p className="text-muted-foreground">
                      {featuredProjects[0].description}
                    </p>
                  </div>

                  <div className="flex items-center mt-6 text-sm font-medium text-primary">
                    Ver detalhes do projeto
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {featuredProjects.slice(1).map((project, index) => (
            <Link
              href={`/portfolio/${project.id}`}
              key={project.id}
              className="group"
            >
              <div className="relative rounded-md overflow-hidden border border-black/5 dark:border-white/5 bg-white dark:bg-black/20 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Numbered tag */}
                <div className="absolute top-0 right-0 bg-white dark:bg-black border border-black/5 dark:border-white/10 text-xs font-medium py-1 px-3 rounded-bl-md rounded-tr-md tracking-widest z-10">
                  {index + 2 < 10 ? `0${index + 2}` : index + 2}
                </div>

                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6">
                  <div className="mb-4 relative">
                    <div className="w-8 h-8 -top-3 -left-3 border-t border-l border-primary/20 absolute"></div>
                    <span className="text-xs text-primary tracking-wider font-medium uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
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
              </div>
            </Link>
          ))}
        </div>

        {/* Call to action button */}
        <div className="text-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white rounded-md px-8 py-6 group"
          >
            <Link
              href="/portfolio"
              className="flex items-center text-sm tracking-wider"
            >
              VER TODOS OS PROJETOS
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
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
}
