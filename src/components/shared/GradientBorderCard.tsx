'use client'
import { useId } from 'react'

interface GradientBorderCardProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  strokeWidth?: number
}

export default function GradientBorderCard({
  children,
  className = '',
  innerClassName = '',
  strokeWidth = 3,
}: GradientBorderCardProps) {
  const uid = useId().replace(/:/g, '')
  const gId = `gbg-${uid}` 

  return (
    <div className={`relative ${className}`}>
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gId} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#c3d33f" />
            <stop offset="100%" stopColor="#079c9e" />
          </linearGradient>
        </defs>
        <rect
          x="1.5" y="1.5" width="calc(100% - 3px)" height="calc(100% - 3px)"
          rx="12" ry="12" fill="none"
          stroke={`url(#${gId})`}
          strokeWidth={strokeWidth}
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
      </svg>
      <div className={`relative z-10 ${innerClassName}`}>
        {children}
      </div>
    </div>
  )
}
