import Image from "next/image"

export default function Banner2() {
    return (
        <section className="px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
            <Image
                src="/images/mega-painel/banner2.jpg"
                alt="Mega Painel"
                width={4000}
                height={1868}
                className="w-full mx-auto"
            />
        </section>
    )
}