import Galeria from '@/components/shared/Galeria'
import Image from 'next/image'

const items = [
  { id: 1, image: '/images/live-led/galeria-1.jpg', objectPosition: 'center' },
  { id: 2, image: '/images/live-led/galeria-2.jpg', objectPosition: 'center' },
  { id: 3, image: '/images/live-led/galeria-3.jpg', objectPosition: 'center 0%' },
  { id: 4, image: '/images/live-led/galeria-4.jpg', objectPosition: 'center' },
  { id: 5, image: '/images/live-led/galeria-5.jpg', objectPosition: 'center' },
  { id: 6, image: '/images/live-led/galeria-6.jpg', objectPosition: 'center' },
]

export default function GaleriaLiveLed() {
  return (
    <div>
      <Galeria items={items} sectionClassName="w-full py-16" />
      {/* Robô decorativo */}
      <div className="flex justify-center pb-16">
        <Image
          src="/images/live-led/robo-3.png"
          alt="Robô decorativo"
          width={240}
          height={140}
          className="object-contain"
        />
      </div>
    </div>
  )
}
