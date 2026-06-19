import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from '@phosphor-icons/react/dist/ssr'
import { empresa } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden">
      <Image
        src="/images/hero-aldeia-pedra.png"
        alt="Casa rústica de pedra com telhado de telha cerâmica na paisagem rural de Figueira de Castelo Rodrigo"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark editorial overlay for gold-text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 md:px-8 md:pb-24">
        <div className="max-w-3xl">
          <span className="label text-primary">
            Figueira de Castelo Rodrigo · Beira Interior
          </span>
          <h1 className="mt-6 text-balance font-heading text-5xl font-semibold leading-[1.02] text-foreground md:text-7xl lg:text-[5.5rem]">
            Telhados e casas em pedra, feitos por mãos da Beira.
          </h1>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Construímos, recuperamos e cobrimos casas de raiz na Beira Interior.
            Telhados, construção civil, serralharia e agricultura, com o rigor de quem
            trabalha para os vizinhos.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contactos"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform active:scale-[0.98]"
            >
              Pedir orçamento
              <ArrowRight size={18} weight="bold" />
            </Link>
            <a
              href={empresa.telefoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background/40 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
            >
              <Phone size={18} weight="bold" />
              Falar connosco
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
