"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
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

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Projeto Residencial",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:enzolozano.dev@gmail.com?subject=${subject}&body=Olá, sou ${firstName} ${lastName}, meu email é ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background grid elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full border-r border-primary/5 -z-10" />
      <div className="absolute top-0 left-1/3 w-1/3 h-full border-r border-primary/5 -z-10" />
      <div className="absolute top-0 left-2/3 w-1/3 h-full border-r border-primary/5 -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-primary/5" />

      <div className="container mx-auto">
        <div className="relative mb-16">
          <div className="absolute w-24 h-[1px] bg-primary top-1/2 -left-32 hidden xl:block" />

          <h2 className="text-lg text-primary mb-2 tracking-wider font-light">
            CONTATO
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl leading-tight">
              Vamos Transformar Sua{" "}
              <span className="text-primary relative">
                Visão em Realidade
                <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-primary/20"></span>
              </span>
            </h2>

            <p className="text-base text-muted-foreground max-w-md">
              Estamos prontos para ouvir suas ideias e transformá-las em espaços
              excepcionais que unem funcionalidade, estética e propósito.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-primary/20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-primary/20"></div>

            <div className="mb-8">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Entre em contato para discutir seu projeto arquitetônico,
                solicitar um orçamento ou agendar uma consulta inicial com nossa
                equipe. Estamos ansiosos para colaborar em seu próximo espaço.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-primary/5 rounded-md mr-4">
                  <Building2 className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium mb-1">Escritório</div>
                  <div className="text-muted-foreground">
                    Avenida Paulista, 1578
                    <br />
                    São Paulo, SP 01310-200
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/5 rounded-md mr-4">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium mb-1">Telefone</div>
                  <div className="text-muted-foreground">
                    +55 (11) 3456-7890
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/5 rounded-md mr-4">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <div className="text-muted-foreground">
                    contato@studiodearquitetura.com
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-primary/5 rounded-md mr-4">
                  <Clock className="text-primary h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium mb-1">Horário de Atendimento</div>
                  <div className="text-muted-foreground">
                    Segunda - Sexta: 9h às 18h
                    <br />
                    Sábado: 9h às 13h (com agendamento)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <CardHeader className="pt-8">
              <h3 className="text-xl font-medium tracking-wide">
                Envie-nos uma mensagem
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
                              className="border-primary/20 focus:border-primary/40 bg-transparent"
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
                              className="border-primary/20 focus:border-primary/40 bg-transparent"
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
                            className="border-primary/20 focus:border-primary/40 bg-transparent"
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
                          Tipo de Projeto
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="border-primary/20 focus:border-primary/40 bg-transparent">
                              <SelectValue placeholder="Selecione um tipo de projeto" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Projeto Residencial">
                              Projeto Residencial
                            </SelectItem>
                            <SelectItem value="Projeto Comercial">
                              Projeto Comercial
                            </SelectItem>
                            <SelectItem value="Reforma">Reforma</SelectItem>
                            <SelectItem value="Design de Interiores">
                              Design de Interiores
                            </SelectItem>
                            <SelectItem value="Consultoria">
                              Consultoria
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
                          Mensagem
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Descreva seu projeto, necessidades e questões..."
                            className="resize-none border-primary/20 focus:border-primary/40 bg-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full md:w-auto !bg-primary hover:!bg-primary/90 text-white py-6 px-8 mt-4 rounded-md transition-all shadow-lg hover:shadow-xl group"
                  >
                    Enviar Mensagem
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                </form>
              </Form>
            </CardContent>

            <CardFooter className="pt-0">
              <div className="w-full h-px bg-primary/10 my-4"></div>
              <p className="text-xs text-muted-foreground text-center w-full">
                Ao enviar este formulário, você concorda com nossa política de
                privacidade.
              </p>
            </CardFooter>
          </Card>
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
};
