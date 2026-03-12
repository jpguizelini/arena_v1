'use client'

import Galeria from '../shared/Galeria'

const galleryItems = [
  {
    id: 1,
    image: '/images/outdoor/galeria-outdoor-1.png'
  },
  {
    id: 2,
    image: '/images/outdoor/bras-olaia-2.png'
  },
  {
    id: 3,
    image: '/images/outdoor/galeria-outdoor-3.png'
  },
  {
    id: 4,
    image: '/images/outdoor/galeria-outdoor-2.png'
  },
  {
    id: 5,
    image: '/images/outdoor/galeria-outdoor-5.png'
  },
  {
    id: 6,
    image: '/images/outdoor/galeria-outdoor-4.png'
  }
]

export default function GalleryGrid() {
  return <Galeria items={galleryItems} columns={3} />
}
