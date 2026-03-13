import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Painel de Rodovia",
  description: "Painéis em rodovias do interior paulista — alcance em trajetos de alto volume diário."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
