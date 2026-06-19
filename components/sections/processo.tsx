import { processo } from '@/lib/site'
import { Reveal } from '@/components/reveal'

export function Processo() {
  return (
    <section id="processo" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="label text-primary">Como trabalhamos</span>
            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Da visita à entrega, sem caos nem surpresas.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              Um processo simples e transparente, para que saiba sempre em que pé está a
              sua obra.
            </p>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {processo.map((passo, i) => (
            <Reveal as="li" key={passo.numero} delay={i * 60}>
              <div className="flex h-full flex-col gap-4 bg-card p-7 md:p-8">
                <span className="font-heading text-4xl font-semibold text-primary/40">
                  {passo.numero}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {passo.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {passo.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
