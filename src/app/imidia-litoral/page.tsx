import Hero from './components/Hero';
import RegioesAtendidas from './components/RegioesAtendidas';
import MidiaFormats from "./components/MidiaFormats";
import EscolhaCerto from './components/EscolhaCerto';
import BannerMeio from './components/BannerMeio';
import Galeria from './components/Galeria';
import Footer from '@/components/Footer';

export default function ImidiaLitoral() {
    return (
        <div className="bg-[url('/images/bg.jpg')] bg-no-repeat bg-center-top bg-cover min-h-screen">
            <Hero />
            <RegioesAtendidas />
            <MidiaFormats />
            <EscolhaCerto />
            <BannerMeio />
            <Galeria />
            <Footer />
        </div>
    )
}