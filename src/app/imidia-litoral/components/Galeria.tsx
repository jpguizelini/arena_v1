import Galeria from '@/components/shared/Galeria'

const galleryItems = [
  {
    id: 1,
    image: '/images/litoral/galeria1.jpg'
  },
  {
    id: 2,
    image: '/images/litoral/galeria2.jpg'
  },
  {
    id: 3,
    image: '/images/litoral/galeria3.jpg'
  },
  {
    id: 4,
    image: '/images/litoral/galeria4.jpg'
  },
  {
    id: 5,
    image: '/images/litoral/galeria5.jpg'
  },
  {
    id: 6,
    image: '/images/litoral/galeria6.jpg'
  }
]

export default function GaleriaPage() {
  return <Galeria items={galleryItems} columns={2} />
}