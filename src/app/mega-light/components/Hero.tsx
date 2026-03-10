import Image from "next/image"
import GradientText from "@/components/ui/GradientText"

export default function Hero() {
    return (
        <section className="relative w-full min-h-[600px] overflow-hidden py-16">
            <div className="absolute inset-0">
                <Image
                    src="/images/mega-light/banner.jpg"
                    alt="banner"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    style={{ objectPosition: "80% 50%" }}
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 h-[600px]">
                <GradientText size="lg:text-[80px] xl:text-[100px] pt-40">
                    MEGA LIGHT
                </GradientText>
                <p className="text-white max-w-5xl lg:text-2xl">
                   O Mega Light é um formato de grande dimensão, ideal para campanhas que exigem escala,<br/>
                   impacto e leitura à distância. Posicionado em pontos estratégicos, ele se impõe na<br/>
                   paisagem urbana e potencializa a comunicação.
                </p>
            </div>
        </section>
    )
}