import Image from "next/image"


export default function Banner2() {
    return (
        <section className="pb-16">
            <div className="relative mt-16">
                <Image
                    src="/images/rodovia/banner2.jpg"
                    alt="Banca Digital"
                    width={4000}
                    height={1868}
                    className="w-full mx-auto"
                />
            </div>
        </section>

    )
}