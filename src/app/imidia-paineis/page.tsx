'use client';

import ParallaxBanner from '@/components/ui/ParallaxBanner';
import GradientText from '@/components/ui/GradientText';
import Coverage from '@/components/Coverage';

export default function ImidiaPaineis() {
  return (
    <div className="bg-[url('/images/bg.jpg')] bg-no-repeat bg-center-top bg-cover min-h-screen">
        <ParallaxBanner imageSrc="/images/paineis/banner.jpg" imageAlt="banner" />
        <div className="bg-transparent px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
          <GradientText size="text-[65px] sm:text-[80px] md:text-[65px]" className="mb-0">
            a maior em número de cidades no interior <br></br>
            e a melhor em versatilidades de ativos.
          </GradientText>
        </div>
        <Coverage description = "Confira nossas cidades de autação"/>
    </div>
  )
}