import HeroProduto from '@/components/shared/HeroProduto'

export default function Banner() {
    return (
        <HeroProduto
            imageSrc="/images/live-led/banner.jpg"
            imageAlt="I'mídia Live LED"
            overlay="bg-black/40"
            objectPosition="center 40%"
            titulo="I'MÍDIA LIVE LED"
            tituloClassName="text-[60px] sm:text-[80px] md:text-[100px] mt-8"
            descricao={
                <>
                    Painéis digitais de alta definição que transformam
                    <strong> qualquer espaço urbano em uma plataforma de comunicação.</strong>
                </>
            }
        />
    )
}
