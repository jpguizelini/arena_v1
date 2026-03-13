'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function SocialFeed() {

    const formatos = [
        { img: "/images/home/instagram1.jpg", title: "OUTDOOR" },
        { img: "/images/home/instagram2.jpg", title: "FRONT LIGHT", position: "80% center" },
        { img: "/images/home/instagram3.jpg", title: "RODOVIA" },
        { img: "/images/home/instagram4.jpg", title: "MOBILIÁRIO URBANO" },
        { img: "/images/home/instagram5.jpg", title: "PAINEL DIGITAL" },
        { img: "/images/home/instagram6.jpg", title: "MEGA PAINEL" },
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 mt-[29px]">
            <motion.h1
                className="text-[40px] sm:text-[76.04px] leading-none font-bebas font-bold mt-[8px]
                max-w-[170px] sm:max-w-[520px] ml-10 sm:ml-25 md:ml-30 lg:ml-39 lg:pl-[80px] xl:
                bg-linear-to-r from-[#079c9e] via-accent to-[#079c9e]
                bg-clip-text text-transparent uppercase text-left"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                SIGA NOSSO INSTAGRAM
            </motion.h1>

            <div className="relative w-full grid grid-cols-[251px] sm:grid-cols-[repeat(2,251px)] lg:grid-cols-[repeat(3,251px)] justify-center gap-x-[10px] gap-y-[10px]">
                <motion.div
                    className="pointer-events-none absolute right-8 sm:right-[100px] md:right-[130px] lg:right-[250px] top-[-80px] sm:top-[-152px] z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="relative w-[120px] h-[87px] sm:w-[180px] sm:h-[200px] md:w-[210px] md:h-[190px] lg:w-[240px] lg:h-[175px]">
                        <Image
                            src="/images/home/robo2.png"
                            alt="Robo"
                            fill
                            sizes="(max-width: 768px) 120px, 240px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>

                {formatos.map((formato, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                        <a
                            href="https://www.instagram.com/PERFIL-REAL"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Ver publicação no Instagram"
                        >
                            <div className="relative overflow-hidden w-[251px] h-[313px] group cursor-pointer">
                                <Image
                                    src={formato.img}
                                    alt={formato.title}
                                    fill
                                    sizes="(max-width: 768px) 251px, (max-width: 1024px) 502px, 753px"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </a>
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}