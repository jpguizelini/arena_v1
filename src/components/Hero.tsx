"use client";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

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

const CAROUSEL_IMAGES = [
  "/images/home/banner-home-noite.jpg",
  "/images/home/banner-home-dia-2.jpg"
];

const SLIDE_DURATION = 70000;

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(numbersRef, { once: true, margin: "-100px" });

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent((index + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % CAROUSEL_IMAGES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [paused, current]);

  const cidades = useCounter(30, 2800, isInView);
  const milhoes = useCounter(240, 3500, isInView);

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

  const imgX = smoothPos.x * -20;
  const imgY = smoothPos.y * -14;
  const contentX = smoothPos.x * 6;
  const contentY = smoothPos.y * 4;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-0 overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative w-full">

        {/* ── Carrossel de imagens ── */}
        <motion.div
          className="w-full relative"
          style={{ x: imgX, y: imgY, scale: 1.3 }}
        >
          {/* imagem fantasma para manter a altura do container */}
          <Image
            src={CAROUSEL_IMAGES[0]}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto min-h-[500px] sm:min-h-[600px] md:min-h-0 object-cover md:object-contain invisible"
            aria-hidden
          />

          {/* imagens reais animando por cima */}
          <div className="absolute inset-0">
            <AnimatePresence mode="sync">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={CAROUSEL_IMAGES[current]}
                  alt={`Outdoor Imídia ${current + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover md:object-contain object-[68%_30%] sm:object-[57%_30%] md:ml-20 md:object-[50%_30%]"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Gradiente overlay ── */}
        <div className="hidden sm:block absolute inset-0">
          <div
            className="absolute left-0 top-0 w-full md:w-3/4 h-full"
            style={{
              background: 'radial-gradient(ellipse 100% 300% at -10% 50%, rgba(168, 201, 60, 1) 0%, rgba(61, 151, 98, 1) 25%, rgba(0, 104, 105, 1) 50%, rgba(0, 0, 0, 0) 75%)'
            }}
          />
        </div>

        {/* ── Conteúdo ── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center sm:justify-start"
          style={{ x: contentX, y: contentY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="pl-4 pt-45 sm:pt-0 sm:pl-8 md:pl-[76px] flex flex-col gap-1 max-w-[90%] sm:max-w-[80%] md:max-w-none sm:items-start items-center justify-center text-center sm:text-left">
            <motion.p
              className="text-white font-bold text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[34px] 2xl:text-[38px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Sua empresa em <span className="inline">evidência</span>
            </motion.p>

            <div ref={numbersRef}>
              <motion.h1
                className="font-bebas text-accent font-bold text-[50px] sm:text-[68px] md:text-[89px] lg:text-[110px] xl:text-[120px] 2xl:text-[130px] leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }
                }}
              >
                +{cidades} CIDADES
              </motion.h1>
              <motion.h1
                className="font-bebas text-accent font-bold text-[50px] sm:text-[68px] md:text-[89px] lg:text-[110px] xl:text-[120px] 2xl:text-[130px] leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{
                  duration: 0.6,
                  delay: 0.9,
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                }}
              >
                +{milhoes} MILHÕES
              </motion.h1>
            </div>

            <motion.p
              className="font-bebas text-accent text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] md:-mt-[25px] md:ml-[36px] md:mr-[100px] md:tracking-[0.4px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              DE PESSOAS IMPACTADAS <span className="inline">MENSALMENTE</span>
            </motion.p>

            <motion.button
              type="button"
              className="mt-2 w-fit border-2 text-primary bg-white font-bebas text-[18px] sm:text-[22px] md:text-[25.55px] lg:text-[30px] xl:text-[34px] 2xl:text-[38px] px-4 sm:px-5 md:px-6 py-2 hover:bg-accent hover:text-dark rounded-2xl"
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

        {/* ── Dots ── */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {CAROUSEL_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className="relative w-2.5 h-2.5 rounded-full overflow-hidden transition-all focus:outline-none"
              style={{ background: i === current ? 'white' : 'rgba(255,255,255,0.4)' }}
            >
              {i === current && !paused && (
                <motion.span
                  className="absolute inset-0 rounded-full origin-left"
                  style={{ background: 'rgba(168, 201, 60, 0.9)' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  key={current}
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}