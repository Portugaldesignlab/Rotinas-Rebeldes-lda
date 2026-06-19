import Link from 'next/link'
import { MapPin, Phone, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'
import { empresa, navLinks, servicos } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-heading text-sm font-bold text-primary-foreground">
                RR
              </span>
              <span className="font-heading text-base font-semibold text-foreground">
                {empresa.nome}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Telhados, construção, serralharia e agricultura em Figueira de Castelo
              Rodrigo. Trabalho de mãos da Beira Interior desde {empresa.fundacao}.
            </p>
            <dl className="mt-5 flex flex-col gap-1 text-xs text-muted-foreground">
              <div className="flex gap-2">
                <dt className="text-foreground/70">NIPC</dt>
                <dd>{empresa.nif}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-foreground/70">Alvará</dt>
                <dd>{empresa.alvara}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Serviços</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {servicos.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/#${s.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Navegação</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Contactos</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  {empresa.morada}
                  <br />
                  {empresa.localidade}, {empresa.concelho}
                </span>
              </li>
              <li>
                <a
                  href={empresa.telefoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <Phone size={18} className="shrink-0 text-primary" />
                  {empresa.telefone}
                </a>
              </li>
              <li>
                <a
                  href={empresa.emailHref}
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <EnvelopeSimple size={18} className="shrink-0 text-primary" />
                  {empresa.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6">
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground"
            aria-label="Informação legal"
          >
            <Link href="/contactos#privacidade" className="transition-colors hover:text-foreground">
              Política de Privacidade
            </Link>
            <Link href="/contactos#privacidade" className="transition-colors hover:text-foreground">
              Termos e Condições
            </Link>
            <a
              href={empresa.livroReclamacoes}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Livro de Reclamações
            </a>
          </nav>
          <div className="flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              {empresa.nomeCompleto} · NIPC {empresa.nif} · © {new Date().getFullYear()}.
              Todos os direitos reservados.
            </p>
            <p>
              {empresa.morada}, {empresa.codigoPostal} {empresa.localidade}, Portugal
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
