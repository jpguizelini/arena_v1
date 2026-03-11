import Banner2 from "./components/Banner2";
import Description from "./components/Description";
import Galeria from "./components/Galeria";
import Hero from "./components/Hero";
import Mapeamento from "./components/Mapeamento";
import OutrosFormatos from "./components/OutroFormatos";


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