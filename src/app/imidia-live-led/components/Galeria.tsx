import Galeria from "@/components/shared/Galeria"

const galleryItems = [
  { id: 1, image: '/images/live-led/galeria-1.jpg', objectPosition: 'center' },
  { id: 2, image: '/images/live-led/galeria-2.jpg', objectPosition: 'center' },
  { id: 3, image: '/images/live-led/galeria-3.jpg', objectPosition: 'center 0%' },
  { id: 4, image: '/images/live-led/galeria-4.jpg', objectPosition: 'center' },
  { id: 5, image: '/images/live-led/galeria-5.jpg', objectPosition: 'center' },
  { id: 6, image: '/images/live-led/galeria-6.jpg', objectPosition: 'center' }
]

export default function GaleriaPage() {
  return <Galeria items={galleryItems} columns={2} className="pt-2" />
}