import type { Metadata } from 'next'
import Hero from "./components/Hero";
import Description from "./components/Description";
import Banner2 from "./components/Banner2";
import Mapeamento from "./components/Mapeamento";
import Galeria from "./components/Galeria";
import OutroFormatos from "./components/OutroFormatos";

export const metadata: Metadata = {
  title: "Mega Light",
  description: "Mega Light: tamanho e iluminação combinados para impacto visual 24h."
};

export default function MegaLight() {
    return (
        <>
            <Hero />
            <Description />
            <Banner2 />
            <OutroFormatos />
            <Mapeamento />
            <Galeria />

        </>
    )
}