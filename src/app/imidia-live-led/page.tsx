import Banner from "./components/Banner";
import MarcaEmMovimento from "./components/MarcaEmMovimento";
import LiveLedDestaque from "./components/LiveLedDestaque";
import Cobertura from "./components/Cobertura";

export default function ImidiaLiveLed() {
    return (
        <div>
            <Banner />
            <div className="">
                <MarcaEmMovimento />
                <LiveLedDestaque />
                <Cobertura />
            </div>

            
        </div>
    )
}