'use client'

import FormatosMidia, { GridItem } from '@/components/shared/FormatosMidia'

const gridItems: GridItem[] = [
  {
    id: 1,
    title: 'PAINEL FRONT LIGHT',
    image: '/images/outdoor/painel-front-light.png',
    href: '/frontlight'
  },
  {
    id: 2,
    title: 'PAINEL MEGA LIGHT',
    image: '/images/outdoor/painel-mega-light.png',
    href: '/mega-light'
  },
  {
    id: 3,
    title: 'PAINEL DE RODOVIA',
    image: '/images/outdoor/painel-rodovia.png',
    href: '/rodovia'
  },
  {
    id: 4,
    title: 'PAINEL DIGITAL',
    image: '/images/outdoor/painel-digital.png',
    href: '/painel-digital'
  }
]

export default function OutdoorGrid() {
  return (
    <FormatosMidia 
      items={gridItems}
      title="Outros formatos"
      showTriangles={true}
      gridCols="md:grid-cols-2"
      decorativeImage="/images/outdoor/triangulos.png"
    />
  )
}