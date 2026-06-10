"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/paths";

const NAV_LINKS = [
  { label: "Início", href: "#home" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Corpo Clínico", href: "#corpo-clinico" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-bg">
      <div className="mx-auto flex h-[90px] w-full max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="#home" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
          <Image
            src={asset("/images/logo.png")}
            alt="HS Clinic"
            width={140}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs font-light uppercase tracking-[0.2em] text-text-primary transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block lg:w-[140px]" aria-hidden="true" />

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-text-primary transition-transform duration-300 ${
              isMenuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text-primary transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-text-primary transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        className={`overflow-hidden bg-bg transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 px-6 pb-8 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-light uppercase tracking-[0.2em] text-text-primary transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
