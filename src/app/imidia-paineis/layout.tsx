import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "I'mídia Painéis",
  description: "A maior em número de cidades OOH no interior paulista. +30 cidades atendidas."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
