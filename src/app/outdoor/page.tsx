import type { Metadata } from 'next'
import Banner from '@/components/Outdoor/banner';
import OutdoorDescription from '@/components/Outdoor/description';
import ImpactSection from '@/components/Outdoor/impact';
import OutdoorGrid from '@/components/Outdoor/grid';
import MappingSection from '@/components/Outdoor/mapping';
import GalleryGrid from '@/components/Outdoor/gallery-grid';

export const metadata: Metadata = {
  title: "Outdoor",
  description: "Painéis outdoor em mais de 30 cidades do interior paulista. Alta visibilidade em vias de alto fluxo."
};

export default function Outdoor() {
    return (
        <div>
            <div className="relative min-h-screen pb-64">
                <div className="relative z-10">
                    <Banner />
                    <OutdoorDescription />
                    <ImpactSection />
                    <div className="h-16 md:h-24"></div>
                    <GalleryGrid />
                    <MappingSection />
                    <OutdoorGrid />
                </div>
            </div>
        </div>
    );
}
