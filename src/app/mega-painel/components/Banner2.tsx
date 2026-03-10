import Image from "next/image"


export default function Banner2() {
    return (
        <section className="pb-16">
            <div className="relative mt-16">
                <Image
                    src="/images/mega-painel/banner2.jpg"
                    alt="Painel Digital"
                    width={4000}
                    height={1868}
                    className="w-full mx-auto"
                />
            </div>
        </section>

    )
}