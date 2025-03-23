"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone, MessageSquare } from "lucide-react";
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
  subject: z.string().min(1, "Selecione um tipo de gelo"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Pedido de Gelo em Cubo",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    
    const whatsappMessage = `Olá! Sou ${firstName} ${lastName} (${email}) e gostaria de fazer um pedido: ${subject}. ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    window.open(`https://wa.me/5585991124238?text=${encodedMessage}`, '_blank');
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-gray-900">
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
            ENTRE EM CONTATO
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Faça seu <span className="text-[#29ABE2]">Pedido de Gelo</span>
          </h3>
          <div className="w-24 h-1 bg-[#29ABE2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Entrega rápida para toda a região. Pedido mínimo de 5kg, com descontos
            para pedidos maiores. Atendemos eventos, bares, restaurantes e residências.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-8 hover:shadow-md transition-all duration-300">
            {/* Accent color top border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#29ABE2]"></div>
            
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Peça seu gelo de forma rápida e conveniente pelo WhatsApp. Basta clicar no botão 
                abaixo ou preencher o formulário para enviarmos uma mensagem personalizada.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-[#29ABE2]/10 rounded-lg mr-4">
                  <Building2 className="text-[#29ABE2] h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium mb-1">Fábrica</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Rua do Gelo Cristalino, 123
                    <br />
                    Fortaleza, CE 60000-000
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-[#29ABE2]/10 rounded-lg mr-4">
                  <Phone className="text-[#29ABE2] h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium mb-1">WhatsApp</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    +55 (85) 99112-4238
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
                    contato@gelopremium.com
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
                    Segunda - Sábado: 7h às 22h
                    <br />
                    Domingo: 9h às 18h
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 py-6 rounded-md transition-all group shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="https://wa.me/5585991124238">
                  <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    Pedir pelo WhatsApp
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            {/* Accent color top border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#29ABE2]"></div>

            <CardHeader className="pt-8">
              <h3 className="text-xl font-bold">
                Formulário de pedido
              </h3>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid w-full gap-5"
                >
                  <div className="flex flex-col md:!flex-row gap-5">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="text-sm font-medium">
                            Nome
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Maria"
                              {...field}
                              className="border-gray-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 bg-transparent dark:border-gray-700"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="text-sm font-medium">
                            Sobrenome
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Silva"
                              {...field}
                              className="border-gray-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 bg-transparent dark:border-gray-700"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="maria.silva@exemplo.com"
                            className="border-gray-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 bg-transparent dark:border-gray-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Tipo de Gelo
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 bg-transparent dark:border-gray-700">
                              <SelectValue placeholder="Selecione o tipo de gelo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Pedido de Gelo em Cubo">
                              Gelo em Cubo
                            </SelectItem>
                            <SelectItem value="Pedido de Gelo em Escama">
                              Gelo em Escama
                            </SelectItem>
                            <SelectItem value="Pedido de Gelo em Bala">
                              Gelo em Bala
                            </SelectItem>
                            <SelectItem value="Pedido de Gelo em Bloco">
                              Gelo em Bloco
                            </SelectItem>
                            <SelectItem value="Pedido de Gelo Misto">
                              Gelo Misto
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Detalhes do Pedido
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Informe a quantidade, horário de entrega desejado e endereço..."
                            className="resize-none border-gray-200 focus:border-[#29ABE2] focus:ring-[#29ABE2]/20 bg-transparent dark:border-gray-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white py-6 px-8 mt-4 rounded-md transition-all shadow-lg hover:shadow-xl group flex items-center justify-center"
                  >
                    <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="relative">
                      Enviar pedido via WhatsApp
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Button>
                </form>
              </Form>
            </CardContent>

            <CardFooter className="pt-0">
              <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-4"></div>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center w-full">
                Pedido mínimo de 5kg. Entrega em até 2 horas após confirmação.
              </p>
            </CardFooter>
          </Card>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 bg-[#29ABE2]/5 rounded-lg p-6 border border-[#29ABE2]/20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-xl font-bold text-[#29ABE2] mb-1">Entregas rápidas</div>
            <p className="text-sm text-gray-500">Em até 2 horas após confirmação</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[#29ABE2] mb-1">Gelo de qualidade</div>
            <p className="text-sm text-gray-500">Água purificada e filtrada</p>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-[#29ABE2] mb-1">Pedido mínimo</div>
            <p className="text-sm text-gray-500">Apenas 5kg para residências</p>
          </div>
        </div>
      </div>
    </section>
  );
};
