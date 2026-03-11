import Image from "next/image"


export default function Banner2() {
    return (
        <section className="pb-16">
            <div className="relative h-screen max-h-screen w-auto mx-auto mt-16">
                <Image
                    src="/images/mobiliario-urbano/banner2.jpg"
                    alt="Mobiliário Urbano"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
        </section>

    )
}