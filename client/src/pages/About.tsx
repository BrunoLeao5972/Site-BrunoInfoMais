import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Award, Zap, Users } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage="/sobre" />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/10 via-transparent to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a BrunoInfoMais</h1>
            <p className="text-lg text-muted-foreground">
              Somos uma empresa especializada no desenvolvimento de softwares de gestão empresarial de alta qualidade, focada em entregar soluções que transformam negócios.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Desenvolver softwares inteligentes que simplificam a gestão de negócios e aumentam a produtividade das empresas.
              </p>
            </Card>
            <Card className="p-8">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground">
                Ser a solução preferida de gestão empresarial para pequenas e médias empresas em todo o Brasil.
              </p>
            </Card>
            <Card className="p-8">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-4">Nossos Valores</h3>
              <p className="text-muted-foreground">
                Qualidade, inovação, transparência e compromisso com o sucesso dos nossos clientes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mais de uma década desenvolvendo soluções customizadas para diferentes segmentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Experiência em Desenvolvimento</h3>
              <ul className="space-y-4">
                {[
                  "Sistemas de Gestão Empresarial (ERP)",
                  "Plataformas de Gestão Escolar",
                  "Softwares para Varejo e Comércio",
                  "Sistemas de Gestão de Leads",
                  "Aplicações para Personal Trainers",
                  "Soluções para Oficinas e Serviços",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Tecnologias Utilizadas</h3>
              <ul className="space-y-4">
                {[
                  "React.js para interfaces modernas",
                  "Node.js e Express para backends robustos",
                  "Banco de dados MySQL e PostgreSQL",
                  "APIs RESTful e GraphQL",
                  "Arquitetura em nuvem escalável",
                  "Segurança e compliance em primeiro lugar",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Clientes Satisfeitos" },
              { number: "100+", label: "Projetos Entregues" },
              { number: "10+", label: "Anos de Experiência" },
              { number: "24/7", label: "Suporte Disponível" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Conheça Nossos Produtos</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Descubra como nossas soluções podem transformar seu negócio
          </p>
          <Link href="/produtos">
            <Button size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 gap-2">
              Ver Produtos <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
