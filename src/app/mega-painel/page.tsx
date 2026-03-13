import type { Metadata } from 'next'
import Hero from "./components/Hero";
import OutroFormatos from "./components/OutroFormatos";
import Mapeamento from "./components/Mapeamento";
import Banner2 from "./components/Banner2";
import Description from "./components/Description";
import Galeria from "./components/Galeria";

export const metadata: Metadata = {
  title: "Mega Painel",
  description: "Mega painéis de grande porte para máximo impacto visual em pontos nobres."
};

export default function MegaPainel() {
    return(
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
