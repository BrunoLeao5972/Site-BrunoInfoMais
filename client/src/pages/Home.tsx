import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Users, Notebook, Wrench, Dumbbell, CheckCircle2, Database } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const products = [
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Sistema de loja online com carrinho de compras, gestão de produtos e pagamentos",
    icon: Code2,
  },
  {
    id: "sistema-leads",
    title: "Sistema de Leads",
    description: "Gerenciamento inteligente de prospecção e vendas",
    icon: Users,
  },
  {
    id: "gestao-escolar",
    title: "Gestão Escolar",
    description: "Plataforma integrada para administração educacional",
    icon: Notebook,
  },
  {
    id: "software-oficinas",
    title: "Software para Oficinas",
    description: "Controle de serviços, peças e agendamentos",
    icon: Wrench,
  },
  {
    id: "personal-trainer",
    title: "Software para Personal Trainers",
    description: "Gestão de clientes, treinos e resultados",
    icon: Dumbbell,
  },
  {
    id: "kds",
    title: "KDS - Kitchen Display System",
    description: "Sistema de gerenciamento para restaurantes e cozinhas",
    icon: Database,
  },
];

const testimonials = [
  {
    name: "João Silva",
    company: "Empresa X",
    text: "O software transformou completamente a forma como gerenciamos nossos negócios.",
  },
  {
    name: "Maria Santos",
    company: "Escola Y",
    text: "Implementação rápida e suporte excelente durante todo o processo.",
  },
  {
    name: "Pedro Costa",
    company: "Oficina Z",
    text: "Aumentamos nossa produtividade em 40% após usar a solução.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage="/" />

      {/* Hero Section — imagem de fundo, texto à esquerda */}
      <section className="relative flex min-h-[min(72vh,40rem)] md:min-h-[min(78vh,44rem)] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-mentablet-bg.png"
            alt=""
            className="h-full w-full object-cover object-[74%_center] md:object-[18%_center]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/72 to-transparent sm:via-background/48 lg:via-background/25 lg:w-[58%]"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/70 to-transparent md:hidden" aria-hidden />
        </div>

        <div className="container relative z-10 py-14 md:py-20 lg:py-24">
          <div className="max-w-xl md:max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-foreground">
              Transforme seu Negócio com <span className="text-accent">Softwares Inteligentes</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Soluções de gestão empresarial, gestão escolar, sistema de leads e muito mais. Desenvolvidas para aumentar sua produtividade e lucratividade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/produtos">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full sm:w-auto">
                  Ver Produtos <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="https://wa.me/558599149141" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-foreground/20 bg-background/60 backdrop-blur-sm dark:bg-background/40"
                >
                  Solicitar Demonstração
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Produtos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para diferentes segmentos de negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Link key={product.id} href={`/produtos/${product.id}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      Saiba mais <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher BrunoInfoMais?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tecnologia Moderna",
                description: "Desenvolvido com as melhores práticas e tecnologias atuais",
              },
              {
                title: "Suporte Dedicado",
                description: "Equipe pronta para ajudar na implementação e uso",
              },
              {
                title: "Escalável",
                description: "Cresce com seu negócio, sem limitações",
              },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-6">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como podemos transformar seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/558599149141" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 w-full sm:w-auto">
                Fale com a Gente
              </Button>
            </a>
            <Link href="/produtos">
              <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 w-full sm:w-auto">
                Ver Produtos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
