import Banner from "./components/Banner";
import MarcaEmMovimento from "./components/MarcaEmMovimento";
import LiveLedDestaque from "./components/LiveLedDestaque";
import Cobertura from "./components/Cobertura";
import NossosFormatos from "./components/NossosFormatos";
import PorqueEscolher from "./components/PorqueEscolher";
import Galeria from "./components/Galeria";

export default function ImidiaLiveLed() {
    return (
        <div>
            <Banner />
            <MarcaEmMovimento />
            <LiveLedDestaque />
            <Cobertura />
            <NossosFormatos />
            <PorqueEscolher />
            <Galeria />
        </div>
    )
}
