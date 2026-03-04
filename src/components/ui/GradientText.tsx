import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  from?: string;
  via?: string;
  to?: string;
  className?: string;
}

export default function GradientText({
  children,
  from = '#c3d33f',
  via = '#079c9e',
  to = '#c3d33f',
  className = '',
}: GradientTextProps) {
  return (
    <motion.p
        className="font-bebas font-regular text-[28px] sm:text-[35px] md:text-[47px] leading-tight text-center break-words px-2"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
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