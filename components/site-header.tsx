'use client'

import { useState } from 'react'
import Link from 'next/link'
import { List, X, Phone } from '@phosphor-icons/react'
import { empresa, navLinks } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label={empresa.nome}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-heading text-sm font-bold text-primary-foreground">
            RR
          </span>
          <span className="font-heading text-base font-semibold tracking-tight text-foreground">
            {empresa.nome}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contactos"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
          >
            <Phone size={16} weight="bold" />
            Pedir orçamento
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contactos"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
            >
              <Phone size={18} weight="bold" />
              Pedir orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
