import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Image as ImageIcon } from "lucide-react";
import { Link, useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const productDetails: Record<string, {
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  targetAudience: string;
}> = {
  "gestao-empresarial": {
    title: "Gestão Empresarial",
    description: "Sistema completo para controle de vendas, estoque, financeiro e processos empresariais",
    fullDescription: "O sistema de Gestão Empresarial foi desenvolvido para empresas que buscam centralizar todas as operações em uma única plataforma. Com funcionalidades avançadas de controle, relatórios e automação, você terá total visibilidade sobre seu negócio.",
    features: [
      "Controle de Vendas em Tempo Real",
      "Gestão Completa de Estoque",
      "Módulo Financeiro Integrado",
      "Relatórios Gerenciais Avançados",
      "Integração com Múltiplos Canais de Venda",
      "Backup Automático e Segurança de Dados",
      "Acesso via Web e Mobile",
      "Suporte Técnico 24/7",
    ],
    benefits: [
      "Aumento de 40% na produtividade",
      "Redução de 60% em erros operacionais",
      "Melhor controle financeiro",
      "Decisões baseadas em dados",
      "Escalabilidade conforme o crescimento",
    ],
    targetAudience: "Pequenas e médias empresas de varejo, comércio e serviços",
  },
  "sistema-leads": {
    title: "Sistema de Leads",
    description: "Plataforma inteligente para gerenciamento de prospecção, vendas e relacionamento com clientes",
    fullDescription: "Gerencie todos os seus leads em um único lugar. Com automação inteligente, você consegue acompanhar cada etapa do funil de vendas e aumentar suas taxas de conversão significativamente.",
    features: [
      "Captura Automática de Leads",
      "Pipeline de Vendas Customizável",
      "Automação de Email Marketing",
      "Análise de Conversão Detalhada",
      "Integração com Redes Sociais",
      "Relatórios de Desempenho",
      "Gestão de Tarefas e Acompanhamento",
      "API para Integrações Personalizadas",
    ],
    benefits: [
      "Aumento de 50% em conversões",
      "Redução de 70% no tempo de vendas",
      "Melhor qualificação de leads",
      "Acompanhamento automático",
      "Relatórios em tempo real",
    ],
    targetAudience: "Agências, consultórios, imobiliárias e empresas de vendas B2B",
  },
  "gestao-escolar": {
    title: "Gestão Escolar",
    description: "Solução integrada para administração educacional, alunos, professores e financeiro",
    fullDescription: "Simplifique a administração escolar com uma plataforma completa que integra alunos, professores, notas, financeiro e comunicação com pais. Tudo em um único lugar, acessível de qualquer dispositivo.",
    features: [
      "Gestão Completa de Alunos",
      "Controle de Notas e Frequência",
      "Comunicação com Pais em Tempo Real",
      "Módulo Financeiro Escolar",
      "Gestão de Professores e Turmas",
      "Calendário Acadêmico Integrado",
      "Relatórios de Desempenho",
      "Portal do Aluno e Responsável",
    ],
    benefits: [
      "Redução de 80% em tarefas administrativas",
      "Melhor comunicação com pais",
      "Acompanhamento de desempenho em tempo real",
      "Segurança de dados educacionais",
      "Conformidade com regulamentações",
    ],
    targetAudience: "Escolas, colégios, cursos e instituições educacionais",
  },
  "software-oficinas": {
    title: "Software para Oficinas",
    description: "Sistema especializado para controle de serviços, peças, agendamentos e clientes",
    fullDescription: "Gerencie sua oficina com eficiência. Controle de serviços, peças, agendamentos e clientes em uma plataforma intuitiva. Aumente a produtividade e a satisfação dos clientes.",
    features: [
      "Agendamento de Serviços",
      "Controle de Peças e Estoque",
      "Gestão de Clientes e Histórico",
      "Orçamentos e Notas Fiscais",
      "Acompanhamento de Serviços",
      "Relatórios de Faturamento",
      "Integração com Fornecedores",
      "App Mobile para Técnicos",
    ],
    benefits: [
      "Aumento de 35% em agendamentos",
      "Redução de 50% em tempo de serviço",
      "Melhor gestão de peças",
      "Aumento de satisfação dos clientes",
      "Controle financeiro preciso",
    ],
    targetAudience: "Oficinas mecânicas, elétricas, de informática e serviços em geral",
  },
  "personal-trainer": {
    title: "Software para Personal Trainers",
    description: "Plataforma completa para gestão de clientes, treinos, resultados e agendamentos",
    fullDescription: "Gerencie seus clientes, crie planos de treino personalizados, acompanhe resultados e agende sessões tudo em um único lugar. Ideal para personal trainers que querem profissionalizar seu negócio.",
    features: [
      "Gestão de Clientes e Fichas",
      "Criação de Planos de Treino",
      "Acompanhamento de Resultados",
      "Agendamento de Sessões",
      "Histórico de Treinos",
      "Cálculo de IMC e Métricas",
      "Relatórios de Progresso",
      "App Mobile para Clientes",
    ],
    benefits: [
      "Melhor organização de agenda",
      "Aumento de retenção de clientes",
      "Acompanhamento profissional",
      "Resultados mensuráveis",
      "Crescimento do negócio",
    ],
    targetAudience: "Personal trainers, academias, estúdios de fitness e profissionais de saúde",
  },
  "kds": {
    title: "KDS - Kitchen Display System",
    description: "Sistema de gerenciamento para restaurantes e cozinhas com controle de pedidos em tempo real",
    fullDescription: "O KDS é um sistema moderno de gerenciamento de cozinha que substitui os tradicionais comandas de papel. Com interface intuitiva e atualização em tempo real, otimiza o fluxo de pedidos da cozinha, reduz erros e aumenta a eficiência operacional.",
    features: [
      "Recebimento de Pedidos em Tempo Real",
      "Interface Intuitiva para Cozinheiros",
      "Controle de Status dos Pedidos",
      "Gestão de Fila de Produção",
      "Notificações Visuais e Sonoras",
      "Histórico de Pedidos",
      "Integração com PDV",
      "Dashboard de Desempenho",
    ],
    benefits: [
      "Redução de 70% em erros de pedidos",
      "Aumento de 40% na velocidade de entrega",
      "Melhor comunicação cozinha-salão",
      "Otimização do tempo de preparo",
      "Redução de desperdícios",
    ],
    targetAudience: "Restaurantes, bares, lanchonetes, cozinhas comerciais e serviços de alimentação",
  },
};

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const product = productDetails[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
            <Link href="/produtos">
              <Button>Voltar aos Produtos</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-accent/10 via-transparent to-transparent">
        <div className="container">
          <Link href="/produtos" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Voltar aos Produtos
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{product.fullDescription}</p>
        </div>
      </section>

      {/* Product Screenshots Placeholder */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Visualize o Produto</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-background border-2 border-dashed border-border rounded-lg aspect-video flex items-center justify-center"
              >
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Screenshot {i}</p>
                  <p className="text-sm text-muted-foreground mt-2">Espaço reservado para imagem do produto</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Funcionalidades Principais</h2>
              <ul className="space-y-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Benefícios</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <Card className="p-8 bg-accent text-accent-foreground">
            <h3 className="text-2xl font-bold mb-4">Para Quem é Ideal?</h3>
            <p className="text-lg opacity-90">{product.targetAudience}</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma demonstração gratuita e descubra como o {product.title} pode transformar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/558599149141" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                Solicitar Demonstração
              </Button>
            </a>
            <a href="https://wa.me/558599149141" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Fale com Especialista
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </div>
   );
}
