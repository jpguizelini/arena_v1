'use client'

import GradientText from "@/components/ui/GradientText";
import Image from "next/image";


export default function PorqueEscolher() {
    return (
        <>
            <style jsx>{`
                @media (max-width: 1080px) {
                    .robot-container {
                        transform: translateX(-20px);
                        height: 100%;
                    }
                    .robot-image {
                        object-fit: contain;
                        height: auto;
                        width: 100%;
                    }
                }
            `}</style>
            <section className="pt-14">
                <div className="flex flex-row mt-20">
                    <div className="text-white lg:ml-[70px] lg:max-w-[50%]">
                        <GradientText size="lg:text-[64px] 2xl:text-7xl" position="text-left" >
                            PORQUE ESCOLHER A I'MÍDIA
                        </GradientText>
 
                        <ul className="font-goldplay lg:text-2xl 2xl:text-3xl text-white space-y-4 mt-4 mr-50">
                            <li>· Conteúdo atualizado com agilidade e relevância.</li>
                            <li>· Impacto visual que chama atenção e prende o olhar.</li>
                            <li>· Ideal para campanhas promocionais, institucionais e sazonais.</li>
                            <li>· Exposição contínua em pontos estratégicos.</li>
                            <li>· Integração com estratégias digitais e marketing omnichannel.</li>
                        </ul>
                    </div>
                    <div className="flex-1 h-[660px] 2xl:pl-40 overflow-visible relative">
                        <div className="robot-container w-full h-full flex items-end justify-start">
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
                </div>
            </section>
        </>
    )
}