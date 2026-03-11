'use client'

import GradientText from "@/components/ui/GradientText";
import Image from "next/image";

export default function BancaDigital() {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
            <div className="mb-12">
                <GradientText className="text-7xl">
                    Banca Digital
                </GradientText>
            </div>

            <p className="text-center text-white font-goldplay text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight mx-auto max-w-4xl lg:max-w-6xl mb-12">
                A Banca Digital 3D é um formato inovador que combina tecnologia
                gráfica em 2D e 3D em um mesmo painel, criando uma
                experiência visual que chama atenção não apenas pela mensagem,
                mas pela forma como ela é exibida.
            </p>

            <Image
                src="/images/formatos/banca-digital.jpg"
                alt="Banca Digital"
                width={4000}
                height={1868}
                className="w-full mx-auto mb-12"
            />

            <h2 className="text-7xl text-white font-bebas font-bold text-center mb-12">Como funciona?</h2>

            <p className="font-goldplay text-white text-base sm:text-lg md:text-[19.94px] xl:text-xl 2xl:text-2xl leading-relaxed tracking-tight text-center mx-auto max-w-4xl lg:max-w-6xl mb-12">
                Ao integrar elementos tridimensionais com conteúdo digital, a Banca Digital 3D
                entrega movimentos fluidos, profundidade visual e presença que se destaca
                no ambiente urbano. Isso faz com que a comunicação não seja
                apenas vista, mas sentida pelo público.
            </p>

            <div className="relative h-[450px] w-full">
                <Image
                    src="/images/formatos/iconico-1.jpg"
                    alt="Banca Digital"
                    fill
                    className="object-cover object-[0%_center]"
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
        </div>
    )
}