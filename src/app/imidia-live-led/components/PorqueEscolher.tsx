'use client'

import GradientText from "@/components/ui/GradientText";
import Image from "next/image";

export default function PorqueEscolher() {
    return (
        <section className="pt-14">
            <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 gap-8">
                <div className="text-white px-4 lg:ml-[70px] lg:max-w-[50%]">
                    <GradientText size="lg:text-[64px] 2xl:text-7xl" position="text-left" >
                        PORQUE ESCOLHER A I'MÍDIA
                    </GradientText>
 
                    <ul className="font-goldplay lg:text-2xl 2xl:text-3xl text-white space-y-4 mt-4 pr-4 lg:pr-0">
                        <li>· Conteúdo atualizado com agilidade e relevância.</li>
                        <li>· Impacto visual que chama atenção e prende o olhar.</li>
                        <li>· Ideal para campanhas promocionais, institucionais e sazonais.</li>
                        <li>· Exposição contínua em pontos estratégicos.</li>
                        <li>· Integração com estratégias digitais e marketing omnichannel.</li>
                    </ul>
                </div>
                <div className="flex-1 h-auto lg:h-[660px] overflow-visible relative flex items-end justify-start lg:-translate-x-5">
                    <Image
                        src="/images/live-led/robo-2.png"
                        alt=""
                        aria-hidden="true"
                        width={443}
                        height={660}
                        sizes="(max-width: 1080px) 33vw, 443px"
                        className="max-w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    )
}