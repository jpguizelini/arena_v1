'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ParallaxBannerProps {
  imageSrc: string;
  imageAlt?: string;
  overlay?: string;
  children?: React.ReactNode;
}

export default function ParallaxBanner({
  imageSrc,
  imageAlt = '',
  overlay,
  children,
}: ParallaxBannerProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mousePos]);

  return (
    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-0 overflow-hidden">
      <motion.div
        className="w-full"
        style={{ x: smoothPos.x * -20, y: smoothPos.y * -14, scale: 1.06 }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto min-h-[500px] sm:min-h-[600px] md:min-h-0 object-cover md:object-contain"
          priority
        />
      </motion.div>

      {overlay && <div className={`absolute inset-0 ${overlay}`} />}

      {children && (
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6"
          style={{ x: smoothPos.x * 6, y: smoothPos.y * 4 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}