'use client'

import { motion } from 'framer-motion';
import GradientText from "@/components/ui/GradientText";
import Image from "next/image";
import { stagger, fadeUp, scaleFade, fadeLeft, vp } from '@/lib/animations';

export default function MosaicoDigital() {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
            <motion.div className="mb-12" variants={scaleFade} initial="hidden" whileInView="show" viewport={vp}>
                <GradientText 
                    className="text-7xl"
                    animated={false}
                    variants={scaleFade}
                >
                    MOSAICO DIGITAL
                </GradientText>
            </motion.div>

            <motion.p 
                className="text-center text-white font-goldplay text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight mx-auto max-w-4xl lg:max-w-6xl mb-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={vp}
            >
                O Mosaico Digital é um painel icônico composto por painéis integrados,
                formando uma superfície contínua de grande impacto visual.
                Ele é projetado para entregar alta visibilidade, escalabilidade de
                conteúdo e flexibilidade criativa em um único ponto de mídia.
            </motion.p>

            <motion.div 
                className="overflow-hidden mb-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={vp}
            >
                <Image
                    src="/images/formatos/mosaico-digital.jpg"
                    alt="Mosaico Digital I'mídia em ambiente urbano"
                    width={1600}
                    height={900}
                    sizes="100vw"
                    className="w-full mx-auto"
                />
            </motion.div>

            <motion.h2 
                className="text-7xl text-white font-bebas font-bold text-center mb-12"
                variants={scaleFade}
                initial="hidden"
                whileInView="show"
                viewport={vp}
            >
                Como funciona?
            </motion.h2>

            <motion.p 
                className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight text-center mx-auto max-w-4xl lg:max-w-6xl mb-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={vp}
            >
                Com tecnologia digital de alto brilho e resolução, o Mosaico Digital permite a exibição
                de conteúdos amplos (vídeos, animações, imagens dinâmicas) que se destacam na
                paisagem urbana, capturando a atenção tanto de pedestres quanto de motoristas.
            </motion.p>

            <div className="relative h-[450px] w-full mb-12">
                <Image
                    src="/images/formatos/iconico-2.jpg"
                    alt="Mosaico Digital em ponto estratégico"
                    fill
                    sizes="100vw"
                    className="object-cover object-[62%_center] lg:object-[50%_10%]"
                />
                <div
                    className="absolute left-0 top-0 w-full md:w-3/4 h-full"
                    style={{
                        background: 'radial-gradient(ellipse 100% 300% at -10% 50%, rgba(168, 201, 60, 1) 0%, rgba(61, 151, 98, 0.95) 60%, rgba(0, 104, 105, 0.7) 80%, rgba(0, 0, 0, 0) 100%)'
                    }}
                />
                <motion.div
                    className="absolute inset-0 flex flex-col items-start justify-start px-16 py-12"
                    variants={stagger(0.15, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={vp}
                >
                    <motion.h2 
                        variants={fadeLeft} 
                        className="text-5xl lg:text-7xl text-white font-bebas font-bold mb-4"
                    >
                        POR QUE É ICÔNICO?
                    </motion.h2>
                    <motion.ul
                        variants={stagger(0.05)}
                        className="list-disc list-inside text-white font-goldplay text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed space-y-2"
                    >
                        {['Tecnologia híbrida 2D + 3D', 'Impacto visual diferenciado', 'Possibilita conteúdos criativos e interativos', 'Capta atenção em ambientes de alto fluxo'].map((item, i) => (
                            <motion.li key={i} variants={fadeUp}>{item}</motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-[60%_40%]"
                variants={stagger(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={vp}
            >
                <motion.div className="flex flex-col justify-center gap-6 text-white py-12" variants={fadeUp}>
                    <motion.p 
                        className="font-goldplay text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight"
                        variants={fadeUp}
                    >
                        Os formatos icônicos da I'mídia Painéis <strong>não são apenas "mais um painel"</strong>.<br/>
                        Eles representam soluções pensadas para campanhas que exigem resultados maiores:
                    </motion.p>
                    <motion.ul 
                        className="font-goldplay text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed space-y-3"
                        variants={stagger(0.05)}
                    >
                        {[
                            'Experiência visual superior',
                            'Altíssimo impacto e lembrança de marca',
                            'Conteúdos que se destacam no ambiente urbano',
                            'Flexibilidade para campanhas criativas e inovadoras'
                        ].map((item, i) => (
                            <motion.li key={i} variants={fadeUp} className="flex items-start gap-2">
                                <span className="text-[#a8c93c] mt-1">•</span>
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                <motion.div 
                    className="relative min-h-[500px] md:min-h-[600px]"
                    variants={fadeUp}
                >
                    <Image
                        src="/images/formatos/imagem-lateral.jpg"
                        alt="Mosaico Digital instalado em via urbana"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover object-[80%_50%]"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}