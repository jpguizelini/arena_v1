'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


export default function BannerMeio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      setSmoothPos(prev => ({
        x: lerp(prev.x, mousePos.x, 0.06),
        y: lerp(prev.y, mousePos.y, 0.06),
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [mousePos]);

  const imgX = smoothPos.x * -20;
  const imgY = smoothPos.y * -14;

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Container da imagem com parallax — preenchendo todo o viewport */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ x: imgX, y: imgY }}
      >
        <Image
          src="/images/litoral/banner-cobertura-2.jpg"
          alt="Sua marca em evidência"
          fill
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: 'center 5%',
            imageRendering: 'crisp-edges'
          }}
          quality={95}
          priority
        />
      </motion.div>

      {/* Textos sobrepostos — fora do parallax da imagem para não distorcer */}
      <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center text-center pointer-events-none">
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
          className="font-bebas text-white text-[48px] sm:text-[68px] md:text-[89px] leading-none"
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
          className="font-bebas text-white text-[48px] sm:text-[68px] md:text-[89px] leading-none"
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
      </div>

    </div>
  )
}