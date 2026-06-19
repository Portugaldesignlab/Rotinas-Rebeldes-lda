import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const valores = [
  'Nascidos e criados na Beira Interior',
  'Cada obra é feita como se fosse a nossa casa',
  'Materiais da terra, métodos que duram gerações',
]

export function Equipa() {
  return (
    <section id="equipa" className="scroll-mt-20 bg-card py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/equipa.png"
              alt="Equipa de trabalhadores de construção e telhados em frente a uma casa de pedra em obras"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="label text-primary">A nossa história</span>
            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Uma equipa que conhece cada pedra desta terra.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 flex max-w-xl flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A Rotinas Rebeldes nasceu em Dezembro de 2024, em Castelo Rodrigo, mas as
                mãos que a formam trabalham nestes montes há muito mais tempo. Crescemos
                a ver os mais velhos levantar paredes de granito, assentar telha à chuva
                e a tratar dos campos antes de o sol nascer.
              </p>
              <p>
                Somos pedreiros, telhadores, serralheiros e gente da terra. Cada telhado
                que cobrimos e cada casa de pedra que recuperamos leva o cuidado de quem
                vai cruzar-se com o cliente no café da aldeia no dia seguinte. É essa a
                nossa garantia: o trabalho fica à vista de toda a gente.
              </p>
              <p>
                Trabalhamos com telha cerâmica e pedra da região porque é o que melhor
                aguenta os Invernos rigorosos e os Verões secos da Beira Interior. Não
                fazemos atalhos. Fazemos obras para durar.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <ul className="mt-8 flex flex-col divide-y divide-border border-t border-border">
              {valores.map((v) => (
                <li
                  key={v}
                  className="flex items-center gap-3 py-4 text-sm font-medium text-foreground"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
