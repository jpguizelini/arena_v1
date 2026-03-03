'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ImpactSection() {
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
    <div className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-0 overflow-hidden">

      {/* Imagem com parallax */}
      <motion.div
        className="w-full"
        style={{ x: imgX, y: imgY, scale: 1.06 }}
      >
        <Image
          src="/images/outdoor/marca-evidencia.jpg"
          alt="Sua marca em evidência"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto min-h-[600px] sm:min-h-[700px] md:min-h-0 object-cover md:object-contain"
          priority
        />
      </motion.div>

      {/* Content Overlay com parallax inverso */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16"
        style={{ x: contentX, y: contentY }}
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
            className="font-goldplay font-bold text-white text-center"
            style={{
              fontSize: 'clamp(24px, 5vw, 38px)',
              lineHeight: '1.2',
              marginTop: 'clamp(150px, 20vw, 300px)',
              marginBottom: '5px'
            }}
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
              <p
                className="font-bebas font-normal leading-none"
                style={{ fontSize: 'clamp(48px, 8vw, 128px)', color: '#C3D33F', marginBottom: '2px' }}
              >
                +30 CIDADES
              </p>
            </motion.div>

            <motion.div
              className="text-center w-full"
              style={{ marginBottom: '-10px' }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <p
                className="font-bebas font-normal leading-none"
                style={{ fontSize: 'clamp(48px, 8vw, 128px)', color: '#C3D33F' }}
              >
                +240 MILHÕES
              </p>
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
  );
}