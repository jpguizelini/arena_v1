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
    <section className="relative z-20 w-full">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 md:grid-cols-2">

        {/* Lado esquerdo - Texto */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-28 py-12 md:py-20 text-left">
          <GradientText
            className="font-bebas font-bold leading-none mb-4 whitespace-pre-line text-[clamp(36px,4vw,64px)]"
            size="text-[clamp(36px,4vw,64px)]"
            position="text-left"
            from="#c3d33f"
            via="#079c9e"
            to="#c3d33f"
          >
            {title}
          </GradientText>

          <div className="font-goldplay text-white text-sm sm:text-base md:text-[16px] xl:text-[17px] 2xl:text-lg leading-relaxed tracking-tight flex flex-col gap-4">
            {description}
          </div>
        </div>

        {/* Lado direito - Imagem */}
        <div className="flex items-center justify-center py-12 md:py-0">
          <div className="relative w-[350px] h-[500px] md:w-[400px] md:h-[600px] ">
            <Image
              src={imgSrc}
              alt="Transformando"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
}