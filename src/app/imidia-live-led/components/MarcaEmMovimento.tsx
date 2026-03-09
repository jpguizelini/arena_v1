import Image from "next/image"

export default function MarcaEmMovimento() {
    return (
        <section className="flex flex-col mx-4">
            <div className="relative z-10 w-full mt-[-6px] flex flex-row items-start px-6 2xl:px-10 ">
                <div className="w-1/3 md:w-2/5 lg:w-[433px] 2xl:w-[500px]  lg:mt-[-20px] shrink-0">
                    <Image
                        src="/images/live-led/robo-1.png"
                        alt="Robô"
                        width={433}
                        height={581}
                        className="w-full h-auto"
                    />
                </div>
                <div>
                    <h2 className="text-white text-5xl sm:text-6xl lg:text-[77px] xl:text-8xl 2xl:text-9xl lg:pt-10 font-bold font-bebas leading-none text-right mt-4">
                    POTÊNCIA PARA SUA MARCA EM MOVIMENTO
                </h2>
                <p className="text-white text-right hidden sm:block sm:text-2xl lg:text-[34px] 2xl:text-5xl 2xl:pl-100 md:pl-2">
                    Com tecnologia DOOH<br/> (Digital Out Of Home),<br/> esses painéis <strong>oferecem soluções 
                    que vão além da mídia tradicional</strong>, entregando comunicação<br/> dinâmica, atualizável
                    e<br/> com alta performance visual.
                </p>
                </div>
            </div>

            <p className="text-white text-center text-base md:text-lg sm:hidden">
                Com tecnologia DOOH (Digital Out Of Home), esses painéis
                <strong> oferecem soluções que vão além da mídia tradicional</strong>,
                entregando comunicação dinâmica, atualizável e com alta performance visual.
            </p>
        </section>
    )
}