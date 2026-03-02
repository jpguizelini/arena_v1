import Banner from '@/components/Outdoor/banner';
import OutdoorDescription from '@/components/Outdoor/description';
import ImpactSection from '@/components/Outdoor/impact';
import OutdoorGrid from '@/components/Outdoor/grid';
import MappingSection from '@/components/Outdoor/mapping';
import GalleryGrid from '@/components/Outdoor/gallery-grid';
import Footer from '@/components/Footer';

export default function Outdoor() {
    return (
        <div 
            className="relative bg-black min-h-screen"
            style={{
                backgroundImage: 'url(/images/outdoor/triangulos.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto'
            }}
        >

            <div className="relative z-10">
                <Banner />
                <OutdoorDescription />
                <ImpactSection />
                <div className="h-16 md:h-24"></div>
                <OutdoorGrid />
                <MappingSection />
                <GalleryGrid />
                <Footer />
            </div>
        </div>
    );
}
