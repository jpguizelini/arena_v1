import Image from "next/image"
import GradientText from "@/components/ui/GradientText"

export default function Hero() {
    return (
        <section className="relative w-full min-h-[600px] overflow-hidden py-16">
            <div className="absolute inset-0">
                <Image
                    src="/images/mobiliario-urbano/banner.jpg"
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
                <GradientText size="text-[60px] sm:text-[80px] md:text-[100px] pt-40">
                        DUO MUB
                </GradientText>
                <p className="text-white max-w-4xl lg:text-2xl">
                    O Duo MUB oferece dupla exposição em um único ponto, ampliando<br />
                    o impacto da campanha e aumentando a frequência de visualização.
                </p>
            </div>
        </section>
    )
}