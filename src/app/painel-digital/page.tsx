import type { Metadata } from 'next'
import Hero from "./components/Hero"
import Description from "./components/Description"
import Banner2 from "./components/Banner2"
import OutroFormatos from "./components/OutroFormatos"
import Mapeamento from "./components/Mapeamento"
import Galeria from "./components/Galeria"

export const metadata: Metadata = {
  title: "Painel Digital",
  description: "Painéis digitais programáveis com conteúdo dinâmico e gestão em tempo real."
};

export default function PainelDigital() {
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