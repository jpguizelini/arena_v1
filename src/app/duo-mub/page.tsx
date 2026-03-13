import type { Metadata } from 'next'
import Description from "./components/Description"
import Hero from "./components/Hero"
import Banner2 from "./components/Banner2"
import OutrosFormatos from "./components/OutroFormatos"
import Mapeamento from "./components/Mapeamento"
import Galeria from "./components/Galeria"

export const metadata: Metadata = {
  title: "Duo MUB",
  description: "Duo MUB: dupla exposição em um único ponto, ampliando o alcance da campanha."
};

export default function DuoMub() {
    return (
        <>
            <Hero />
            <Description />
            <Banner2 />
            <OutrosFormatos />
            <Mapeamento />
            <Galeria />
        </>
    )
}