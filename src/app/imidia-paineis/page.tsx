'use client';

import ParallaxBanner from '@/components/ui/ParallaxBanner';
import GradientText from '@/components/ui/GradientText';
import Coverage from '@/components/Coverage';
import ImidiaPaineisGrid from '@/components/Outdoor/ImidiaPaineisGrid';
import TextWhitImage from '@/components/TextWhitImage';

export default function ImidiaPaineis() {
  return (
    <div className="bg-[url('/images/bg.jpg')] bg-no-repeat bg-center-top bg-cover min-h-screen">
        <ParallaxBanner imageSrc="/images/paineis/banner.jpg" imageAlt="banner" />
        <div className="bg-transparent px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
          <GradientText size="text-[65px] sm:text-[80px] md:text-[65px]" className="mb-0 text-center leading-tight">
            a maior em número de cidades no interior <br></br>
            e a melhor em versatilidades de ativos.
          </GradientText>
        </div>
        <Coverage description = "Confira nossas cidades de autação"/>
        <div>
          <GradientText size="text-[65px] sm:text-[80px] md:text-[65px] pt-[114px]" className="mb-0 text-center leading-tight">
            nossos formatos de mídia
          </GradientText>
        </div>
        <ImidiaPaineisGrid />
        <TextWhitImage 
          imgSrc="/images/paineis/escolhacerto.png"
          title={"Escolha certo,\nEscolha I'mídia"}
          description={
            <span className="flex flex-col gap-4 ">
              <span>· Conhecimento e suporte em todo interior de SP</span>
              <span>· Equipe com Know How de mais de 20 anos em Mídia OOH</span>
              <span>· Pontos de alto fluxo</span>
              <span>· Entrega com agilidade e excelência</span>
              <span>· Checking diferenciado</span>
              <span>· Utilização de Software e Geomarketing</span>
              <span>· Capilaridade de cidade (maior empresa em quantidade de cidades de atuação)</span>
              <span>· Atendimento ao cliente com uma verdadeira Consultoria de Mídia OOH</span>
            </span>
          }
        />
    </div>
  )
}