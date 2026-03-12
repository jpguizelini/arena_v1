'use client'

import Galeria from "@/components/shared/Galeria"

const galleryItems = [
  { id: 1, image: '/images/painel-digital/galeria1.jpg', objectPosition: 'center' },
  { id: 2, image: '/images/painel-digital/galeria2.jpg', objectPosition: 'center 0%' },
  { id: 3, image: '/images/painel-digital/galeria3.jpg', objectPosition: 'center 0%' },
  { id: 4, image: '/images/painel-digital/galeria4.jpg', objectPosition: 'center' },
  { id: 5, image: '/images/painel-digital/galeria5.jpg', objectPosition: 'center' },
  { id: 6, image: '/images/painel-digital/galeria6.jpg', objectPosition: '100% 0%' }
]

export default function GaleriaPage() {
  return <Galeria items={galleryItems} columns={2} />
}