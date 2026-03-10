import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Transformando() {
    return (
        <section className="relative z-20 w-full mb-20 pt-[110px] min-h-[600px]">

            <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 md:grid-cols-2">
                {/* Lado esquerdo - Texto */}
                <div className="flex flex-col justify-center px-14 sm:px-12 md:px-10 lg:pl-10 xl:pl-30 py-[82px]">
                    <motion.h1
                        className="
                        text-[53.09px]
                        lg:text-[64px]
                        font-bebas
                        font-bold 
                        leading-none
                        mb-4
                        bg-linear-to-r
                        from-[#079c9e]
                        via-accent  
                        to-[#079c9e]
                        bg-clip-text
                        text-transparent
                        text-center sm:text-left
                    "
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        TRANSFORMANDO ESPAÇOS EM OPORTUNIDADES
                    </motion.h1>

                    <motion.p 
                        className="text-[16px] lg:text-[18px] font-goldplay text-white text-center sm:text-left md:text-left leading-snug pr-0 sm:pr-18 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        A Inteligência de Mídia é um grupo de empresas
                        de Mídia OOH (Out Of Home). Somos uma força
                        criativa que ilumina o cenário publicitário.
                        Nossa atuação abrange desde a elaboração de
                        estratégias bem planejadas até a veiculação eficaz
                        de mídias em todo o território nacional.
                        <br /><br />
                        Somos reconhecidos como a maior empresa em
                        abrangência, atendendo a um vasto número de cidades
                        no segmento de OOH e DOOH no interior e litoral paulista.
                        <br /><br />
                        Com mais de 20 anos de experiência no mercado, nosso
                        compromisso é ajudar as marcas a se destacarem de forma
                        cativante, tornando sua marca uma referência no mercado.
                    </motion.p>

                    <motion.div 
                        className="text-center sm:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Button
                            variant="outline"
                            className="text-primary bg-white font-bebas text-[25.55px] lg:text-[30px] hover:bg-accent hover:text-dark px-6 py-6 rounded-lg"
                        >
                            DÚVIDAS E INFORMAÇÕES
                        </Button>
                    </motion.div>
                </div>

                {/* Lado direito - Imagem */}
                <div className="relative min-h-[400px] w-full h-full md:min-h-full overflow-visible">
                    <Image
                        src="/images/home/espacos-oportunidades.jpeg"
                        alt="Espaços Oportunidades"
                        fill
                        className="object-contain object-center md:object-center md:ml-3"
                    />
                </div>
            </div>

            <div className="pointer-events-none absolute right-4 md:right-0 bottom-0 z-10 translate-y-[40%] sm:translate-y-[40%] md:translate-y-[82%]">
                <div className="relative w-[100px] sm:w-[120px] md:w-[134px] h-[280px] sm:h-[330px] md:h-[370px]">
                    <Image
                        src="/images/home/robo1.png"
                        alt="Robo"
                        fill
                        className="object-center"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}