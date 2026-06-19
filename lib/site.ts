export const empresa = {
  nome: 'Rotinas Rebeldes',
  nomeCompleto: 'Rotinas Rebeldes Unipessoal Lda.',
  morada: 'Rua Cruz da Vila, nº 5',
  codigoPostal: '6440-031', // SUBSTITUIR: confirmar código postal
  localidade: 'Castelo Rodrigo',
  concelho: 'Figueira de Castelo Rodrigo',
  telefone: '+351 962 000 000', // SUBSTITUIR: telemóvel real
  telefoneHref: 'tel:+351962000000',
  email: 'geral@rotinasrebeldes.pt', // SUBSTITUIR: email real
  emailHref: 'mailto:geral@rotinasrebeldes.pt',
  fundacao: 'Dezembro de 2024',
  nif: '517 000 000', // SUBSTITUIR: NIPC real (9 dígitos)
  alvara: '00000 — PUB', // SUBSTITUIR: nº de alvará de construção
  horario: 'Seg a Sex: 8h30–13h / 14h–18h',
  livroReclamacoes: 'https://www.livroreclamacoes.pt/',
}

export const navLinks = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Processo', href: '/#processo' },
  { label: 'A Equipa', href: '/#equipa' },
  { label: 'Obras', href: '/#obras' },
  { label: 'Contactos', href: '/contactos' },
]

export const areasAtuacao = [
  'Figueira de Castelo Rodrigo',
  'Castelo Rodrigo',
  'Almeida',
  'Pinhel',
  'Guarda',
  'Vila Nova de Foz Côa',
  'Beira Interior',
]

export const servicos = [
  {
    id: 'telhados',
    titulo: 'Telhados',
    resumo:
      'Construção, substituição e reparação de telhados em telha cerâmica. Estrutura, isolamento e impermeabilização feitos para aguentar os Invernos rigorosos da Beira.',
    imagem: '/images/telhado-trabalho.png',
    alt: 'Trabalhadores a assentar telha cerâmica num telhado de uma casa de pedra',
  },
  {
    id: 'construcao',
    titulo: 'Construção Civil',
    resumo:
      'Obra nova, ampliações e recuperação de casas antigas em pedra, do alicerce ao acabamento, com cumprimento de prazos e orçamento.',
    imagem: '/images/construcao-civil.png',
    alt: 'Obra de construção civil de uma casa rural em pedra',
  },
  {
    id: 'serralharia',
    titulo: 'Serralharia',
    resumo:
      'Portões, gradeamentos, estruturas metálicas e trabalhos em ferro feitos por medida na nossa oficina.',
    imagem: '/images/serralharia.png',
    alt: 'Serralheiro a soldar um portão de ferro na oficina',
  },
  {
    id: 'agricultura',
    titulo: 'Agricultura',
    resumo:
      'Produções agrícolas e animais combinadas, com o cuidado de quem conhece a terra da Beira Interior.',
    imagem: '/images/agricultura.png',
    alt: 'Campos agrícolas da Beira Interior ao final da tarde',
  },
]

export const processo = [
  {
    numero: '01',
    titulo: 'Visita ao local',
    texto:
      'Vamos ao terreno, ouvimos a sua ideia e avaliamos a obra de perto, sem custos nem compromisso.',
  },
  {
    numero: '02',
    titulo: 'Orçamento claro',
    texto:
      'Apresentamos um orçamento detalhado, com materiais, prazos e preço fechado. Sem surpresas.',
  },
  {
    numero: '03',
    titulo: 'Execução com rigor',
    texto:
      'A nossa equipa põe mãos à obra, mantendo-o informado em cada fase e cumprindo o prazo combinado.',
  },
  {
    numero: '04',
    titulo: 'Entrega e garantia',
    texto:
      'Entregamos a obra limpa e acabada, e ficamos por perto para qualquer acompanhamento.',
  },
]

export const galeria = [
  {
    src: '/images/casa-rustica-pedra.png',
    alt: 'Casa rústica restaurada em granito com telhado de telha cerâmica',
    legenda: 'Recuperação completa em pedra granítica',
  },
  {
    src: '/images/casa-pedra-quintal.png',
    alt: 'Casa de pedra com pátio empedrado e telhado novo',
    legenda: 'Telhado novo e pátio empedrado',
  },
  {
    src: '/images/pedra-detalhe.png',
    alt: 'Detalhe de cantaria e alvenaria de granito feita à mão',
    legenda: 'Cantaria e alvenaria à mão',
  },
  {
    src: '/images/castelo-rodrigo.png',
    alt: 'Aldeia histórica de Castelo Rodrigo ao pôr do sol',
    legenda: 'Castelo Rodrigo, a nossa terra',
  },
]
