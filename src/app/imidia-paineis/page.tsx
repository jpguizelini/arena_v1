'use client';

import ParallaxBanner from '@/components/ui/ParallaxBanner';
import GradientText from '@/components/ui/GradientText';
import Coverage from '@/components/Coverage';
import ImidiaPaineisGrid from '@/components/Outdoor/ImidiaPaineisGrid';
import TextWhitImage from '@/components/TextWhitImage';
import { motion } from 'framer-motion';

export default function ImidiaPaineis() {
  return (
    <div>
      <ParallaxBanner imageSrc="/images/paineis/banner.jpg" imageAlt="banner" />


      <div className="bg-transparent px-4 sm:px-8 md:px-16 lg:px-[60px] pt-[84px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GradientText size="text-[65px] sm:text-[80px] md:text-[65px]" className="mb-0 text-center leading-tight">
            a maior em número de cidades no interior <br></br>
            e a melhor em versatilidades de ativos.
          </GradientText>
        </motion.div>
      </div>

    <div className="py-[100px]">
      <Coverage description = "Confira nossas cidades de autação"/>
    </div>



      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GradientText size="text-[65px] sm:text-[80px] md:text-[65px]" className="mb-0 text-center leading-tight pt-[114px]">
            nossos formatos de mídia
          </GradientText>
        </motion.div>
      </div>
      <ImidiaPaineisGrid />

      <div className="py-[100px] pb-[100px]">
        <TextWhitImage 
          imgSrc="/images/paineis/escolhacerto.png"
          title={"Escolha certo,\nEscolha I'mídia!"}
          description={
            <span className="flex flex-col gap-4 font-goldplay ">
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


      <div>
        <ParallaxBanner 
          imageSrc="/images/paineis/banner-botton.jpg" 
          imageAlt="banner-bottom"
          overlay=""
        >
          <div className="absolute inset-0">
            <div
              className="absolute left-0 top-0 w-full md:w-3/4 h-full"
              style={{
                background: 'radial-gradient(ellipse 100% 300% at -10% 50%, rgba(7, 156, 158, 1) 0%, rgba(7, 156, 158, 0.95) 60%, rgba(7, 156, 158, 0.7) 80%, rgba(7, 156, 158, 0) 100%)'
              }}
            />
          </div>
          
          {/* Conteúdo com efeito parallax */}
          <motion.div
            className="absolute inset-0 flex items-center"
            style={{ x: 6, y: 4 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="pl-4 sm:pl-8 md:pl-[76px] flex flex-col gap-4 max-w-[90%] sm:max-w-[80%] md:max-w-none items-start text-left">
              <motion.h1
                className="font-bebas text-white text-[48px] sm:text-[68px] md:text-[89px] leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }
                }}
              >
                MAIOR COBERTURA
              </motion.h1>

              <motion.h1
                className="font-bebas text-white  text-[48px] sm:text-[68px] md:text-[89px] leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                }}
              >
                MAIOR AUDIÊNCIA
              </motion.h1>

              <motion.h1
                className="font-bebas text-white  text-[48px] sm:text-[68px] md:text-[89px] leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{
                  duration: 0.6,
                  delay: 1.1,
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                }}
              >
                MAIOR IMPACTO
              </motion.h1>

              <motion.div
                className="font-bebas text-accent text-[20px] sm:text-[24px] md:text-[42px] leading-none tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -8, 0] }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.9
                }}
              >
                <span className="block sm:inline">MÍDIA OOH NO INTERIOR<br />PAULISTA É I'MÍDIA PAINÉIS</span>
              </motion.div>
            </div>
          </motion.div>
        </ParallaxBanner>
      </div>
      <div className="pt-[180px]">

      </div>

    </div>
  )
}