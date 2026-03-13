import type { Metadata } from 'next'
import Banner2 from "./components/Banner2";
import Description from "./components/Description";
import Galeria from "./components/Galeria";
import Hero from "./components/Hero";
import Mapeamento from "./components/Mapeamento";
import OutrosFormatos from "./components/OutroFormatos";

export const metadata: Metadata = {
  title: "Mobiliário Urbano",
  description: "Mídia em mobiliário urbano — contato direto com pedestres em pontos de alta circulação."
};

export default function MobiliarioUrbano() {
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