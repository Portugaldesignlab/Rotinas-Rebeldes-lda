import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, EnvelopeSimple, Clock } from '@phosphor-icons/react/dist/ssr'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { empresa } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contactos | Rotinas Rebeldes',
  description:
    'Peça um orçamento para telhados, construção, serralharia ou agricultura em Figueira de Castelo Rodrigo. Fale com a Rotinas Rebeldes Unipessoal Lda.',
}

const contactos = [
  {
    icon: MapPin,
    titulo: 'Morada',
    linhas: [empresa.morada, `${empresa.localidade}, ${empresa.concelho}`],
  },
  {
    icon: Phone,
    titulo: 'Telefone',
    linhas: [empresa.telefone],
    href: empresa.telefoneHref,
  },
  {
    icon: EnvelopeSimple,
    titulo: 'Email',
    linhas: [empresa.email],
    href: empresa.emailHref,
  },
  {
    icon: Clock,
    titulo: 'Horário',
    linhas: ['Seg a Sex: 8h30–13h', '14h–18h'],
  },
]

export default function ContactosPage() {
  return (
    <div className="min-h-[100dvh] bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
            <Reveal>
              <span className="label text-primary">Contactos</span>
              <h1 className="mt-4 max-w-2xl text-balance font-heading text-5xl font-semibold leading-[1.02] tracking-tight text-foreground md:text-6xl">
                Vamos falar sobre a sua obra.
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Conte-nos o que precisa e marcamos uma visita ao local. Orçamento claro
                e sem compromisso, em todo o concelho de Figueira de Castelo Rodrigo.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                  {contactos.map((c) => (
                    <div key={c.titulo} className="bg-card p-6">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/12 text-primary">
                        <c.icon size={20} weight="duotone" />
                      </span>
                      <h2 className="mt-4 font-heading text-sm font-semibold text-foreground">
                        {c.titulo}
                      </h2>
                      <div className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {c.href ? (
                          <a href={c.href} className="transition-colors hover:text-foreground">
                            {c.linhas.map((l) => (
                              <span key={l} className="block">
                                {l}
                              </span>
                            ))}
                          </a>
                        ) : (
                          c.linhas.map((l) => (
                            <span key={l} className="block">
                              {l}
                            </span>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-xl border border-border">
                  <Image
                    src="/images/castelo-rodrigo.png"
                    alt="Aldeia histórica de Castelo Rodrigo, sede da Rotinas Rebeldes"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="privacidade" className="scroll-mt-20 border-t border-border bg-card py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <Reveal>
              <span className="label text-primary">RGPD</span>
              <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Política de Privacidade
              </h2>
              {/* SUBSTITUIR: rever com aconselhamento jurídico */}
              <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  O responsável pelo tratamento dos dados é a {empresa.nomeCompleto}, com
                  sede em {empresa.morada}, {empresa.codigoPostal} {empresa.localidade}.
                  Os dados que nos fornece através do formulário de contacto (nome,
                  telefone, email, localização e mensagem) são tratados com a única
                  finalidade de responder ao seu pedido de orçamento ou informação.
                </p>
                <p>
                  Os dados não são cedidos a terceiros e são conservados apenas durante o
                  tempo necessário para o efeito. Nos termos do Regulamento Geral sobre a
                  Proteção de Dados (RGPD), pode exercer os direitos de acesso,
                  retificação, eliminação, limitação e oposição ao tratamento dos seus
                  dados, contactando-nos através de{' '}
                  <a href={empresa.emailHref} className="text-primary link-underline">
                    {empresa.email}
                  </a>
                  .
                </p>
                <p>
                  Em caso de reclamação, dispõe do{' '}
                  <a
                    href={empresa.livroReclamacoes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary link-underline"
                  >
                    Livro de Reclamações eletrónico
                  </a>{' '}
                  e da Comissão Nacional de Proteção de Dados (CNPD).
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
