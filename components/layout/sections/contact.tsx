"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone, MessageSquare, Instagram, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";

const formSchema = z.object({
  firstName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  lastName: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "Selecione um assunto"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Orçamento de Gelo em Escama",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    
    const whatsappMessage = `Olá! Sou ${firstName} ${lastName} (${email}) e gostaria de fazer um pedido: ${subject}. ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    window.open(`https://wa.me/5585984353984?text=${encodedMessage}`, '_blank');
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <Image
          src="/ice-pattern.png"
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
            CONTATO
          </h2>
          <h3 className="text-3xl text-white md:text-4xl font-bold mb-4">
            Entre em Contato e Faça seu <span className="text-[#29ABE2]">Pedido para Entrega ou Retirada</span>
          </h3>
          <div className="w-24 h-1 bg-[#29ABE2] mx-auto rounded-full mb-6"></div>
          <p className="text-white max-w-2xl mx-auto">
            Solicite um orçamento ou tire suas dúvidas sobre nosso gelo em escama.
            <span className="block mt-2 font-bold text-[#29ABE2]">RETIRADA NO LOCAL OU ENTREGA, VOCÊ QUE ESCOLHE!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-8 hover:shadow-md transition-all duration-300">
            {/* Accent color top border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#29ABE2]"></div>
            
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Entre em contato conosco para solicitar um orçamento ou esclarecer dúvidas sobre nosso gelo em escama.
                Garantimos o melhor preço da região, <span className="font-bold">COBRIMOS QUALQUER ORÇAMENTO!</span>
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-[#29ABE2]/10 rounded-lg mr-4">
                  <Building2 className="text-[#29ABE2] h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium mb-1">Endereço</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    R. Santo Inácio, 1195 - Santa Maria, 
                    <br />
                    Maracanaú - CE, 61916-500
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#29ABE2]/10 rounded-lg mr-4">
                  <Phone className="text-[#29ABE2] h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium mb-1">WhatsApp / Telefone</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    (85) 98435-3984
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#29ABE2]/10 rounded-lg mr-4">
                  <Mail className="text-[#29ABE2] h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    <a href="mailto:pescgelo@gmail.com" className="hover:text-[#29ABE2] transition-colors">
                      pescgelo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#29ABE2]/10 rounded-lg mr-4">
                  <Instagram className="text-[#29ABE2] h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium mb-1">Instagram</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    <a href="https://www.instagram.com/pescgelo" target="_blank" rel="noopener noreferrer" className="hover:text-[#29ABE2] transition-colors">
                      @pescgelo
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#29ABE2]/10 rounded-lg mr-4">
                  <Clock className="text-[#29ABE2] h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium mb-1">Horário de Atendimento</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Segunda a Sexta: 08:00 – 18:00
                    <br />
                    Sábado: 08:00 – 12:00
                    <br />
                    Domingo: Fechado
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 py-6 rounded-md transition-all group shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="https://wa.me/5585984353984">
                  <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    Solicite um Orçamento ou Tire Suas Dúvidas!
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Google Maps embed */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden relative h-[400px]">
              {/* Accent color top border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#29ABE2] z-10"></div>
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0884739019453!2d-38.62800542472408!3d-3.8309279438308366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f020c3b963f%3A0xd69c6bac9a6a13cc!2sR.%20Santo%20In%C3%A1cio%2C%201195%20-%20Santa%20Maria%2C%20Maracana%C3%BA%20-%20CE%2C%2061916-500!5e0!3m2!1spt-BR!2sbr!4v1696878842592!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
            
            {/* Reminder about service options */}
            <Card className="bg-[#29ABE2]/5 border-[#29ABE2]/20">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-[#29ABE2] h-5 w-5" />
                  <h3 className="font-bold text-white text-lg">Lembrete Importante</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white">
                  Oferecemos <span className="font-bold">RETIRADA NO LOCAL OU ENTREGA</span> para sua comodidade. 
                  O melhor preço da região para gelo em escama. Traga seu orçamento: 
                  <span className="font-bold text-[#29ABE2]"> COBRIMOS QUALQUER PREÇO!</span>
                </p>
              </CardContent>
            </Card>
            
            
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 bg-[#29ABE2]/5 rounded-lg p-6 border border-[#29ABE2]/20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-xl font-bold text-[#29ABE2] mb-1">Melhor preço</div>
            <p className="text-sm text-white">Cobrimos qualquer orçamento comprovado</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[#29ABE2] mb-1">Gelo de qualidade</div>
            <p className="text-sm text-white">Perfeito para conservação de alimentos</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[#29ABE2] mb-1">Retirada ou entrega</div>
            <p className="text-sm text-white">Atendimento ágil e eficiente</p>
          </div>
        </div>
      </div>
    </section>
  );
};
