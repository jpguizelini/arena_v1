import { Button } from "@/components/ui/button";
import Card3D from "@/components/ui/Card3D";
import { motion } from "framer-motion";
import type { ReactNode } from 'react';

interface CoverageProps {
    description?: ReactNode;
}


export default function Coverage({description}: CoverageProps) {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <motion.h1 
                className="text-[45.07px] lg:text-[60px] font-bebas font-bold leading-none m-0 p-0 mt-[68px] bg-linear-to-r from-accent via-[#079c9e] to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                NOSSA COBERTURA
            </motion.h1>

            <motion.p 
                className="text-[19.94px] lg:text-[24px] font-goldplay text-white text-center px-4 sm:px-0"
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

                    <div className="relative z-10 mt-[13px] mb-[2px] flex flex-col text-[15px] lg:text-[18px]">
                        <motion.p
                            className="text-white leading-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                        >
                            Araçatuba  ·  Aramina  ·  <b className="text-[20px] lg:text-[24px]">Araraquara</b>  ·  Barretos  ·  Batatais  ·  <b className="text-[20px] lg:text-[24px]">Bauru</b>  ·  Birigui  ·  Brodowski  ·  Buritizal
                        </motion.p>
                        <motion.p
                            className="text-white leading-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                        >
                            Campinas  ·  <b className="text-[20px] lg:text-[24px]">Franca</b>  ·  Guará  ·  Iguarapava  ·  Ipuã  ·  Ituverava  ·  Jardinópolis  ·  Jeriquara  ·  Jundiaí  ·  Miguelópolis
                        </motion.p>
                        <motion.p
                            className="text-white leading-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.30, ease: "easeOut" }}
                        >
                            Monte Azul Paulista  ·  Morro Agudo  ·  Nuporanga  ·  Orlândia  ·  Osasco  ·  Pedregulho  ·  <b className="text-[20px] lg:text-[24px]">Ribeirão Preto</b>
                        </motion.p>
                        <motion.p
                            className="text-white leading-8 "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
                        >
                            Sales Oliveira  ·  <b className="text-[20px] lg:text-[24px]">São Carlos</b>  ·  São Joaquim da Barra  ·  São José do Rio Preto  ·  Sertãozinho  ·  Sumaré
                        </motion.p>
                        <motion.p
                            className="text-white leading-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.60, ease: "easeOut" }}
                        >
                            <b className="text-[20px] lg:text-[24px]">Guarujá</b>  ·  <b className="text-[20px] lg:text-[24px]">Santos</b>  ·  <b className="text-[20px] lg:text-[24px]">São Vicente</b>  ·  <b className="text-[20px] lg:text-[24px]">Praia Grande</b>
                        </motion.p>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 bg-dark">
                        <Button
                            variant="outline"
                            className="text-primary bg-white font-bebas text-[25.55px] lg:text-[32px] py-6 hover:bg-accent hover:text-dark rounded-lg"
                        >
                            OPÇÕES NA MINHA CIDADE
                        </Button>
                    </div>
                </div>
            </Card3D>
        </div>
    );
}