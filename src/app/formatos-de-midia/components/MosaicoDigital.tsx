'use client'

import GradientText from "@/components/ui/GradientText";
import Image from "next/image";

export default function MosaicoDigital() {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
            <div className="mb-12">
                <GradientText className="text-7xl">
                    MOSAICO DIGITAL
                </GradientText>
            </div>

            <p className="text-center text-white font-goldplay text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight mx-auto max-w-4xl lg:max-w-6xl mb-12">
                O Mosaico Digital é um painel icônico composto por painéis integrados,
                formando uma superfície contínua de grande impacto visual.
                Ele é projetado para entregar alta visibilidade, escalabilidade de
                conteúdo e flexibilidade criativa em um único ponto de mídia.
            </p>

            <Image
                src="/images/formatos/mosaico-digital.jpg"
                alt="Mosaico Digital I'mídia em ambiente urbano"
                width={1600}
                height={900}
                sizes="100vw"
                className="w-full mx-auto mb-12"
            />

            <h2 className="text-7xl text-white font-bebas font-bold text-center mb-12">Como funciona?</h2>

            <p className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight text-center mx-auto max-w-4xl lg:max-w-6xl mb-12">
                Com tecnologia digital de alto brilho e resolução, o Mosaico Digital permite a exibição
                de conteúdos amplos (vídeos, animações, imagens dinâmicas) que se destacam na
                paisagem urbana, capturando a atenção tanto de pedestres quanto de motoristas.
            </p>

            <div className="relative h-[450px] w-full mb-12">
                <Image
                    src="/images/formatos/iconico-2.jpg"
                    alt="Mosaico Digital em ponto estratégico"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
                <div
                    className="absolute left-0 top-0 w-full md:w-3/4 h-full"
                    style={{
                        background: 'radial-gradient(ellipse 100% 300% at -10% 50%, rgba(168, 201, 60, 1) 0%, rgba(61, 151, 98, 0.95) 60%, rgba(0, 104, 105, 0.7) 80%, rgba(0, 0, 0, 0) 100%)'
                    }}
                />
                <div className="absolute inset-0 flex flex-col items-start justify-start px-16 py-12">
                    <h2 className="text-7xl text-white font-bebas font-bold mb-4">POR QUE É ICÔNICO?</h2>
                    <ul className="list-disc list-inside text-white font-goldplay text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed space-y-2">
                        <li>Tecnologia híbrida 2D + 3D</li>
                        <li>Impacto visual diferenciado</li>
                        <li>Possibilita conteúdos criativos e interativos</li>
                        <li>Capta atenção em ambientes de alto fluxo</li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
                <div className="flex flex-col justify-center gap-6 text-white py-12">
                    <p className="font-goldplay text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight">
                        Os formatos icônicos da I'mídia Painéis <strong>não são apenas "mais um painel"</strong>.<br/>
                        Eles representam soluções pensadas para campanhas que exigem resultados maiores:
                    </p>
                    <ul className="font-goldplay text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="text-[#a8c93c] mt-1">•</span>
                            Experiência visual superior
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#a8c93c] mt-1">•</span>
                            Altíssimo impacto e lembrança de marca
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#a8c93c] mt-1">•</span>
                            Conteúdos que se destacam no ambiente urbano
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#a8c93c] mt-1">•</span>
                            Flexibilidade para campanhas criativas e inovadoras
                        </li>
                    </ul>
                </div>

                <div className="relative min-h-[500px] md:min-h-[600px]">
                    <Image
                        src="/images/formatos/imagem-lateral.jpg"
                        alt="Mosaico Digital instalado em via urbana"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover object-[80%_50%]"
                    />
                </div>
            </div>
        </div>
    )
}