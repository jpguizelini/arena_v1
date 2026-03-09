'use client'

import Hero from "@/components/Hero"
import Coverage from "@/components/Coverage"
import Oportunities from "@/components/Oportunities"
import GroupCompanies from "@/components/GroupCompanies"
import MidiaFormats from "@/components/MidiaFormats"
import Contact from "@/components/Contact"
import SocialFeed from "@/components/SocialFeed"
import type { ReactNode } from 'react'

export default function HomeSections({
  midiaFormats,
}: {
  midiaFormats?: ReactNode
}) {
  return (
    <div>
      <Hero />
      <Coverage description={
        <>
          A maior em número de cidades atendidas por<br />
          uma empresa de OOH no interior e litora de São Paulo
        </>
      } />
      <Oportunities />
      <GroupCompanies />
      {midiaFormats ?? <MidiaFormats />}
      <Contact />
      <SocialFeed />
    </div>
  )
}