"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: "/images/Implante-icon.png",
    title: "Implante Dentário",
    description: "Solução definitiva para substituição de dentes.",
  },
  {
    icon: "/images/ortodontia-icon.png",
    title: "Ortodontia",
    description: "Alinhamento dos dentes e harmonia do sorriso.",
  },
  {
    icon: "/images/protocolo-icon.png",
    title: "Protocolo",
    description: "Reabilitação completa com segurança e estabilidade.",
  },
  {
    icon: "/images/estetica-dental-icon.png",
    title: "Estética Dental",
    description: "Harmonização do sorriso com naturalidade.",
  },
  {
    icon: "/images/odontopediatria-icon.png",
    title: "Odontopediatria",
    description: "Cuidado especializado para os pequenos.",
  },
  {
    icon: "/images/clareamento-icon.png",
    title: "Clareamento",
    description: "Dentes mais brancos com segurança e eficácia.",
  },
  {
    icon: "/images/tratamento-canal-icon.png",
    title: "Tratamento de Canal",
    description: "Alívio da dor e preservação do dente natural.",
  },
  {
    icon: "/images/prótese-icon.png",
    title: "Prótese Dentária",
    description: "Devolução da função e estética do sorriso.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section id="especialidades" className="w-full bg-bg">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-12 lg:py-28">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl font-light text-[#2F2925] sm:text-5xl">
            Odontologia Completa
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-16 bg-gold" />
            <span className="text-gold">✦</span>
            <span className="h-px w-16 bg-gold" />
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              className="group flex h-full flex-col items-center rounded-2xl border border-transparent bg-[#EFE9E3] p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 * (index % 4) }}
            >
              <div className="flex h-14 w-14 items-center justify-center transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_6px_rgba(184,151,58,0.45)]">
                <Image
                  src={service.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
              </div>

              <h3 className="mt-5 font-serif text-lg font-medium text-[#2F2925]">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#6F6964]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
