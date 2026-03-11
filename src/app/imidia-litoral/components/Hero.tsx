'use client'

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import ParallaxBanner from '@/components/ui/ParallaxBanner';

export default function Hero() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const smoothX = useSpring(rawX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(rawY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      rawX.set(((e.clientX / innerWidth) - 0.5) * 20);
      rawY.set(((e.clientY / innerHeight) - 0.5) * 12);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    <div>
      <ParallaxBanner
        imageSrc="/images/litoral/banner4.jpg"
        imageAlt="banner-bottom"
        objectPosition="80% 75%"
      >
        <div className="absolute inset-0">

          {/* Gradiente — mais largo no mobile para cobrir o texto à direita */}
          <div
            className="absolute right-0 top-0 h-full w-full md:w-3/4"
            style={{
              background: 'radial-gradient(ellipse 100% 300% at 110% 50%, rgba(168, 201, 60, 1) 0%, rgba(61, 151, 98, 0.95) 60%, rgba(0, 104, 105, 0.7) 80%, rgba(0, 0, 0, 0) 100%)'
            }}
          />

          {/* Texto colado à direita em todos os tamanhos */}
          <motion.div
            className="absolute right-0 top-0 h-full flex items-center justify-end px-4 sm:px-8 md:px-12 lg:px-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="
                font-bebas-neue font-bold text-white text-right
                leading-none tracking-tighter
                text-[clamp(28px,8vw,90px)]
                sm:text-[clamp(36px,7vw,90px)]
                md:text-[clamp(40px,5.5vw,90px)]
              "
              style={isTouchDevice ? {} : { x: smoothX, y: smoothY }}
            >
              A MAIOR COBERTURA<br />DO LITORAL PAULISTA
            </motion.h1>
          </motion.div>

        </div>
      </ParallaxBanner>
    </div>
  );
}