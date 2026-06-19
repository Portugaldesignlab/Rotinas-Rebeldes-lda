import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { Servicos } from '@/components/sections/servicos'
import { Processo } from '@/components/sections/processo'
import { Equipa } from '@/components/sections/equipa'
import { Obras } from '@/components/sections/obras'
import { Porque } from '@/components/sections/porque'
import { Cta } from '@/components/sections/cta'

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Servicos />
        <Processo />
        <Equipa />
        <Obras />
        <Porque />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  )
}
