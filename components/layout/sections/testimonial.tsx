"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

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
      "Excelente atendimento e rapidez na entrega. O gelo chegou exatamente no horário combinado e com a qualidade impecável. Recomendo a todos que precisam de gelo para eventos.",
    rating: 5.0,
  },
  {
    image: "/avatars/client2.jpg",
    name: "Maria Santos",
    userName: "Proprietária de Restaurante",
    comment:
      "Temos uma parceria há mais de 2 anos e o fornecimento nunca falhou. A qualidade do gelo é superior e nossos clientes sempre elogiam os drinks que servimos com ele.",
    rating: 4.8,
  },
  {
    image: "/avatars/client3.jpg",
    name: "Roberto Chen",
    userName: "Organizador de Eventos",
    comment:
      "Contratamos para um festival gastronômico e ficamos impressionados com a organização. Mesmo com a grande demanda, o serviço foi impecável e o gelo manteve a qualidade até o final.",
    rating: 4.9,
  },
  {
    image: "/avatars/client4.jpg",
    name: "Elena Kowalski",
    userName: "Proprietária de Bar",
    comment:
      "A escultura de gelo que encomendamos para a inauguração do nosso bar foi deslumbrante. Um diferencial que impressionou todos os convidados. Certamente faremos mais pedidos.",
    rating: 5.0,
  },
  {
    image: "/avatars/client5.jpg",
    name: "Tiago Pereira",
    userName: "Cliente Residencial",
    comment:
      "O serviço de entrega residencial é muito prático. Faço pedidos regularmente para festas em casa e sempre recebo um produto de excelente qualidade. O aplicativo para pedidos é muito intuitivo.",
    rating: 5.0,
  },
  {
    image: "/avatars/client6.jpg",
    name: "Sofia Rodriguez",
    userName: "Gerente de Hotel",
    comment:
      "A parceria com a empresa melhorou muito nossa operação de hospedagem. Temos fornecimento diário e isso garante que nossos hóspedes sempre tenham gelo de qualidade disponível.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden bg-gray-50 dark:bg-gray-900/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
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
            Depoimentos de Clientes
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos <span className="text-[#29ABE2]">Clientes Dizem</span>
          </h3>
          <div className="w-24 h-1 bg-[#29ABE2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista. Confira o que eles têm a dizer sobre nossos produtos e serviços.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-[90%] lg:max-w-screen-xl mx-auto"
        >
          <CarouselContent>
            {reviewList.map((review) => (
              <CarouselItem
                key={review.name}
                className="md:basis-1/2 lg:basis-1/3 p-2"
              >
                <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-6 h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  {/* Accent color top border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#29ABE2]"></div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`size-4 ${i < Math.floor(review.rating) ? 'fill-[#29ABE2] text-[#29ABE2]' : 'fill-gray-200 text-gray-200'}`} 
                      />
                    ))}
                    <span className="text-sm text-[#29ABE2] font-medium ml-1">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>
                  
                  {/* Comment */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                    "{review.comment}"
                  </p>
                  
                  {/* User info */}
                  <div className="flex items-center">
                    <Avatar className="border-2 border-[#29ABE2]/20">
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback className="bg-[#29ABE2]/10 text-[#29ABE2]">
                        {review.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 dark:text-white">{review.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{review.userName}</p>
                    </div>
                  </div>
                  
                  {/* Bottom decorative element */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#29ABE2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="border border-gray-200 hover:bg-[#29ABE2] hover:text-white hover:border-[#29ABE2] -left-4" />
          <CarouselNext className="border border-gray-200 hover:bg-[#29ABE2] hover:text-white hover:border-[#29ABE2] -right-4" />
        </Carousel>
        
        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#29ABE2] mb-1">500+</div>
            <p className="text-sm text-gray-500">Clientes Satisfeitos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#29ABE2] mb-1">4.9</div>
            <p className="text-sm text-gray-500">Avaliação Média</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#29ABE2] mb-1">12</div>
            <p className="text-sm text-gray-500">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};
