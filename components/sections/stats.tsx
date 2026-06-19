import { Reveal } from '@/components/reveal'
import { empresa } from '@/lib/site'

const itens = [
  { valor: '4', label: 'Especialidades numa só equipa' },
  { valor: '100%', label: 'Telha cerâmica e pedra da região' },
  { valor: `Alvará ${empresa.alvara}`, label: 'Construção licenciada' },
  { valor: 'Sem compromisso', label: 'Visita e orçamento gratuitos' },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
            {itens.map((item) => (
              <div key={item.label} className="px-5 py-9 md:px-7 md:py-12">
                <dt className="font-heading text-xl font-semibold tracking-tight text-primary md:text-2xl">
                  {item.valor}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
