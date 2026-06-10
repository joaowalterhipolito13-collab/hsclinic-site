import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Corpo Clínico", href: "#corpo-clinico" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  return (
    <header className="w-full h-[90px] flex items-center bg-bg">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="#home" className="flex items-center">
          <Image
            src="/images/logo.png"
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

        <div className="lg:w-[140px]" aria-hidden="true" />
      </div>
    </header>
  );
}
