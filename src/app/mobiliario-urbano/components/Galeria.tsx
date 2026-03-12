'use client'

import Galeria from "@/components/shared/Galeria"

const galleryItems = [
  { id: 1, image: '/images/mobiliario-urbano/galeria1.jpg', objectPosition: 'center' },
  { id: 2, image: '/images/mobiliario-urbano/galeria2.jpg', objectPosition: 'center 0%' },
  { id: 3, image: '/images/mobiliario-urbano/galeria3.jpg', objectPosition: 'top' },
  { id: 4, image: '/images/mobiliario-urbano/galeria4.jpg', objectPosition: 'center' },
  { id: 5, image: '/images/mobiliario-urbano/galeria5.jpg', objectPosition: 'center' },
  { id: 6, image: '/images/mobiliario-urbano/galeria6.jpg', objectPosition: '100%' }
]

export default function GaleriaPage() {
  return <Galeria items={galleryItems} columns={2} />
}