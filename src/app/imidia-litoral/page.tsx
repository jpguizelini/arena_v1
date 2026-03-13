import type { Metadata } from 'next'
import Hero from './components/Hero';
import RegioesAtendidas from './components/RegioesAtendidas';
import MidiaFormats from "./components/MidiaFormats";
import EscolhaCerto from './components/EscolhaCerto';
import BannerMeio from './components/BannerMeio';
import Galeria from './components/Galeria';

export const metadata: Metadata = {
  title: "I'mídia Litoral",
  description: "Mídia OOH no litoral paulista — Santos, Guarujá, São Vicente, Praia Grande e mais."
};

export default function ImidiaLitoral() {
    return (
        <div>
            <Hero />
            <RegioesAtendidas />
            <MidiaFormats />
            <EscolhaCerto />
            <BannerMeio />
            <Galeria />
        </div>
    )
}