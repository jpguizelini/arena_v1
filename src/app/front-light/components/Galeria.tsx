'use client'

import Galeria from "@/components/shared/Galeria"

const galleryItems = [
  { id: 1, image: '/images/front-light/galeria1.jpg', objectPosition: 'center' },
  { id: 2, image: '/images/front-light/galeria2.jpg', objectPosition: 'center' },
  { id: 3, image: '/images/front-light/galeria3.jpg', objectPosition: 'center 0%' },
  { id: 4, image: '/images/front-light/galeria4.jpg', objectPosition: 'center' },
  { id: 5, image: '/images/front-light/galeria5.jpg', objectPosition: 'center' },
  { id: 6, image: '/images/front-light/galeria6.jpg', objectPosition: 'center' }
]

export default function GaleriaPage() {
  return <Galeria items={galleryItems} columns={2} />
}