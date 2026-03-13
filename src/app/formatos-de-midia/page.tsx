import type { Metadata } from 'next'
import Banner from "./components/Banner"
import BancaDigital from "./components/BancaDigital"
import MosaicoDigital from "./components/MosaicoDigital"
import Galeria from "./components/Galeria"

export const metadata: Metadata = {
  title: "Formatos de Mídia",
  description: "Banca Digital 3D e Mosaico Digital — formatos icônicos para campanhas de alto impacto."
};

export default function FormatosMidia() {
    return (
        <>
            <Banner />
            <BancaDigital />
            <MosaicoDigital />
            <Galeria />
        </>
    )
}