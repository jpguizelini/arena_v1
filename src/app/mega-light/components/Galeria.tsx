import Galeria from "@/components/shared/Galeria"

const galleryItems = [
  { id: 1, image: '/images/mega-light/galeria1.jpg', objectPosition: 'center' },
  { id: 2, image: '/images/mega-light/galeria2.jpg', objectPosition: 'center 0%' },
  { id: 3, image: '/images/mega-light/galeria3.jpg', objectPosition: 'center 0%' },
  { id: 4, image: '/images/mega-light/galeria4.jpg', objectPosition: 'center' },
  { id: 5, image: '/images/mega-light/galeria5.jpg', objectPosition: 'center' },
  { id: 6, image: '/images/mega-light/galeria6.jpg', objectPosition: '100% 0%' }
]

export default function GaleriaPage() {
  return <Galeria items={galleryItems} columns={2} />
}