// TextWhitImage.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import GradientText from "@/components/ui/GradientText";

interface TextWhitImageProps {
  title: string;
  gradientText?: string;
  titleSuffix?: string;
  description: React.ReactNode;
  imgSrc: string;
}

export default function TextWhitImage({ title, gradientText, titleSuffix, description, imgSrc }: TextWhitImageProps) {
  return (
    <section className="relative z-20 w-full">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 md:grid-cols-2">

        {/* Lado esquerdo - Texto */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-28 py-12 md:py-20 text-left">
          <h2 className="font-bebas font-bold leading-none mb-4 text-[clamp(36px,4vw,64px)]">
            {gradientText ? (
              <>
                <span className="text-white">{title}</span>
                <GradientText
                  className="font-bebas font-bold leading-none text-[clamp(36px,4vw,64px)]"
                  size="text-[clamp(36px,4vw,64px)]"
                  position="text-left"
                  from="#c3d33f"
                  via="#079c9e"
                  to="#c3d33f"
                >
                  {gradientText}
                </GradientText>
                {titleSuffix && <span className="text-white">{titleSuffix}</span>}
              </>
            ) : (
              <GradientText
                className="font-bebas font-bold leading-none text-[clamp(36px,4vw,64px)]"
                size="text-[clamp(36px,4vw,64px)]"
                position="text-left"
                from="#c3d33f"
                via="#079c9e"
                to="#c3d33f"
              >
                {title}
              </GradientText>
            )}
          </h2>

          <motion.div 
            className="font-goldplay text-white text-sm sm:text-base md:text-[16px] xl:text-[17px] 2xl:text-lg leading-relaxed tracking-tight flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {description}
          </motion.div>
        </div>

        {/* Lado direito - Imagem */}
        <motion.div 
          className="flex items-center justify-center py-12 md:py-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative w-[350px] h-[500px] md:w-[400px] md:h-[600px] ">
            <Image
              src={imgSrc}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}