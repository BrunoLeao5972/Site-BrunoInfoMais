import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/produtos", label: "Produtos" },
    { href: "/cliente", label: "Área do Cliente" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link
          href="/"
          className="flex items-center bg-transparent py-1 shrink-0 min-w-0 max-w-[min(100%,16rem)] sm:max-w-[18rem] md:max-w-none"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/images/logo-bruno-info.png"
            alt="BrunoINFO+ — ir para a página inicial"
            className="h-7 w-auto max-h-8 max-w-full bg-transparent sm:h-8 sm:max-h-9 md:h-9 object-contain object-left"
            width={220}
            height={48}
            decoding="async"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                currentPage === item.href
                  ? "text-accent"
                  : "hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="https://wa.me/558599149141" target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Fale Conosco
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-sm font-medium transition ${
                  currentPage === item.href
                    ? "text-accent"
                    : "hover:text-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="https://wa.me/558599149141" target="_blank" rel="noopener noreferrer" className="block pt-2">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Fale Conosco
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
