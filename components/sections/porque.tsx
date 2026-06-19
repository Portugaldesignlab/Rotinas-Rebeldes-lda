import {
  ShieldCheck,
  MapPin,
  Handshake,
  Hammer,
} from '@phosphor-icons/react/dist/ssr'
import { Reveal } from '@/components/reveal'

const motivos = [
  {
    icon: ShieldCheck,
    titulo: 'Obra que dura',
    texto:
      'Estruturas, isolamentos e impermeabilizações pensados para os Invernos da Beira. Sem atalhos.',
  },
  {
    icon: MapPin,
    titulo: 'Somos da terra',
    texto:
      'Com sede em Castelo Rodrigo, estamos perto e respondemos depressa em todo o concelho.',
  },
  {
    icon: Handshake,
    titulo: 'Palavra dada',
    texto:
      'Orçamentos claros, prazos cumpridos e o cliente informado em cada fase da obra.',
  },
  {
    icon: Hammer,
    titulo: 'Tudo numa equipa',
    texto:
      'Pedra, telha, ferro e campo. Coordenamos toda a obra sem andar à procura de subcontratos.',
  },
]

export function Porque() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <span className="label text-primary">Confiança</span>
          <h2 className="mt-4 max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Porque é que os nossos vizinhos nos voltam a chamar.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {motivos.map((m, i) => (
            <Reveal key={m.titulo} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-4 bg-card p-7 md:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/12 text-primary">
                  <m.icon size={22} weight="duotone" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {m.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
