import Image from 'next/image'
import { servicos } from '@/lib/site'
import { Reveal } from '@/components/reveal'

function Cartao({
  servico,
  className,
  destaque = false,
}: {
  servico: (typeof servicos)[number]
  className?: string
  destaque?: boolean
}) {
  return (
    <article
      id={servico.id}
      className={`group relative scroll-mt-24 overflow-hidden rounded-xl border border-border ${className ?? ''}`}
    >
      <Image
        src={servico.imagem || '/placeholder.svg'}
        alt={servico.alt}
        fill
        sizes={destaque ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />
      <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
        <h3
          className={`font-heading font-semibold tracking-tight text-white ${
            destaque ? 'text-3xl md:text-4xl' : 'text-2xl'
          }`}
        >
          {servico.titulo}
        </h3>
        <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-white/85">
          {servico.resumo}
        </p>
      </div>
    </article>
  )
}

export function Servicos() {
  const [telhados, construcao, serralharia, agricultura] = servicos

  return (
    <section id="servicos" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="label text-primary">O que fazemos</span>
            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Quatro ofícios, uma só equipa de confiança.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 md:gap-5 lg:grid-cols-6 lg:grid-rows-[260px_260px]">
            <Cartao
              servico={telhados}
              destaque
              className="min-h-[340px] lg:col-span-4 lg:row-span-2 lg:min-h-0"
            />
            <Cartao servico={construcao} className="min-h-[260px] lg:col-span-2" />
            <Cartao servico={serralharia} className="min-h-[260px] lg:col-span-2" />
            <Cartao
              servico={agricultura}
              className="min-h-[260px] lg:col-span-6 lg:min-h-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
