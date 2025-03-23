"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/avatars/client1.jpg",
    name: "Carlos Mendoza",
    userName: "Cliente Residencial",
    comment:
      "A atenção aos detalhes e a abordagem inovadora transformaram nossa casa em uma obra de arte funcional. A luz natural por todo o espaço mudou completamente nossa maneira de viver.",
    rating: 5.0,
  },
  {
    image: "/avatars/client2.jpg",
    name: "Maria Santos",
    userName: "Proprietária de Restaurante",
    comment:
      "O redesenho do nosso restaurante equilibra perfeitamente estética e funcionalidade. O uso criativo do espaço aumentou nossa capacidade de assentos enquanto cria uma atmosfera íntima que nossos clientes adoram.",
    rating: 4.8,
  },
  {
    image: "/avatars/client3.jpg",
    name: "Roberto Chen",
    userName: "Incorporador Imobiliário",
    comment:
      "Trabalhar com este escritório de arquitetura em nosso projeto de habitação multifamiliar foi uma experiência perfeita. Suas soluções de design sustentável não só reduziram custos como aumentaram o valor de mercado.",
    rating: 4.9,
  },
  {
    image: "/avatars/client4.jpg",
    name: "Elena Kowalski",
    userName: "Proprietária de Edifício Comercial",
    comment:
      "A renovação da nossa sede corporativa superou todas as expectativas. O design inovador criou espaços colaborativos que melhoraram significativamente a produtividade e a satisfação dos funcionários.",
    rating: 5.0,
  },
  {
    image: "/avatars/client5.jpg",
    name: "Tiago Pereira",
    userName: "Cliente de Casa Personalizada",
    comment:
      "Nossa casa dos sonhos se tornou realidade graças à visão excepcional deles. Ouviram nossas necessidades e criaram um espaço que reflete perfeitamente nosso estilo de vida, maximizando as vistas deslumbrantes da nossa propriedade.",
    rating: 5.0,
  },
  {
    image: "/avatars/client6.jpg",
    name: "Sofia Rodriguez",
    userName: "Diretora de Centro Cultural",
    comment:
      "O design do nosso centro de artes comunitário equilibra belamente forma e função. O espaço é versátil para vários eventos, enquanto faz uma declaração arquitetônica ousada que se tornou um marco local.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Depoimentos de Clientes
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          O Que Nossos Clientes Dizem Sobre Nossos Projetos
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>
                        {review.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
