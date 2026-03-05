// TextWhitImage.tsx
import Image from "next/image";
import GradientText from "@/components/ui/GradientText";

interface TextWhitImageProps {
  title: string;
  description: React.ReactNode;
  imgSrc: string;
}

export default function TextWhitImage({ title, description, imgSrc }: TextWhitImageProps) {
  return (
    <section className="relative z-20 w-full mb-20 pt-[110px] min-h-[600px]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 md:grid-cols-2">
        {/* Lado esquerdo - Texto */}
        <div className="flex flex-col justify-center px-14 sm:px-12 md:px-10 lg:pl-10 xl:pl-30 py-[82px]">
          <GradientText
            className="text-[53.09px] font-bebas font-bold leading-none mb-4 text-center sm:text-left whitespace-pre-line"
            size="text-[53.09px]"
            from="#c3d33f"
            via="#079c9e"
            to="#c3d33f"
          >
            {title}
          </GradientText>

          {/* 👇 Renderiza direto, sem GradientText */}
          <div className="text-[16px] font-goldplay leading-snug text-white flex flex-col gap-4 text-center sm:text-left">
            {description}
          </div>
        </div>

        {/* Lado direito - Imagem */}
        <div className="relative min-h-[400px] w-full h-full md:min-h-full overflow-visible">
          <Image
            src={imgSrc}
            alt="Transformando"
            fill
            className="object-contain object-center md:object-center md:ml-3"
          />
        </div>
      </div>
    </section>
  );
}