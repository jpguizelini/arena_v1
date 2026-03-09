'use client'

import TextWhitImage from "@/components/TextWhitImage";
import GradientText from "@/components/ui/GradientText";
import Image from "next/image";


export default function LiveLedDestaque() {
    return (
        <section className="">
            <div className="flex flex-row mt-20">
                <div className="text-white lg:ml-[70px] lg:max-w-[55%]">
                    <h2 className="font-bebas lg:text-[64px] lg:mt-[130px] pr-12 leading-16">
                        LIVE LED REPRESENTA O
                        <GradientText size="lg:text-[64px]" position="text-left">
                            QUE HÁ DE MAIS AVANÇADO
                        </GradientText>
                        EM PAINÉIS DIGITAIS NO NOSSO PORTIFÓLIO
                    </h2>
                    <ul className="font-goldplay lg:text-2xl text-white space-y-4 mt-4">
                        <li>· Alta definição e brilho superior, garantindo<br/> visibilidade mesmo sob luz natural intensa.</li>
                        <li>· Atualização de conteúdo em tempo real, ideal para campanhas dinâmicas e sazonais.</li>
                        <li>· Flexibilidade criativa, incluindo animações, vídeos e chamadas interativas.</li>
                        <li>· Resistência e performance, operando com confiabilidade em ambientes urbanos.</li>
                    </ul>
                </div>
                <div className="flex-1 h-[838px] overflow-hidden relative">
                    <Image
                        src="/images/live-led/imagem-lateral.jpg"
                        alt="Live LED Destaque"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
            <div>
                <p className="text-white lg:text-3xl text-center lg:px-12 pt-[100px]">
                   Os painéis Live Led <strong>transformam qualquer espaço urbano em uma
                   plataforma de comunicação digital</strong>, conectando públicos reais à
                   sua mensagem com grande eficiência. 
                </p>
            </div>
        </section>
    )
}