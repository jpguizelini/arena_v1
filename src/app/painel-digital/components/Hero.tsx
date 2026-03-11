import Image from "next/image"
import GradientText from "@/components/ui/GradientText"

export default function Hero() {
    return (
        <section className="relative w-full min-h-[600px] overflow-hidden py-16">
            <div className="absolute inset-0">
                <Image
                    src="/images/painel-digital/banner.jpg"
                    alt="banner"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    style={{ objectPosition: "80% 10%" }}
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 h-[600px]">
                <GradientText size="lg:text-[80px] xl:text-[100px] pt-40">
                    PAINEL DIGITAL
                </GradientText>
                <p className="text-white max-w-4xl lg:text-2xl">
                    O Painel Digital representa a evolução da mídia OOH e DOOH,<br/>
                    unindo tecnologia, dinamismo e alta definição. Com conteúdos em movimento,<br/>
                    ele potencializa a atenção e a flexibilidade das campanhas. 
                    
                    
                </p>
            </div>
        </section>
    )
}