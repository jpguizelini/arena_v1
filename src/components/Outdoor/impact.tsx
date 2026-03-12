'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ImpactSection() {
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

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-[60px] py-16">
      <div className="relative w-full overflow-hidden">

        {/* Imagem com parallax */}
        <motion.div
          style={{ x: smoothPos.x * -20, y: smoothPos.y * -14, scale: 1.06 }}
        >
          <Image
            src="/images/outdoor/marca-evidencia.jpg"
            alt="Sua marca em evidência"
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </motion.div>

        {/* Content Overlay com parallax inverso */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16"
          style={{ x: smoothPos.x * 6, y: smoothPos.y * 4 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.section
            className="w-full max-w-4xl mx-auto flex flex-col items-center px-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="font-goldplay font-bold text-white text-center mb-1"
              style={{ fontSize: 'clamp(24px, 5vw, 38px)', lineHeight: '1.2' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Sua marca em evidência
            </motion.h2>

            <motion.div
              className="flex flex-col items-center w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="text-center w-full"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.p
                  className="font-bebas font-normal leading-none"
                  style={{ fontSize: 'clamp(48px, 8vw, 128px)', color: '#C3D33F', marginBottom: '2px' }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                >
                  +30 CIDADES
                </motion.p>
              </motion.div>

              <motion.div
                className="text-center w-full"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.p
                  className="font-bebas font-normal leading-none"
                  style={{ fontSize: 'clamp(48px, 8vw, 128px)', color: '#C3D33F' }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  +240 MILHÕES
                </motion.p>
              </motion.div>

              <motion.div
                className="text-center w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p
                  className="font-bebas font-normal uppercase"
                  style={{ fontSize: 'clamp(16px, 3vw, 30px)', color: '#C3D33F' }}
                >
                  de pessoas impactadas mensalmente
                </p>
              </motion.div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}