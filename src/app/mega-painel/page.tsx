import Hero from "./components/Hero";
import OutroFormatos from "./components/OutroFormatos";
import Mapeamento from "./components/Mapeamento";
import Banner2 from "./components/Banner2";
import Description from "./components/Description";
import Galeria from "./components/Galeria";

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
