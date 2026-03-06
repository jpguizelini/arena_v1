// EscolhaCerto.tsx
'use client'
import TextWhitImage from "@/components/TextWhitImage";

export default function EscolhaCerto() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <TextWhitImage
        imgSrc="/images/litoral/imagem-lateral.png"
        title={"Escolha certo,\nEscolha I'mídia!"}
        description={
          <span className="flex flex-col gap-4 font-goldplay">
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
    </section>
  )
}