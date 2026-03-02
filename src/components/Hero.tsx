import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-0">
      <div className="relative w-full">
        <Image
          src="/images/outdoor5.jpg"
          alt="Outdoor Imídia"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto min-h-[500px] sm:min-h-[600px] md:min-h-0 object-cover md:object-contain"
          priority
        />

        {/* Efeito na metade esquerda */}
        <div className="absolute inset-0">
          <div 
            className="absolute left-0 top-0 w-full md:w-3/4 h-full"
            style={{
              background: 'radial-gradient(ellipse 100% 300% at -10% 50%, rgba(168, 201, 60, 1) 0%, rgba(61, 151, 98, 1) 25%, rgba(0, 104, 105, 1) 50%, rgba(0, 0, 0, 0) 75%)'
            }}
          />
        </div>

        {/* Conteúdo */}
        <div className="absolute inset-0 flex items-center">
          <div className="pl-4 sm:pl-8 md:pl-[76px] flex flex-col gap-1 max-w-[90%] sm:max-w-[80%] md:max-w-none">
            <p className="text-white font-bold text-[18px] sm:text-[22px] md:text-[26px]">
              Sua empresa em <span className="block sm:inline">evidência</span>
            </p>
            <h1 className="font-bebas text-accent font-bold text-[48px] sm:text-[68px] md:text-[89px] leading-none">
              +30 CIDADES
            </h1>
            <h1 className="font-bebas text-accent font-bold text-[48px] sm:text-[68px] md:text-[89px]  leading-none">
              +240 MILHÕES
            </h1>
            <p className="font-bebas text-accent text-[20px] sm:text-[24px] md:text-[28px] md:-mt-[25px] md:ml-[36px] md:mr-[100px] md:tracking-[0.4px] ">
              DE PESSOAS IMPACTADAS <span className="block sm:inline">MENSALMENTE</span>
            </p>
            <button className="mt-2 w-fit border-2 text-primary bg-white  font-bebas text-[18px] sm:text-[22px] md:text-[25.55px] px-4 sm:px-5 md:px-6 py-2 hover:bg-accent hover:text-dark rounded-2xl">
              QUERO ME DESTACAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}