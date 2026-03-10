import Image from "next/image"
import GradientText from "@/components/ui/GradientText"

export default function Hero() {
    return (
        <section className="relative w-full min-h-[600px] overflow-hidden py-16">
            <div className="absolute inset-0">
                <Image
                    src="/images/mega-painel/banner.jpg"
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
                    MEGA PAINEL
                </GradientText>
                <p className="text-white max-w-4xl lg:text-2xl">
                   O Mega Painel é um ativo de grande porte que entrega máximo impacto visual.<br/>
                   Projetado para dominar a paisagem, ele é ideal para campanhas que<br/>
                   precisam ser vistas, lembradas e reconhecidas.
                </p>
            </div>
        </section>
    )
}