'use client'

import { useMemo, useRef } from 'react'
import type { ReactNode } from 'react'

export default function Card3D({
  children,
  className,
  glowClassName,
}: {
  children: ReactNode
  className?: string
  glowClassName?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  const styles = useMemo(() => {
    return {
      perspective: '1000px',
    } as const
  }, [])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const midX = rect.width / 2
    const midY = rect.height / 2

    const rotateY = ((x - midX) / midX) * 10
    const rotateX = -((y - midY) / midY) * 10

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
  }

  function onMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <div
      style={styles}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          aria-hidden="true"
          className={
            glowClassName ??
            'pointer-events-none absolute inset-0 -z-10 opacity-70 blur-2xl bg-linear-to-r from-accent/25 to-[#079c9e]/25'
          }
        />

        <div
          ref={ref}
          className="will-change-transform transition-transform duration-200 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
