
import { Button } from "@/components/ui/button";
import Card3D from "@/components/ui/Card3D";
import { motion } from 'framer-motion';



export default function Mapeamento() {
    return (
        <section>
            <div className="w-full flex flex-col py-16">
                <Card3D
                    className="group relative mx-4 sm:mx-8 md:mx-16 lg:mx-[200px] mt-6"
                    glowClassName="pointer-events-none absolute inset-0 -z-10 opacity-0"
                >
                    <div className="relative px-4 sm:px-6 md:px-8 pt-8 pb-10 text-center bg-black rounded-xl transition-shadow duration-200 group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]">
                    {/* Borda SVG - sempre acompanha o tamanho do container */}
                    <svg
                        className="absolute inset-0 w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="mappingBorderGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#c3d33f" />
                                <stop offset="100%" stopColor="#079c9e" />
                            </linearGradient>
                        </defs>
                        <rect
                            x="1" y="1"
                            width="99%" height="99%"
                            rx="12" ry="12"
                            fill="none"
                            stroke="url(#mappingBorderGradient)"
                            strokeWidth="3"
                            strokeDasharray="2 8"
                            strokeLinecap="round"
                        />
                    </svg>

                    <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                        <motion.h1 
                            className="
                            text-[40px] sm:text-[55px] md:text-[70px] 
                            font-bebas
                            font-regular 
                            mb-2
                            
                            bg-gradient-to-r 
                            from-[#c3d33f] 
                            to-[#079c9e]
                            bg-clip-text
                            text-transparent uppercase"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >Mapeamento</motion.h1>

                        <motion.p 
                            className="font-goldplay text-white text-[18px] sm:text-[22px] md:text-[28px] leading-relaxed mb-8 break-words"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Quer saber como seu negócio pode se destacar<br className="hidden md:inline" />com os melhores espaços publicitários?
                        </motion.p>
                        
                        <motion.p 
                            className="font-goldplay text-white text-[18px] sm:text-[22px] md:text-[28px] leading-relaxed mb-8 break-words"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            Acesse nosso <span className="font-bebas text-[24px] sm:text-[30px] md:text-[38px] font-regular uppercase">mapeamento</span> e descubra<br className="hidden md:inline" /><span className="font-bebas text-[24px] sm:text-[30px] md:text-[38px] font-regular uppercase">todas as opções de impacto que a I'mídia oferece!</span>
                        </motion.p>
                    </motion.div>
                    
                    <motion.div 
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                >
                        <Button
                            variant="gradient"
                            className="font-bebas text-[32px] sm:text-[45px] md:text-[63px] px-4 sm:px-5 md:px-6 py-6 sm:py-8 md:py-10 rounded-lg"
                        >
                            BAIXE AQUI!
                        </Button>
                    </motion.div>
                </div>
                </Card3D>
            </div>
        </section>
    )
}
