import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[85vh] w-full max-w-7xl flex-col items-center gap-12 px-6 py-12 lg:flex-row lg:items-center lg:gap-10 lg:px-12 lg:py-16"
    >
      {/* Coluna esquerda */}
      <div className="flex w-full flex-col items-center text-center opacity-0 animate-fade-up lg:w-[45%] lg:items-start lg:text-left">
        <h1 className="font-serif text-[2.75rem] font-normal leading-[1.05] text-text-primary sm:text-[3.5rem] lg:text-[4.25rem]">
          Sua saúde
          <br />
          completa em
          <br />
          um só lugar
        </h1>

        <p className="mt-6 max-w-sm text-center text-sm text-text-secondary lg:text-left">
          Atendimento multidisciplinar
          <br />
          para todas as fases da vida.
        </p>

        <div className="mt-8 flex w-full max-w-xs items-center justify-center gap-3 lg:justify-start">
          <span className="h-px flex-1 bg-gold" />
          <span className="flex items-center gap-2 whitespace-nowrap text-xs uppercase tracking-[0.2em] text-text-secondary">
            <Image
              src="/icons/localizacao.png"
              alt=""
              width={14}
              height={14}
              className="h-3.5 w-3.5 object-contain"
            />
            Urupês - SP
          </span>
          <span className="h-px flex-1 bg-gold" />
        </div>

        <a
          href="https://wa.me/55"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-medium text-white shadow-lg shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/30 sm:w-auto"
        >
          <Image
            src="/icons/whatsapp.png"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
          Falar no Whatsapp
        </a>
      </div>

      {/* Coluna direita */}
      <div className="w-full opacity-0 animate-fade-up animation-delay-200 lg:w-[55%]">
        <Image
          src="/images/imagem-hero-mobile.png"
          alt="Recepção da HS Clinic"
          width={694}
          height={644}
          priority
          sizes="100vw"
          className="mx-auto block h-auto w-full max-w-md lg:hidden"
        />
        <Image
          src="/images/imagem-hero.png"
          alt="Recepção da HS Clinic"
          width={830}
          height={858}
          priority
          sizes="55vw"
          className="hidden h-auto w-full lg:block"
        />
      </div>
    </section>
  );
}
