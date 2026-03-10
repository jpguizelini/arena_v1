import Image from "next/image"
import Card3D from "@/components/ui/Card3D"
import { motion } from "framer-motion"

export default function EmpresasGrupo() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <motion.h1 
                className="text-[53.15px] lg:text-[64px] font-bebas font-bold mt-[58px] bg-linear-to-r from-[#079c9e] via-accent to-[#079c9e] bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                EMPRESAS DO GRUPO
            </motion.h1>

            {/* Logo principal */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
                <Card3D className="group mt-10" glowClassName="pointer-events-none absolute inset-0 -z-10 opacity-0">
                    <div className="relative w-[353px] h-[143px] px-[40px] py-[26px] flex items-center justify-center rounded-[12px] transition-shadow duration-200 group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]">
                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="borderGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                    <stop offset="0%" stopColor="#c3d33f" />
                                    <stop offset="100%" stopColor="#079c9e" />
                                </linearGradient>
                            </defs>
                            <rect x="1" y="1" width="99%" height="99%" rx="12" ry="12" fill="none" stroke="url(#borderGradient)" strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />
                        </svg>
                        <Image src="/images/icons/imidia-logo.png" alt="logo imidia" width={273} height={91} className="w-full h-full object-contain relative z-10" />
                    </div>
                </Card3D>
            </motion.div>

            {/* 3 logos secundários com stagger */}
            <div className="flex flex-wrap items-center mt-[28px] justify-center gap-15">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                >
                    <Card3D className="group" glowClassName="pointer-events-none absolute inset-0 -z-10 opacity-0">
                        <div className="relative w-[262px] h-[143px] px-[40px] py-[26px] flex items-center justify-center bg-black rounded-[12px] transition-shadow duration-200 group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]">
                            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="borderGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="0%" stopColor="#c3d33f" />
                                        <stop offset="100%" stopColor="#079c9e" />
                                    </linearGradient>
                                </defs>
                                <rect x="1" y="1" width="99%" height="99%" rx="12" ry="12" fill="none" stroke="url(#borderGradient1)" strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />
                            </svg>
                            <Image src="/images/icons/imidia-painel-logo.png" alt="logo imidia" width={273} height={91} className="w-full h-full object-contain relative z-10" />
                        </div>
                    </Card3D>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                    <Card3D className="group" glowClassName="pointer-events-none absolute inset-0 -z-10 opacity-0">
                        <div className="relative w-[262px] h-[143px] px-[40px] py-[26px] flex items-center justify-center bg-black rounded-[12px] transition-shadow duration-200 group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]">
                            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="borderGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="0%" stopColor="#c3d33f" />
                                        <stop offset="100%" stopColor="#079c9e" />
                                    </linearGradient>
                                </defs>
                                <rect x="1" y="1" width="99%" height="99%" rx="12" ry="12" fill="none" stroke="url(#borderGradient2)" strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />
                            </svg>
                            <Image src="/images/icons/imidia-litoral-logo.png" alt="logo imidia" width={273} height={91} className="w-full h-full object-contain relative z-10" />
                        </div>
                    </Card3D>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
                >
                    <Card3D className="group" glowClassName="pointer-events-none absolute inset-0 -z-10 opacity-0">
                        <div className="relative w-[262px] h-[143px] px-[40px] py-[26px] flex items-center justify-center bg-black rounded-[12px] transition-shadow duration-200 group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]">
                            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="borderGradient3" x1="0%" y1="100%" x2="0%" y2="0%">
                                        <stop offset="0%" stopColor="#c3d33f" />
                                        <stop offset="100%" stopColor="#079c9e" />
                                    </linearGradient>
                                </defs>
                                <rect x="1" y="1" width="99%" height="99%" rx="12" ry="12" fill="none" stroke="url(#borderGradient3)" strokeWidth="4" strokeDasharray="2 8" strokeLinecap="round" />
                            </svg>
                            <Image src="/images/icons/live-led-logo.png" alt="logo imidia" width={273} height={91} className="w-full h-full object-contain relative z-10" />
                        </div>
                    </Card3D>
                </motion.div>

            </div>
        </div>
    )
}