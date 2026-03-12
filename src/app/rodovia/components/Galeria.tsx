'use client'

import Galeria from "@/components/shared/Galeria"

const galleryItems = [
  { id: 1, image: '/images/rodovia/galeria1.jpg', objectPosition: 'center' },
  { id: 2, image: '/images/rodovia/galeria2.jpg', objectPosition: 'center' },
  { id: 3, image: '/images/rodovia/galeria3.jpg', objectPosition: 'center 0%' },
  { id: 4, image: '/images/rodovia/galeria4.jpg', objectPosition: 'center' },
  { id: 5, image: '/images/rodovia/galeria5.jpg', objectPosition: 'center' },
  { id: 6, image: '/images/rodovia/galeria6.jpg', objectPosition: 'top' }
]

export default function GaleriaPage() {
   return <Galeria items={galleryItems} columns={2} />
}