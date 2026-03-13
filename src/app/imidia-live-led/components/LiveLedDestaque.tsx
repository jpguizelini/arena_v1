'use client'

import GradientText from "@/components/ui/GradientText";
import Image from "next/image";

export default function LiveLedDestaque() {
    return (
        <section className="w-full flex flex-col">

            {/* Linha principal: texto + imagem */}
            <div className="flex flex-col lg:flex-row mt-16 lg:mt-20 2xl:mt-40 min-h-[500px] lg:min-h-[700px] 2xl:min-h-[838px]">

                {/* Bloco de texto */}
                <div className="text-white px-4 lg:pl-[70px] lg:pr-8 lg:max-w-[55%] flex flex-col justify-center py-10 lg:py-16">
                    <h2 className="font-bebas text-4xl sm:text-5xl lg:text-[64px] 2xl:text-7xl leading-tight">
                        LIVE LED REPRESENTA O
                        <GradientText size="text-4xl sm:text-5xl lg:text-[64px] 2xl:text-7xl" position="text-left">
                            QUE HÁ DE MAIS AVANÇADO
                        </GradientText>
                        EM PAINÉIS DIGITAIS NO NOSSO PORTIFÓLIO
                    </h2>

                    <ul className="font-goldplay text-lg sm:text-xl lg:text-2xl 2xl:text-3xl
                        text-white space-y-4 mt-6 2xl:pr-12">
                        <li>· Alta definição e brilho superior, garantindo visibilidade mesmo sob luz natural intensa.</li>
                        <li>· Atualização de conteúdo em tempo real, ideal para campanhas dinâmicas e sazonais.</li>
                        <li>· Flexibilidade criativa, incluindo animações, vídeos e chamadas interativas.</li>
                        <li>· Resistência e performance, operando com confiabilidade em ambientes urbanos.</li>
                    </ul>
                </div>

                {/* Imagem lateral */}
                <div className="flex-1 min-h-[300px] lg:min-h-full relative overflow-hidden">
                    <Image
                        src="/images/live-led/imagem-lateral.jpg"
                        alt="Painel Live LED instalado em ambiente urbano"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                    />
                </div>
            </div>

            {/* Parágrafo inferior */}
            <div className="px-4 sm:px-8 xl:px-40 2xl:px-64 pt-16 lg:pt-24 pb-10">
                <p className="text-white text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl text-center leading-snug">
                    Os painéis Live Led{" "}
                    <strong>transformam qualquer espaço urbano em uma plataforma de comunicação digital</strong>,
                    conectando públicos reais à sua mensagem com grande eficiência.
                </p>
            </div>

        </section>
    )
}