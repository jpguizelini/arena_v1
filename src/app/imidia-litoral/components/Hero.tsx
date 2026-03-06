'use client'

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ParallaxBanner from '@/components/ui/ParallaxBanner';

export default function Hero() {
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

  // Texto se move levemente com o mouse
  const textX = smoothPos.x * 10;
  const textY = smoothPos.y * 6;

  return (
    <div>
      <ParallaxBanner
        imageSrc="/images/litoral/banner.png"
        imageAlt="banner-bottom"
        overlay=""
      >
        <div>
          {/* Gradiente — fixo, não é afetado pelo mouse */}
          <div
            className="absolute right-0 top-0 w-full md:w-3/4 h-full"
            style={{
              background: 'radial-gradient(ellipse 100% 300% at 110% 50%, rgba(168, 201, 60, 1) 0%, rgba(61, 151, 98, 0.95) 60%, rgba(0, 104, 105, 0.7) 80%, rgba(0, 0, 0, 0) 100%)'
            }}
          />

          {/* Texto — animação de entrada + parallax suave com o mouse */}
          <motion.div
            className="absolute right-0 top-0 h-full flex items-center justify-center px-6 sm:px-10 md:px-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="font-bebas-neue font-bold text-white text-center leading-tight tracking-tighter text-[clamp(36px,6vw,90px)]"
              style={{ x: textX, y: textY }}
            >
              A MAIOR COBERTURA<br />DO LITORAL PAULISTA
            </motion.h1>
          </motion.div>
        </div>
      </ParallaxBanner>
    </div>
  )
}