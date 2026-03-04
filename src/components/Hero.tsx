"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCounter(target: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [startCounting, target, duration]);

  return count;
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(numbersRef, { once: true, margin: "-100px" });

  const cidades = useCounter(30, 2800, isInView);
  const milhoes = useCounter(240, 3500, isInView);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
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
    <section ref={sectionRef} className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-0 overflow-hidden">
      <div className="relative w-full">

        <motion.div
          className="w-full"
          style={{ x: imgX, y: imgY, scale: 1.06 }}
        >
          <Image
            src="/images/outdoor5.jpg"
            alt="Outdoor Imídia"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto min-h-[500px] sm:min-h-[600px] md:min-h-0 object-cover md:object-contain"
            priority
          />
        </motion.div>

        <div className="absolute inset-0">
          <div
            className="absolute left-0 top-0 w-full md:w-3/4 h-full"
            style={{
              background: 'radial-gradient(ellipse 100% 300% at -10% 50%, rgba(168, 201, 60, 1) 0%, rgba(61, 151, 98, 1) 25%, rgba(0, 104, 105, 1) 50%, rgba(0, 0, 0, 0) 75%)'
            }}
          />
        </div>

        <motion.div
          className="absolute inset-0 flex items-center"
          style={{ x: contentX, y: contentY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="pl-4 sm:pl-8 md:pl-[76px] flex flex-col gap-1 max-w-[90%] sm:max-w-[80%] md:max-w-none">
            <motion.p
              className="text-white font-bold text-[18px] sm:text-[22px] md:text-[26px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Sua empresa em <span className="block sm:inline">evidência</span>
            </motion.p>

            <div ref={numbersRef}>
              <motion.h1
                className="font-bebas text-accent font-bold text-[48px] sm:text-[68px] md:text-[89px] leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7,
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0
                  }
                }}
              >
                +{cidades} CIDADES
              </motion.h1>
              <motion.h1
                className="font-bebas text-accent font-bold text-[48px] sm:text-[68px] md:text-[89px] leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.9,
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }
                }}
              >
                +{milhoes} MILHÕES
              </motion.h1>
            </div>

            <motion.p
              className="font-bebas text-accent text-[20px] sm:text-[24px] md:text-[28px] md:-mt-[25px] md:ml-[36px] md:mr-[100px] md:tracking-[0.4px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              DE PESSOAS IMPACTADAS <span className="block sm:inline">MENSALMENTE</span>
            </motion.p>
            <motion.button
              className="mt-2 w-fit border-2 text-primary bg-white font-bebas text-[18px] sm:text-[22px] md:text-[25.55px] px-4 sm:px-5 md:px-6 py-2 hover:bg-accent hover:text-dark rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              QUERO ME DESTACAR
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}