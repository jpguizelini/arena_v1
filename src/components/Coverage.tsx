import { Button } from "@/components/ui/button";
import Card3D from "@/components/ui/Card3D";
import { motion } from "framer-motion";
import type { ReactNode } from 'react';

interface CoverageProps {
    description?: ReactNode;
}

const cities = [
  { name: "Araçatuba" }, { name: "Aramina" },
  { name: "Araraquara", bold: true }, { name: "Barretos" },
  { name: "Batatais" }, { name: "Bauru", bold: true },
  { name: "Birigui" }, { name: "Brodowski" }, { name: "Buritizal" },
  { name: "Campinas" }, { name: "Franca", bold: true }, { name: "Guará" },
  { name: "Iguarapava" }, { name: "Ipuã" }, { name: "Ituverava" },
  { name: "Jardinópolis" }, { name: "Jeriquara" }, { name: "Jundiaí" },
  { name: "Miguelópolis" }, { name: "Monte Azul Paulista" }, { name: "Morro Agudo" },
  { name: "Nuporanga" }, { name: "Orlândia" }, { name: "Osasco" },
  { name: "Pedregulho" }, { name: "Ribeirão Preto", bold: true },
  { name: "Sales Oliveira" }, { name: "São Carlos", bold: true },
  { name: "São Joaquim da Barra" }, { name: "São José do Rio Preto" },
  { name: "Sertãozinho" }, { name: "Sumaré" },
  { name: "Guarujá", bold: true }, { name: "Santos", bold: true },
  { name: "São Vicente", bold: true }, { name: "Praia Grande", bold: true },
];

export default function Coverage({ description }: CoverageProps) {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <motion.h1
                className="text-[45px] sm:text-[47px] md:text-[52px] lg:text-[60px] xl:text-[65px] 2xl:text-[70px] font-bebas font-bold leading-none m-0 p-0 mt-[68px] bg-gradient-to-r from-accent via-[#079c9e] to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                NOSSA COBERTURA
            </motion.h1>

            <motion.p
                className="text-[20px] sm:text-[21px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] font-goldplay text-white text-center px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                {description}
            </motion.p>

            <Card3D className="group relative mx-[57px] mt-[15px]" glowClassName="pointer-events-none absolute inset-0 -z-10 opacity-0">
                <div className="relative px-8 pt-8 pb-10 text-center transition-shadow duration-200 group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)] bg-black rounded-xl">
                    <svg
                        className="pointer-events-none absolute inset-0 w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="borderGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#c3d33f" />
                                <stop offset="100%" stopColor="#079c9e" />
                            </linearGradient>
                        </defs>
                        <rect
                            x="2" y="2"
                            width="calc(100% - 4px)" height="calc(100% - 4px)"
                            rx="12" ry="12"
                            fill="none"
                            stroke="url(#borderGradient)"
                            strokeWidth="3"
                            strokeDasharray="2 8"
                            strokeLinecap="round"
                        />
                    </svg>

                    <div className="relative z-10 mt-[13px] mb-[2px] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]">

                        {/* MOBILE: flex-wrap até lg */}
                        <motion.div
                            className="flex lg:hidden flex-wrap justify-center gap-x-2 gap-y-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {cities.map((city, i) => (
                                <span key={city.name} className="text-white leading-7 whitespace-nowrap">
                                    {city.bold
                                        ? <b className="text-[17px] sm:text-[19px] md:text-[21px]">{city.name}</b>
                                        : city.name
                                    }
                                    {i < cities.length - 1 && (
                                        <span className="text-white/40 ml-2">·</span>
                                    )}
                                </span>
                            ))}
                        </motion.div>

                        {/* DESKTOP: layout original a partir do lg */}
                        <motion.p
                            className="hidden lg:block text-white leading-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                        >
                            Araçatuba  ·  Aramina  ·  <b className="text-[24px] xl:text-[26px] 2xl:text-[28px]">Araraquara</b>  ·  Barretos  ·  Batatais  ·  <b className="text-[24px] xl:text-[26px] 2xl:text-[28px]">Bauru</b>  ·  Birigui  ·  Brodowski  ·  Buritizal
                            <br />
                            Campinas  ·  <b className="text-[24px] xl:text-[26px] 2xl:text-[28px]">Franca</b>  ·  Guará  ·  Iguarapava  ·  Ipuã  ·  Ituverava  ·  Jardinópolis  ·  Jeriquara  ·  Jundiaí  ·  Miguelópolis
                            <br />
                            Monte Azul Paulista  ·  Morro Agudo  ·  Nuporanga  ·  Orlândia  ·  Osasco  ·  Pedregulho  ·  <b className="text-[24px] xl:text-[26px] 2xl:text-[28px]">Ribeirão Preto</b>
                            <br />
                            Sales Oliveira  ·  <b className="text-[24px] xl:text-[26px] 2xl:text-[28px]">São Carlos</b>  ·  São Joaquim da Barra  ·  São José do Rio Preto  ·  Sertãozinho  ·  Sumaré
                            <br />
                            <b className="text-[24px] xl:text-[26px] 2xl:text-[28px]">Guarujá</b>  ·  <b className="text-[24px] xl:text-[26px] 2xl:text-[28px]">Santos</b>  ·  <b className="text-[24px] xl:text-[26px] 2xl:text-[28px]">São Vicente</b>  ·  <b className="text-[24px] xl:text-[26px] 2xl:text-[28px]">Praia Grande</b>
                        </motion.p>

                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 bg-dark">
                        <Button
                            variant="outline"
                            className="text-primary bg-white font-bebas text-[25.55px] sm:text-[27px] md:text-[29px] lg:text-[32px] xl:text-[34px] 2xl:text-[36px] py-6 hover:bg-accent hover:text-dark rounded-lg"
                        >
                            OPÇÕES NA MINHA CIDADE
                        </Button>
                    </div>
                </div>
            </Card3D>
        </div>
    );
}