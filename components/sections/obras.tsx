import Image from 'next/image'
import { galeria } from '@/lib/site'
import { Reveal } from '@/components/reveal'

export function Obras() {
  return (
    <section id="obras" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="label text-primary">Obras realizadas</span>
            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Casas de pedra que voltam a ganhar vida.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              Recuperações e construções em granito, com telhados feitos para durar.
              Algumas das obras que nos enchem de orgulho na região.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
          {galeria.map((foto, i) => {
            const span =
              i === 0
                ? 'md:col-span-7'
                : i === 1
                  ? 'md:col-span-5'
                  : i === 2
                    ? 'md:col-span-5'
                    : 'md:col-span-7'
            return (
              <Reveal key={foto.src} delay={i * 0.06} className={span}>
                <figure className="overflow-hidden">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-border">
                    <Image
                      src={foto.src || '/placeholder.svg'}
                      alt={foto.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    {foto.legenda}
                  </figcaption>
                </figure>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
