"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section id="sobre" className="w-full bg-bg">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:py-28">
        {/* Coluna esquerda */}
        <motion.div
          className="w-full max-w-md lg:w-[45%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[160px] rounded-b-3xl">
            <Image
              src="/images/Foto Ana Victoria.png"
              alt="Dra. Ana Victória"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Coluna direita */}
        <div className="flex w-full flex-col items-center text-center lg:w-[55%] lg:items-start lg:text-left">
          <motion.h2
            className="font-serif text-4xl font-light leading-[1.15] text-[#2F2925] sm:text-5xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            A clínica que nasceu
            <br />
            para cuidar de você
          </motion.h2>

          <motion.div
            className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-[#6F6964] sm:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              A HS Clinic nasceu em 2015, em Urupês, com um propósito claro:
              oferecer saúde de forma completa, integrada e humanizada.
            </p>
            <p>
              Idealizada pela Dra. Ana Victória, cirurgiã-dentista e
              apaixonada pelo cuidado integral, a clínica reúne especialistas
              de diversas áreas para atender você em todas as fases da vida.
            </p>
            <p>
              Mais do que tratamentos, entregamos experiências acolhedoras,
              com excelência técnica e olhar individualizado para o que
              realmente importa: o seu bem-estar.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex w-full max-w-md flex-col items-center gap-6 lg:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="flex w-full items-center gap-3">
              <span className="h-px flex-1 bg-gold" />
              <span className="text-gold">✦</span>
              <span className="h-px flex-1 bg-gold" />
            </div>

            <p className="font-serif text-lg italic leading-relaxed text-gold sm:text-xl">
              &ldquo;Cuidar vai muito além de tratar dentes.
              <br />
              É acolher, planejar e transformar.&rdquo;
            </p>
          </motion.div>
        </div>

        <Image
          src="/images/hs-monograma.svg"
          alt=""
          width={70}
          height={70}
          className="pointer-events-none absolute bottom-6 right-6 hidden opacity-20 lg:block"
        />
      </div>
    </section>
  );
}
