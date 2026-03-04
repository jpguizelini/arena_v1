'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Banner() {
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
  const contentX = smoothPos.x * 6;
  const contentY = smoothPos.y * 4;

  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-0 overflow-hidden">

      {/* Imagem com parallax */}
      <motion.div
        className="w-full"
        style={{ x: imgX, y: imgY, scale: 1.06 }}
      >
        <Image
          src="/images/outdoor/bras olaia.png"
          alt="Outdoor Brasólaia"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto md:h-auto min-h-[500px] sm:min-h-[600px] md:min-h-0 object-cover md:object-contain"
          priority
        />
      </motion.div>

      {/* Overlay escuro - estático */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Conteúdo com parallax inverso */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6"
        style={{ x: contentX, y: contentY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h1
          className="font-bebas font-bold text-[60px] sm:text-[80px] md:text-[100px] leading-none bg-gradient-to-b from-[#079c9e] to-[#c3d33f] bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          OUTDOOR
        </motion.h1>

        <motion.p
          className="font-goldplay text-white text-[14px] sm:text-[16px] md:text-[19.94px] text-center max-w-[700px] mt-2 sm:mt-3 md:mt-4 leading-relaxed break-words"
          style={{
            textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 1px 6px rgba(0,0,0,0.8)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Presente nas principais vias e pontos estratégicos das cidades, o outdoor é um dos formatos mais tradicionais e eficazes da mídia OOH e DOOH. Com alta visibilidade e grande alcance, ele impacta milhares de pessoas todos os dias, garantindo exposição constante e reforço de marca para diferentes públicos.
        </motion.p>
      </motion.div>
    </div>
  );
}