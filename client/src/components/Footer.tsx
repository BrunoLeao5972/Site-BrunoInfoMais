import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">BrunoInfoMais</h3>
            <p className="text-sm opacity-75">Softwares de gestão empresarial de alta qualidade</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/produtos/ecommerce" className="opacity-75 hover:opacity-100">E-Commerce</Link></li>
              <li><Link href="/produtos/sistema-leads" className="opacity-75 hover:opacity-100">Sistema de Leads</Link></li>
              <li><Link href="/produtos/gestao-escolar" className="opacity-75 hover:opacity-100">Gestão Escolar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre" className="opacity-75 hover:opacity-100">Sobre</Link></li>
              <li><Link href="/produtos" className="opacity-75 hover:opacity-100">Produtos</Link></li>
              <li><a href="tel:+558599149141" className="opacity-75 hover:opacity-100">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/558599149141" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100">WhatsApp: (85) 99914-9141</a></li>
              <li><a href="https://instagram.com/brunoinfomais" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100">Instagram: @brunoinfomais</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2026 BrunoInfoMais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
