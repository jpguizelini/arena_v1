import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Front Light",
  description: "Painéis front light com iluminação frontal constante — visibilidade dia e noite em vias estratégicas."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
