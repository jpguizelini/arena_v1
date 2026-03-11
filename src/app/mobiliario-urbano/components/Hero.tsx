import Image from "next/image"
import GradientText from "@/components/ui/GradientText"

export default function Hero() {
    return (
        <section className="relative w-full h-[600px] overflow-hidden">
            {/* Imagem de fundo */}
            <div className="absolute inset-0">
                <Image
                    src="/images/mobiliario-urbano/banner.jpg"
                    alt="banner"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    style={{ objectPosition: "80% 50%" }}
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Conteúdo centralizado — pt-[44px] compensa a navbar fixa */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 h-full pt-[44px]">
                <GradientText size="text-[48px] md:text-[60px] lg:text-[80px] xl:text-[110px]">
                    MOBILIÁRIO URBANO
                </GradientText>
                <p className="text-white max-w-2xl text-base lg:text-2xl mt-4">
                    O mobiliário urbano conecta marcas à rotina das pessoas.
                    Presente em pontos de convivência, circulação e espera, ele transforma o
                    espaço público em um canal direto de comunicação.
                </p>
            </div>
        </section>
    )
}