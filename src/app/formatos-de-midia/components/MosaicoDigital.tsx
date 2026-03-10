'use client'

import GradientText from "@/components/ui/GradientText";
import Image from "next/image";


export default function MosaicoDigital() {
    return (
            <div className="pb-16">
                <GradientText className="text-7xl">
                    MOSAICO DIGITAL
                </GradientText>
                <p className="text-center text-white font-goldplay mx-auto max-w-4xl lg:text-2xl mt-4">
                    O Mosaico Digital é um painel icônico composto por painéis integrados,
                    formando uma superfície contínua de grande impacto visual.
                    Ele é projetado para entregar alta visibilidade, escalabilidade de
                    conteúdo e flexibilidade criativa em um único ponto de mídia.
                </p>
                <Image
                    src="/images/formatos/mosaico-digital.jpg"
                    alt="Banca Digital"
                    width={1600}
                    height={900}
                    className="w-full mx-auto  mt-16"
                />
                <h2 className="text-7xl text-white font-bebas font-bold text-center mt-16">Como funciona ?</h2>
                <p className="font-goldplay text-white text-center mx-auto max-w-4xl lg:text-2xl">
                    Com tecnologia digital de alto brilho e resolução, o Mosaico Digital permite a exibição
                    de conteúdos amplos (vídeos, animações, imagens dinâmicas) que se destacam na
                    paisagem urbana, capturando a atenção tanto de pedestres quanto de motoristas.
                </p>
                <div className="relative mt-16 h-[450px] w-full">
                    <Image
                        src="/images/formatos/iconico-2.jpg"
                        alt="Banca Digital"
                        fill
                        className="object-cover"
                    />
                    <div
                        className="absolute left-0 top-0 w-full md:w-3/4 h-full"
                        style={{
                            background: 'radial-gradient(ellipse 100% 300% at -10% 50%, rgba(168, 201, 60, 1) 0%, rgba(61, 151, 98, 0.95) 60%, rgba(0, 104, 105, 0.7) 80%, rgba(0, 0, 0, 0) 100%)'
                        }}
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-start px-16 py-12">
                        <h2 className="text-7xl text-white font-bebas font-bold">POR QUE É ICÔNICO?</h2>
                        <ul className="list-disc list-inside text-white font-goldplay space-y-2">
                            <li>Tecnologia híbrida 2D + 3D</li>
                            <li>Impacto visual diferenciado</li>
                            <li>Possibilita conteúdos criativos e interativos</li>
                            <li>Capta atenção em ambientes de alto fluxo</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
}