import type { Metadata } from 'next'
import Banner from "./components/Banner";
import MarcaEmMovimento from "./components/MarcaEmMovimento";
import LiveLedDestaque from "./components/LiveLedDestaque";
import Cobertura from "./components/Cobertura";
import NossosFormatos from "./components/NossosFormatos";
import PorqueEscolher from "./components/PorqueEscolher";
import GaleriaPage from "./components/Galeria";

export const metadata: Metadata = {
  title: "I'mídia Live LED",
  description: "Painéis Live LED DOOH — tecnologia digital de ponta em comunicação urbana."
};

export default function ImidiaLiveLed() {
    return (
        <div>
            <Banner />
            <div className="">
                <MarcaEmMovimento />
                <LiveLedDestaque />
                <Cobertura />
                <NossosFormatos />
                <PorqueEscolher />
                <GaleriaPage />
            </div>

            
        </div>
    )
}