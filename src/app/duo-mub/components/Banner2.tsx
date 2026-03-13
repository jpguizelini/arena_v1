import Image from "next/image"


export default function Banner2() {
    return (
        <section className="pb-16">
            <div className="relative h-screen max-h-screen w-auto mx-auto mt-16">
                <Image
                    src="/images/duo-mub/banner2.jpg"
                    alt="Painel Duo MUB dupla-face instalado em via urbana"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
        </section>

    )
}