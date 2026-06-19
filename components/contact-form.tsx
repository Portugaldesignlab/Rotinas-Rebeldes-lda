'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle, CircleNotch, PaperPlaneTilt } from '@phosphor-icons/react'
import { servicos } from '@/lib/site'

type Estado = 'idle' | 'enviar' | 'sucesso' | 'erro'

export function ContactForm() {
  const [estado, setEstado] = useState<Estado>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEstado('enviar')
    // Simulação de envio. Ligar a um serviço de email/servidor quando disponível.
    try {
      await new Promise((r) => setTimeout(r, 1100))
      setEstado('sucesso')
      ;(e.target as HTMLFormElement).reset()
    } catch {
      setEstado('erro')
    }
  }

  if (estado === 'sucesso') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/12 text-primary">
          <CheckCircle size={30} weight="duotone" />
        </span>
        <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
          Pedido recebido
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Obrigado pelo contacto. Vamos analisar o seu pedido e responder o mais breve
          possível, normalmente no próprio dia.
        </p>
        <button
          type="button"
          onClick={() => setEstado('idle')}
          className="mt-6 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Enviar outro pedido
        </button>
      </div>
    )
  }

  const aEnviar = estado === 'enviar'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-6 md:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-sm font-medium text-foreground">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="O seu nome"
            className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telefone" className="text-sm font-medium text-foreground">
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="9XX XXX XXX"
            className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="nome@exemplo.pt"
          className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25"
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="servico" className="text-sm font-medium text-foreground">
          Tipo de trabalho
        </label>
        <select
          id="servico"
          name="servico"
          defaultValue=""
          className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {servicos.map((s) => (
            <option key={s.id} value={s.titulo}>
              {s.titulo}
            </option>
          ))}
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="localizacao" className="text-sm font-medium text-foreground">
          Localização da obra
        </label>
        <input
          id="localizacao"
          name="localizacao"
          type="text"
          placeholder="Ex.: Castelo Rodrigo, Figueira de Castelo Rodrigo"
          className="rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25"
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          placeholder="Conte-nos o que precisa: tipo de obra, localização e prazo desejado."
          className="resize-y rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25"
        />
        <p className="text-xs text-muted-foreground">
          Respondemos normalmente no próprio dia útil.
        </p>
      </div>

      <label
        htmlFor="rgpd"
        className="mt-6 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted-foreground"
      >
        <input
          id="rgpd"
          name="rgpd"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-input accent-primary"
        />
        <span>
          Li e aceito a{' '}
          <a href="#privacidade" className="text-primary link-underline">
            Política de Privacidade
          </a>{' '}
          e consinto o tratamento dos meus dados para resposta ao meu pedido. (RGPD)
        </span>
      </label>

      {estado === 'erro' && (
        <p className="mt-4 rounded-md border border-destructive/40 bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive">
          Não foi possível enviar. Tente novamente ou ligue-nos diretamente.
        </p>
      )}

      <button
        type="submit"
        disabled={aEnviar}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform active:scale-[0.98] disabled:opacity-70 sm:w-auto"
      >
        {aEnviar ? (
          <>
            <CircleNotch size={18} weight="bold" className="animate-spin" />
            A enviar...
          </>
        ) : (
          <>
            <PaperPlaneTilt size={18} weight="bold" />
            Enviar pedido
          </>
        )}
      </button>
    </form>
  )
}
