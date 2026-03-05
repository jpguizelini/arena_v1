import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  from?: string;
  via?: string;
  to?: string;
  className?: string;
  size?: string;
}

export default function GradientText({
  children,
  from = '#c3d33f',
  via = '#079c9e',
  to = '#c3d33f',
  className = '',
  size = 'text-[28px] sm:text-[35px] md:text-[47px]',
}: GradientTextProps) {
  return (
    <motion.p
        className={cn(
          "font-bebas leading-tight wrap-break-word",
          size,
          className
        )}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
    >
        <span
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: `linear-gradient(to right, ${from}, ${via}, ${to})` }}
        >
        {children}
        </span>
    </motion.p>
  )
}