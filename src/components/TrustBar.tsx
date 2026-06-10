import Image from "next/image";
import { asset } from "@/lib/paths";

interface TrustItem {
  icon: string;
  label?: string;
  value: string;
  sublabel?: string;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: "/images/desde2015-icon-marrom.png",
    label: "Desde",
    value: "2015",
  },
  {
    icon: "/images/especialistas-icon-marrom.png",
    value: "+14",
    sublabel: "Especialistas",
  },
  {
    icon: "/images/especialidades-icon-marrom.png",
    value: "+10",
    sublabel: "Especialidades",
  },
  {
    icon: "/images/localização-icon-marrom.png",
    value: "URUPÊS-SP",
  },
];

function TrustItemContent({ item, showDivider }: { item: TrustItem; showDivider: boolean }) {
  return (
    <>
      {showDivider && (
        <span className="hidden h-[70%] w-px self-center bg-[rgba(184,151,58,0.35)] sm:block" />
      )}
      <div className="flex w-full flex-col items-center justify-center gap-2 px-4 py-6 text-center transition-opacity duration-300 hover:opacity-80 sm:py-10">
        <Image
          src={asset(item.icon)}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />

        {item.label && (
          <span className="text-xs font-light uppercase tracking-[0.2em] text-gold">
            {item.label}
          </span>
        )}

        <span className="font-serif text-2xl font-medium leading-tight text-gold sm:text-3xl">
          {item.value}
        </span>

        {item.sublabel && (
          <span className="text-xs font-light uppercase tracking-[0.2em] text-gold">
            {item.sublabel}
          </span>
        )}
      </div>
    </>
  );
}

export default function TrustBar() {
  return (
    <section className="w-full bg-[#E8D8C5]">
      {/* Mobile: carrossel automático infinito */}
      <div className="overflow-hidden py-6 sm:hidden">
        <div className="flex w-max animate-marquee">
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, index) => (
            <div key={index} className="flex w-[50vw] flex-none items-center">
              <TrustItemContent item={item} showDivider={index % TRUST_ITEMS.length > 0} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop/tablet: grade estática com divisores */}
      <div className="mx-auto hidden w-full max-w-7xl sm:grid sm:min-h-[200px] sm:grid-cols-4 sm:items-stretch sm:gap-0 sm:px-6 lg:px-12">
        {TRUST_ITEMS.map((item, index) => (
          <div key={item.value} className="flex flex-1 items-center">
            <TrustItemContent item={item} showDivider={index > 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
