import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Qual é o prazo de entrega do gelo?",
    answer: "Realizamos entregas em até 2 horas após a confirmação do pedido para regiões dentro do nosso raio de atendimento. Para eventos agendados, garantimos a entrega no horário especificado com pelo menos 30 minutos de antecedência para assegurar que tudo esteja perfeito.",
    value: "item-1",
  },
  {
    question: "Qual é o pedido mínimo para entrega?",
    answer: "Para entregas residenciais, o pedido mínimo é de 5kg de gelo. Para estabelecimentos comerciais e eventos, não há quantidade mínima estabelecida, mas oferecemos condições especiais para pedidos acima de 50kg.",
    value: "item-2",
  },
  {
    question: "Quais tipos de gelo vocês oferecem?",
    answer: "Oferecemos diversos tipos de gelo: em cubo (tradicional e gourmet), em escama (ideal para exposição de alimentos), em bala (perfeito para drinks), em bloco (para esculturas e resfriamento prolongado) e gelo seco para efeitos especiais em eventos.",
    value: "item-3",
  },
  {
    question: "Como é calculado o valor da entrega?",
    answer: "O frete é calculado com base na distância e volume do pedido. Para regiões centrais, oferecemos entrega gratuita em pedidos acima de 20kg. Para outras regiões, o valor é informado antes da confirmação do pedido. Clientes com contrato de fornecimento regular têm condições especiais.",
    value: "item-4",
  },
  {
    question: "O gelo de vocês é seguro para consumo direto?",
    answer: "Sim, todo nosso gelo é produzido com água duplamente filtrada e tratada, seguindo rigorosos padrões de segurança alimentar. Nosso processo de produção atende às normas da ANVISA para gelo comestível, sendo completamente seguro para uso em bebidas e contato direto com alimentos.",
    value: "item-5",
  },
  {
    question: "Vocês fornecem gelo para eventos de grande porte?",
    answer: "Sim, temos capacidade para atender eventos de qualquer escala. Para eventos grandes, recomendamos agendamento com pelo menos 3 dias de antecedência. Oferecemos também serviço de consultoria para calcular a quantidade ideal de gelo conforme o tipo de evento, número de convidados e duração.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 overflow-hidden bg-gray-50 dark:bg-gray-900/50"
    >
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
            PERGUNTAS FREQUENTES
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Esclarecendo Suas <span className="text-[#29ABE2]">Dúvidas</span>
          </h3>
          <div className="w-24 h-1 bg-[#29ABE2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Reunimos as perguntas mais comuns sobre nossos produtos e serviços. 
            Se você não encontrar a resposta que procura, entre em contato conosco.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-8 relative">
          {/* Accent color top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#29ABE2]"></div>
          
          <Accordion
            type="single"
            collapsible
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {FAQList.map(({ question, answer, value }) => (
              <AccordionItem key={value} value={value} className="border-0 py-4">
                <AccordionTrigger className="text-left font-medium hover:text-[#29ABE2] transition-colors text-gray-900 dark:text-white">
                  {question}
                </AccordionTrigger>

                <AccordionContent className="text-gray-500 dark:text-gray-400 leading-relaxed pt-2">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Additional help */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Ainda tem dúvidas? Estamos à disposição para ajudar.
          </p>
          <div className="inline-flex items-center bg-[#29ABE2] hover:bg-[#29ABE2]/90 text-white px-6 py-3 rounded-md transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Fale Conosco
          </div>
        </div>
      </div>
    </section>
  );
};
