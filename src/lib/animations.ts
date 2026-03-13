import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export const stagger = (delayChildren = 0.1, staggerChildren = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const vp = { once: true, amount: 0.2 as const }
