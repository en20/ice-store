import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question:
      "Como funciona o processo de desenvolvimento de um projeto arquitetônico?",
    answer:
      "Nosso processo começa com uma consulta inicial para entender suas necessidades e visão. Em seguida, desenvolvemos estudos preliminares, anteprojeto e, após sua aprovação, o projeto executivo com todos os detalhamentos necessários. Acompanhamos cada etapa, desde o conceito até a finalização da obra, garantindo que a execução reflita fielmente o projeto concebido.",
    value: "item-1",
  },
  {
    question:
      "Qual é o prazo médio para desenvolvimento de um projeto residencial?",
    answer:
      "O prazo varia conforme a complexidade e tamanho do projeto. Para residências, o desenvolvimento completo do projeto arquitetônico geralmente leva de 2 a 4 meses. Projetos comerciais ou de maior escala podem exigir de 4 a 8 meses. Cada cronograma é personalizado e discutido durante nossa consulta inicial.",
    value: "item-2",
  },
  {
    question: "Vocês incorporam práticas sustentáveis nos projetos?",
    answer:
      "Absolutamente. A sustentabilidade é um pilar fundamental em nossa abordagem. Integramos técnicas passivas de conforto térmico, aproveitamento de iluminação natural, sistemas de captação de água pluvial, e especificação de materiais ecoeficientes. Também oferecemos projetos com certificação ambiental como LEED e AQUA.",
    value: "item-3",
  },
  {
    question: "Como é determinado o orçamento de um projeto arquitetônico?",
    answer:
      "Nossos honorários são calculados considerando a complexidade, metragem e tipo do projeto. Trabalhamos com diferentes modalidades, desde o valor por metro quadrado até percentual sobre o custo estimado da obra. Na consulta inicial, apresentamos uma proposta detalhada e transparente, adequada às suas necessidades e expectativas.",
    value: "item-4",
  },
  {
    question: "É possível adaptar projetos existentes ou realizar reformas?",
    answer:
      "Sim, especializamo-nos tanto em novos projetos quanto em retrofit, reformas e adaptações de espaços existentes. Realizamos uma análise detalhada da edificação atual, identificando potencialidades e limitações para criar soluções que transformem o espaço, preservando elementos de valor e otimizando a funcionalidade.",
    value: "item-5",
  },
  {
    question: "Em quais regiões do Brasil vocês atuam?",
    answer:
      "Temos sede em São Paulo, mas atuamos em todo o território nacional. Para projetos em outras localidades, realizamos visitas técnicas periódicas e utilizamos tecnologias de comunicação para manter o acompanhamento eficiente. Também estabelecemos parcerias com profissionais locais quando necessário para garantir a perfeita execução.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section
      id="faq"
      className="container md:w-[700px] py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-primary/5"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-primary/5"></div>

      <div className="text-center mb-12">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider font-light">
          PERGUNTAS FREQUENTES
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold font-serif">
          Esclarecendo Suas Dúvidas
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded-full mx-auto mt-4"></div>
      </div>

      <Accordion
        type="single"
        collapsible
        className="AccordionRoot divide-y divide-primary/10"
      >
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value} className="border-0 py-2">
            <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground leading-relaxed">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Optional measuring line decoration */}
      <div className="w-full h-12 relative mt-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/10"></div>
        <div className="absolute top-0 left-1/4 h-3 w-[1px] bg-primary/30"></div>
        <div className="absolute top-0 left-2/4 h-3 w-[1px] bg-primary/30"></div>
        <div className="absolute top-0 left-3/4 h-3 w-[1px] bg-primary/30"></div>
      </div>
    </section>
  );
};
