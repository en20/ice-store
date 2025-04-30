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
    image: "/business-icons/restaurant.jpg",
    name: "Ana Paula Oliveira",
    userName: "Proprietária de Restaurante",
    comment:
      "A qualidade do gelo em escama da Pescgelo é excelente para manter nosso buffet sempre fresco e as bebidas na temperatura ideal. O preço competitivo e a facilidade de retirar em Maracanaú ajudam muito na nossa logística diária.",
    rating: 5.0,
  },
  {
    image: "/business-icons/fish-market.jpg",
    name: "Marcos Costa",
    userName: "Comerciante de Pescados",
    comment:
      "Para minha peixaria, a conservação é tudo. O gelo em escama da Pescgelo é soltinho e mantém o pescado perfeito por mais tempo. Além da qualidade, o fato de cobrirem orçamentos faz toda a diferença nos custos.",
    rating: 4.9,
  },
  {
    image: "/business-icons/event-venue.jpg",
    name: "Ricardo Lima",
    userName: "Organizador de Eventos",
    comment:
      "Nos eventos que organizo, preciso de grande volume de gelo e confiança no fornecedor. A Pescgelo nunca falha na qualidade e quantidade, com preço justo e a retirada é prática aqui em Maracanaú, facilitando nossa operação.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden bg-white">
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
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            A Experiência de <span className="text-[#29ABE2]">Nossos Clientes</span>
          </h3>
          <div className="w-24 h-1 bg-[#29ABE2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
                <div className="group bg-white rounded-lg shadow-sm border border-gray-100 p-6 h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
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
                  <p className="text-gray-600 mb-6 italic">
                    {review.comment}
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
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.userName}</p>
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
      </div>
    </section>
  );
};
