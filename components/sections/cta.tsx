import Link from 'next/link'
import { ArrowRight, Phone } from '@phosphor-icons/react/dist/ssr'
import { empresa } from '@/lib/site'
import { Reveal } from '@/components/reveal'

export function Cta() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center md:px-12 md:py-20">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Tem um telhado, uma obra ou uma casa de pedra em mente?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85">
              Fale connosco. Vamos ao local, ouvimos a sua ideia e apresentamos um
              orçamento claro, sem compromisso.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contactos"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform active:scale-[0.98]"
              >
                Pedir orçamento
                <ArrowRight size={18} weight="bold" />
              </Link>
              <a
                href={empresa.telefoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <Phone size={18} weight="bold" />
                {empresa.telefone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
