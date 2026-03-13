'use client'

import Link from "next/link";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

type FooterColumn = {
    title: string;
    lines: string[];
};

const columns: FooterColumn[] = [
    {
        title: "RIBEIRÃO PRETO - SP",
        lines: ["Av. Alcceu de P. Arantes, 149", "Planalto Verde", "(16) 3443.8505"],
    },
    {
        title: "ARARAQUARA - SP",
        lines: ["Rua Expedicionários", "do Brasil, 3371", "Vila Yamada", "(16) 3322.9676"],
    },
    {
        title: "SÃO PAULO - SP",
        lines: ["Rua Itápolis, 669", "Bloco B | Higienópolis", "Funcionários", "(11) 3661.7200"],
    },
    {
        title: "BELO HORIZONTE - MG",
        lines: ["Rua Pernambuco", "488 - Sala 202", "(31) 99972.3939"],
    },
    {
        title: "SANTOS - SP",
        lines: ["Av. Senador Pinheiro", "Machado, 30 - Sala 171", "Vila Matias", "(11) 98268.8768"],
    },
];

export default function Footer() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    
    return (
        <>
            <footer className="relative">
                <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-10">
                    <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-5">
                        {columns.map((col, index) => (
                            <div key={col.title} className={`space-y-0 text-center ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}>
                                <p className="font-bebas text-[20px] sm:text-[25px] font-bold leading-none tracking-wide text-white">
                                    {col.title}
                                </p>
                                <div className="mt-1 space-y-0 font-bebas text-[16px] sm:text-[18px] leading-none text-white/80">
                                    {col.lines.map((line, idx) => (
                                        <p key={`${col.title}-${idx}`}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 sm:mt-10 flex justify-center gap-4">
                        <Link
                            href="https://www.linkedin.com/company/SLUG-REAL"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 sm:gap-3 rounded-md border-2 border-white/60 px-4 sm:px-5 py-2 sm:py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            <Image src="/images/icons/linkedin.png" alt="" aria-hidden="true" width={28} height={28} className="h-6 w-6 sm:h-7 sm:w-7" />
                            <span className="tracking-wide font-bebas text-[20px] sm:text-[28px]">SIGA NOSSO LINKEDIN</span>
                        </Link>
                        {!isHome && (
                            <Link
                                href="https://www.instagram.com/PERFIL-REAL"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-2 sm:gap-3 rounded-md border-2 border-white/60 px-4 sm:px-5 py-2 sm:py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                <Image src="/images/icons/instagram.png" alt="" aria-hidden="true" width={28} height={28} className="h-6 w-6 sm:h-7 sm:w-7" />
                                <span className="tracking-wide font-bebas text-[20px] sm:text-[28px]">SIGA NOSSO INSTAGRAM</span>
                            </Link>
                        )}
                    </div>
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="absolute -top-8 sm:-top-12 md:-top-16 left-1/2 -translate-x-1/2 z-20"
                >
                    <div className="rounded-lg bg-linear-to-r from-accent to-cyan px-3 sm:px-4 py-1 sm:py-1 font-bebas text-[35px] sm:text-[45px] md:text-[55px] font-regular uppercase tracking-wide text-white shadow-lg leading-tight">
                        CONTATO
                    </div>
                </motion.div>
            </footer>
        </>
    );
}