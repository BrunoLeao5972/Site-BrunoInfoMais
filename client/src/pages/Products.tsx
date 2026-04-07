import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Users, Zap, Database } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const products = [
  {
    id: "gestao-empresarial",
    title: "Gestão Empresarial",
    description: "Sistema completo para controle de vendas, estoque, financeiro e processos empresariais",
    features: ["Controle de Vendas", "Gestão de Estoque", "Financeiro", "Relatórios Gerenciais"],
    icon: Code2,
  },
  {
    id: "sistema-leads",
    title: "Sistema de Leads",
    description: "Plataforma inteligente para gerenciamento de prospecção, vendas e relacionamento com clientes",
    features: ["Gestão de Leads", "Pipeline de Vendas", "Automação de Email", "Análise de Conversão"],
    icon: Users,
  },
  {
    id: "gestao-escolar",
    title: "Gestão Escolar",
    description: "Solução integrada para administração educacional, alunos, professores e financeiro",
    features: ["Gestão de Alunos", "Controle de Notas", "Financeiro Escolar", "Comunicação com Pais"],
    icon: Zap,
  },
  {
    id: "software-oficinas",
    title: "Software para Oficinas",
    description: "Sistema especializado para controle de serviços, peças, agendamentos e clientes",
    features: ["Agendamento de Serviços", "Controle de Peças", "Gestão de Clientes", "Orçamentos"],
    icon: Code2,
  },
  {
    id: "personal-trainer",
    title: "Software para Personal Trainers",
    description: "Plataforma completa para gestão de clientes, treinos, resultados e agendamentos",
    features: ["Gestão de Clientes", "Planos de Treino", "Acompanhamento de Resultados", "Agendamento"],
    icon: Users,
  },
  {
    id: "kds",
    title: "KDS - Kitchen Display System",
    description: "Sistema de gerenciamento para restaurantes e cozinhas com controle de pedidos em tempo real",
    features: ["Pedidos em Tempo Real", "Interface Intuitiva", "Controle de Status", "Integração com PDV"],
    icon: Database,
  },
];

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage="/produtos" />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/10 via-transparent to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Produtos</h1>
            <p className="text-lg text-muted-foreground">
              Soluções completas e integradas para diferentes segmentos de negócio. Escolha a solução ideal para seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Link key={product.id} href={`/produtos/${product.id}`}>
                  <Card className="p-8 hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{product.description}</p>
                    
                    <div className="mb-6">
                      <p className="text-sm font-semibold mb-3 text-foreground">Principais funcionalidades:</p>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-accent font-medium">
                      Ver Detalhes <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Não encontrou o que procura?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Podemos desenvolver uma solução customizada para suas necessidades específicas
          </p>
          <a href="https://wa.me/558599149141" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Solicitar Solução Customizada
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
