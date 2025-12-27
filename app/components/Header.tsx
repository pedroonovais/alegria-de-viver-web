"use client";

import { useState } from "react";

/**
 * Componente de navegação principal do site
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log("Menu mobile:", !isMobileMenuOpen ? "aberto" : "fechado");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/95 backdrop-blur-sm border-b border-[#f4ede7]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3">
        <div className="flex items-center justify-between whitespace-nowrap">
          {/* Logo */}
          <div className="flex items-center gap-3 text-text-main">
            <div className="text-primary size-8 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">
                volunteer_activism
              </span>
            </div>
            <h2 className="text-text-main text-lg font-bold leading-tight tracking-[-0.015em]">
              Alegria de Viver
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-8">
              <a
                className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Início
              </a>
              <a
                className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Sobre Nós
              </a>
              <a
                className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Projetos
              </a>
              <a
                className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Contato
              </a>
            </nav>
            <button
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-sm"
              onClick={() => console.log("Botão Como Doar clicado")}
            >
              <span className="truncate">Como Doar</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-text-main">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="cursor-pointer"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#f4ede7] pt-4">
            <nav className="flex flex-col gap-4">
              <a
                className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </a>
              <a
                className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a
                className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projetos
              </a>
              <a
                className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>
              <button
                className="flex w-full items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-sm mt-2"
                onClick={() => {
                  console.log("Botão Como Doar clicado");
                  setIsMobileMenuOpen(false);
                }}
              >
                Como Doar
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

