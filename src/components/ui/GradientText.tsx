'use client'

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  from?: string;
  via?: string;
  to?: string;
  className?: string;
  text?: string;
  size?: string;
  position?: string;
  animated?: boolean;      // ← nova prop
  variants?: Variants;     // ← nova prop
}

export default function GradientText({
  children,
  from = '#c3d33f',
  via = '#079c9e',
  to = '#c3d33f',
  className = '',
  size = 'text-[28px] sm:text-[35px] md:text-[47px]',
  position = 'text-center',
  animated = true,         // ← padrão mantém comportamento original
  variants,
}: GradientTextProps) {
  // Quando animated=false, usa variants do pai (stagger). Quando true, anima sozinho.
  const motionProps = animated
    ? {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.8, delay: 0.4 },
      }
    : { variants };

  return (
    <motion.p
        className={`font-bebas font-regular ${size} leading-tight ${position} wrap-break-word`}
        {...motionProps}
    >
        <span
        className={`bg-clip-text text-transparent ${className}`}
        style={{ backgroundImage: `linear-gradient(to right, ${from}, ${via}, ${to})` }}
        >
        {children}
        </span>
    </motion.p>
  )
}