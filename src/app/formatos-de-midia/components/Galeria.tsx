import Galeria from '@/components/shared/Galeria'

const galleryItems = [
  { id: 1, image: '/images/formatos/banner-2.jpg', objectPosition: 'center' },
  { id: 2, image: '/images/formatos/mosaico-digital.jpg', objectPosition: 'center' },
  { id: 3, image: '/images/formatos/iconico-2.jpg', objectPosition: 'center 0%' },
  { id: 4, image: '/images/formatos/galeria-4.jpg', objectPosition: 'center' },
  { id: 5, image: '/images/formatos/galeria-5.jpg', objectPosition: 'center' },
  { id: 6, image: '/images/formatos/banner-1.jpg', objectPosition: 'center' }
]

export default function GaleriaPage() {
  return <Galeria items={galleryItems} columns={2} />
}