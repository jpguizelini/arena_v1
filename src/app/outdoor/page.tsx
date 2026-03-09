import Banner from '@/components/Outdoor/banner';
import OutdoorDescription from '@/components/Outdoor/description';
import ImpactSection from '@/components/Outdoor/impact';
import OutdoorGrid from '@/components/Outdoor/grid';
import MappingSection from '@/components/Outdoor/mapping';
import GalleryGrid from '@/components/Outdoor/gallery-grid';
import Footer from '@/components/Footer';

export default function Outdoor() {
    return (
        <div>
            <div className="relative min-h-screen">
                <div className="relative z-10">
                    <Banner />
                    <OutdoorDescription />
                    <ImpactSection />
                    <div className="h-16 md:h-24"></div>
                    <GalleryGrid />
                    <MappingSection />
                    <OutdoorGrid />
                    <div className="h-16 md:h-48"></div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
