# 🎨 SISTEMA DE DESIGN — I'MÍDIA ARENA V1
## Documento Oficial de Padronização · Versão 2.0
### Baseado na análise do código-fonte real do projeto

---

## 🤖 PROMPT DE INSTRUÇÃO PARA IA

> Cole este bloco como **system prompt** antes de pedir qualquer alteração.

```
Você é um desenvolvedor Front-End especialista em Next.js 14, TypeScript, Tailwind CSS e Framer Motion.
Seu objetivo é padronizar todas as páginas do projeto I'mídia Arena v1 seguindo RIGOROSAMENTE
este documento de design system.

REGRAS ABSOLUTAS:
1. Nunca invente padrões novos. Se não estiver neste documento, pergunte antes.
2. Use sempre os componentes e classes EXATOS definidos aqui.
3. Todo arquivo de componente de página DEVE ter 'use client' no topo.
4. Nunca use <img> — sempre use <Image> do next/image.
5. Nunca use font-bold em parágrafos de Description — usar apenas font-goldplay sem peso extra.
6. Nunca use style={{}} com valores em pt (pontos tipográficos) — usar classes Tailwind.
7. Nunca repita o mesmo alt text em imagens diferentes.
8. O alt text da Galeria deve usar o nome da PÁGINA, não "outdoor" genérico.
9. Ao padronizar uma página, liste: o que foi corrigido, o que já estava correto.
10. Não remova funcionalidades existentes (ex: lightbox da Galeria, Card3D do Mapeamento).

BUGS CONHECIDOS A CORRIGIR EM TODAS AS PÁGINAS:
- Description: remover font-bold, md:text-[19.94px] e style inline de lineHeight/letterSpacing
- OutroFormatos: trocar <img> por <Image fill> do next/image
- Galeria: corrigir alt text de "Galeria outdoor N" para "Galeria [nome-da-pagina] N"
- Hero: garantir que GradientText tem o prefixo md: (md:text-[60px] lg:text-[80px] xl:text-[100px])
- Mapeamento/OutroFormatos sem 'use client': adicionar diretiva no topo
```

---

## 📋 VISÃO GERAL DO PROJETO

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion  
**Fontes:** `font-bebas` (títulos e destaques) · `font-goldplay` (corpo de texto)  
**Cores:** `#c3d33f` = `accent` · `#079c9e` = `cyan`  
**Estrutura de rotas:** `src/app/[pagina]/`

---

## 🗂️ MAPA DE PÁGINAS

| Rota | Tipo | Template |
|---|---|---|
| `/outdoor` | Especial (usa componentes em `/src/components/Outdoor/`) | Legado — não alterar estrutura |
| `/front-light` | Padrão | ✅ Template padrão |
| `/rodovia` | Padrão | ✅ Template padrão |
| `/mobiliario-urbano` | Padrão | ✅ Template padrão (referência) |
| `/mega-light` | Padrão | ✅ Template padrão |
| `/mega-painel` | Padrão | ✅ Template padrão |
| `/painel-digital` | Padrão | ✅ Template padrão |
| `/duo-mub` | Padrão | ✅ Template padrão |
| `/imidia-litoral` | Especial | ⚠️ Estrutura própria — ver seção EXCEÇÕES |
| `/imidia-live-led` | Especial | ⚠️ Estrutura própria — ver seção EXCEÇÕES |
| `/formatos-de-midia` | Especial | ⚠️ Estrutura própria — ver seção EXCEÇÕES |

---

## 🏗️ ESTRUTURA DE PÁGINA PADRÃO

### page.tsx
```tsx
// src/app/[pagina]/page.tsx
// ⚠️ NÃO adicionar 'use client' no page.tsx — apenas nos componentes filhos

import Hero from "./components/Hero"
import Description from "./components/Description"
import Banner2 from "./components/Banner2"
import Mapeamento from "./components/Mapeamento"
import OutrosFormatos from "./components/OutroFormatos"
import Galeria from "./components/Galeria"

export default function NomePagina() {
  return (
    <>
      <Hero />
      <Description />
      <Banner2 />
      <Mapeamento />
      <OutrosFormatos />
      <Galeria />
    </>
  )
}
```

> ⚠️ O `<Footer />` NÃO é importado nas páginas — ele está no layout global (`src/app/layout.tsx`). Não adicionar Footer nas páginas.

### Estrutura de arquivos
```
src/app/[pagina]/
├── page.tsx
└── components/
    ├── Hero.tsx
    ├── Description.tsx
    ├── Banner2.tsx
    ├── Mapeamento.tsx
    ├── OutroFormatos.tsx     ← nome sem "s" (padrão do projeto)
    └── Galeria.tsx
```

---

## 🖼️ COMPONENTE: HERO

### Código padrão completo
```tsx
// src/app/[pagina]/components/Hero.tsx
import Image from "next/image"
import GradientText from "@/components/ui/GradientText"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] overflow-hidden py-16">
      <div className="absolute inset-0">
        <Image
          src="/images/[pagina]/banner.jpg"
          alt="[Nome da Página]"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "80% 10%" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 h-[600px]">
        <GradientText size="md:text-[60px] lg:text-[80px] xl:text-[100px] pt-40">
          [TÍTULO DA PÁGINA EM CAIXA ALTA]
        </GradientText>
        <p className="text-white max-w-4xl lg:text-2xl">
          [Subtítulo ou descrição curta]
        </p>
      </div>
    </section>
  )
}
```

### ⚠️ Erros comuns no Hero — CORRIGIR
| Erro | Correto |
|---|---|
| `lg:text-[80px] xl:text-[100px]` sem `md:` | `md:text-[60px] lg:text-[80px] xl:text-[100px]` |
| `alt="banner"` | `alt="[Nome real da página]"` |
| Sem `priority` na imagem | Adicionar `priority` |

---

## 📝 COMPONENTE: DESCRIPTION

### Código padrão completo
```tsx
// src/app/[pagina]/components/Description.tsx
'use client'

import { motion } from 'framer-motion'
import GradientText from '@/components/ui/GradientText'

export default function Description() {
  return (
    <div className="bg-transparent py-16">

      {/* Parágrafo 1 */}
      <motion.p
        className="font-goldplay text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px] leading-tight tracking-[-0.025em]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        [Primeiro parágrafo]
      </motion.p>

      {/* Texto destaque em gradiente */}
      <div className="py-3 px-4 sm:px-8 md:px-16 lg:px-[60px]">
        <GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
          [TEXTO DESTACADO EM CAIXA ALTA]
        </GradientText>
      </div>

      {/* Parágrafo 2 (opcional) */}
      <motion.p
        className="font-goldplay text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px] leading-tight tracking-[-0.025em]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        [Segundo parágrafo]
      </motion.p>

    </div>
  )
}
```

### Description com subtítulos (padrão Mobiliário Urbano)
> Quando a página tem subcategorias (ex: Estático, Digital, Duo MUB), adicionar h2 entre parágrafos:

```tsx
{/* h2 de subcategoria */}
<motion.h2
  className="font-bebas font-regular text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center px-4 sm:px-8 md:px-16 lg:px-[60px] mt-6"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  NOME DA SUBCATEGORIA
</motion.h2>
```

### ⚠️ Erros comuns no Description — CORRIGIR
| Erro encontrado | Correto |
|---|---|
| `font-bold` no parágrafo | Remover — usar só `font-goldplay` |
| `md:text-[19.94px]` (tamanho Photoshop) | `text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl` |
| `style={{lineHeight: '24.55pt'}}` | Remover — usar `leading-tight` |
| `style={{letterSpacing: '-0.025em'}}` | Remover — usar `tracking-[-0.025em]` |

---

## 🖼️ COMPONENTE: BANNER2

```tsx
// src/app/[pagina]/components/Banner2.tsx
import Image from "next/image"

export default function Banner2() {
  return (
    <section className="pb-16">
      <div className="relative h-screen max-h-screen w-auto mx-auto mt-16">
        <Image
          src="/images/[pagina]/banner2.jpg"
          alt="[Nome da Página]"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  )
}
```

---

## 📊 COMPONENTE: MAPEAMENTO

> Este é o componente **real** do projeto — Card3D com borda SVG gradiente e botão CTA.

```tsx
// src/app/[pagina]/components/Mapeamento.tsx
'use client'

import { Button } from "@/components/ui/button"
import Card3D from "@/components/ui/Card3D"
import { motion } from 'framer-motion'

export default function Mapeamento() {
  return (
    <section>
      <div className="w-full flex flex-col py-16">
        <Card3D
          className="group relative mx-4 sm:mx-8 md:mx-16 lg:mx-[200px] mt-6"
          glowClassName="pointer-events-none absolute inset-0 -z-10 opacity-0"
        >
          <div className="relative px-4 sm:px-6 md:px-8 pt-8 pb-10 text-center bg-black rounded-xl transition-shadow duration-200 group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]">

            {/* Borda SVG gradiente — não alterar */}
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="mappingBorderGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#c3d33f" />
                  <stop offset="100%" stopColor="#079c9e" />
                </linearGradient>
              </defs>
              <rect
                x="1" y="1"
                width="99%" height="99%"
                rx="12" ry="12"
                fill="none"
                stroke="url(#mappingBorderGradient)"
                strokeWidth="3"
                strokeDasharray="2 8"
                strokeLinecap="round"
              />
            </svg>

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-[40px] sm:text-[55px] md:text-[70px] font-bebas font-regular mb-2 bg-gradient-to-r from-[#c3d33f] to-[#079c9e] bg-clip-text text-transparent uppercase"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Mapeamento
              </motion.h1>

              <motion.p
                className="font-goldplay text-white text-[18px] sm:text-[22px] md:text-[28px] leading-relaxed mb-8 break-words"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Quer saber como seu negócio pode se destacar<br className="hidden md:inline" />com os melhores espaços publicitários?
              </motion.p>

              <motion.p
                className="font-goldplay text-white text-[18px] sm:text-[22px] md:text-[28px] leading-relaxed mb-8 break-words"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Acesse nosso{" "}
                <span className="font-bebas text-[24px] sm:text-[30px] md:text-[38px] font-regular uppercase">
                  mapeamento
                </span>{" "}
                e descubra<br className="hidden md:inline" />
                <span className="font-bebas text-[24px] sm:text-[30px] md:text-[38px] font-regular uppercase">
                  todas as opções de impacto que a I'mídia oferece!
                </span>
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button
                variant="gradient"
                className="font-bebas text-[32px] sm:text-[45px] md:text-[63px] px-4 sm:px-5 md:px-6 py-6 sm:py-8 md:py-10 rounded-lg"
              >
                BAIXE AQUI!
              </Button>
            </motion.div>

          </div>
        </Card3D>
      </div>
    </section>
  )
}
```

### ⚠️ Erros comuns no Mapeamento — CORRIGIR
| Erro | Correto |
|---|---|
| Sem `'use client'` no topo | Adicionar `'use client'` |

---

## 🔗 COMPONENTE: OUTROFORMATOS

```tsx
// src/app/[pagina]/components/OutroFormatos.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// ⚠️ Personalizar esta lista para cada página
// Regra: mostrar formatos DIFERENTES da página atual
const gridItems = [
  {
    id: 1,
    title: 'PAINEL FRONT LIGHT',
    image: '/images/outdoor/painel-front-light.png',
    href: '/front-light',
    objectPosition: '60% 35%',
  },
  {
    id: 2,
    title: 'PAINEL MEGA LIGHT',
    image: '/images/outdoor/painel-mega-light.png',
    href: '/mega-light',
    objectPosition: '50% 10%',
  },
  {
    id: 3,
    title: 'PAINEL DE RODOVIA',
    image: '/images/outdoor/painel-rodovia.png',
    href: '/rodovia',
    objectPosition: '60% 40%',
  },
  {
    id: 4,
    title: 'PAINEL DIGITAL',
    image: '/images/outdoor/painel-digital.png',
    href: '/painel-digital',
    objectPosition: 'center',
  },
]

export default function OutrosFormatos() {
  return (
    <section className="w-full py-16">

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center justify-center pb-[20px] px-4"
      >
        <img
          src="/images/outdoor/triangulos.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 hidden h-14 w-auto -translate-y-1/2 opacity-80 md:block"
        />
        <h2 className="font-bebas bg-gradient-to-r from-accent to-cyan bg-clip-text text-[48px] sm:text-[60px] md:text-[76px] font-bold uppercase tracking-wide text-transparent">
          Outros formatos
        </h2>
      </motion.div>

      {/* Grid 2 colunas */}
      <div className="grid w-full grid-cols-1 gap-0 md:grid-cols-2">
        {gridItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative overflow-hidden transition-all duration-300 ease-in-out block h-[300px] md:h-[400px]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
              style={{ objectPosition: item.objectPosition }}
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out group-hover:bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]">
              <div className="border-2 border-white/80 px-6 py-3 text-center md:px-8 md:py-4 transition-all duration-300 ease-in-out group-hover:scale-95 group-hover:opacity-0">
                <h3 className="text-lg font-bold uppercase tracking-wide text-white md:text-3xl">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
```

### ⚠️ Erros comuns no OutroFormatos — CORRIGIR
| Erro encontrado | Correto |
|---|---|
| `<img src=...>` sem next/image | `<Image fill sizes="...">` do next/image |
| `width={0} height={0}` com img tag | Usar `<Image fill>` e container com `relative h-[300px]` |
| Sem `'use client'` (rodovia) | Adicionar `'use client'` |
| Mesmos 4 itens em todas as páginas | Customizar para remover o formato da página atual |

---

## 🖼️ COMPONENTE: GALERIA

```tsx
// src/app/[pagina]/components/Galeria.tsx
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// ⚠️ Ajustar caminhos e objectPosition para cada página
const galleryItems = [
  { id: 1, image: '/images/[pagina]/galeria1.jpg', objectPosition: 'center' },
  { id: 2, image: '/images/[pagina]/galeria2.jpg', objectPosition: 'center 0%' },
  { id: 3, image: '/images/[pagina]/galeria3.jpg', objectPosition: 'top' },
  { id: 4, image: '/images/[pagina]/galeria4.jpg', objectPosition: 'center' },
  { id: 5, image: '/images/[pagina]/galeria5.jpg', objectPosition: 'center' },
  { id: 6, image: '/images/[pagina]/galeria6.jpg', objectPosition: '100%' },
]

// ⚠️ Trocar "[pagina]" pelo nome real da página (ex: "front-light", "rodovia")
const PAGE_NAME = '[pagina]'

export default function Galeria() {
  const [selected, setSelected] = useState<{ img: string; title: string } | null>(null)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null)
    }
    if (selected) {
      window.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section className="w-full py-16 mb-32">

      {/* Label GALERIA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 -mb-3 flex items-center justify-center px-4"
      >
        <div className="rounded-lg bg-gradient-to-r from-accent to-cyan px-3 sm:px-4 py-2 font-bebas font-normal uppercase tracking-wide text-[35px] sm:text-[45px] md:text-[55px] text-white shadow-lg leading-tight">
          GALERIA
        </div>
      </motion.div>

      {/* Grid 2 colunas */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 overflow-hidden">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden cursor-pointer w-full h-[400px] md:h-[500px]"
            onClick={() => setSelected({ img: item.image, title: `Galeria ${PAGE_NAME} ${item.id}` })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ')
                setSelected({ img: item.image, title: `Galeria ${PAGE_NAME} ${item.id}` })
            }}
          >
            <Image
              src={item.image}
              alt={`Galeria ${PAGE_NAME} ${item.id}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              style={{ objectPosition: item.objectPosition }}
            />
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/20" />
          </motion.div>
        ))}
      </div>

      {/* Modal lightbox — manter sempre */}
      {selected && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setSelected(null)}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow text-xl leading-none hover:opacity-80 transition-opacity"
            >
              ×
            </button>
            <Image
              src={selected.img}
              alt={selected.title}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

    </section>
  )
}
```

### ⚠️ Erros comuns na Galeria — CORRIGIR
| Erro encontrado | Correto |
|---|---|
| `alt="Galeria outdoor N"` em páginas não-outdoor | `alt="Galeria [nome-da-pagina] N"` |
| `PAGE_NAME` com valor errado | Substituir pelo nome da página atual |

---

## 📝 TIPOGRAFIA — REFERÊNCIA COMPLETA

| Elemento | Classes obrigatórias |
|---|---|
| **Título Hero** | `GradientText` · `size="md:text-[60px] lg:text-[80px] xl:text-[100px] pt-40"` |
| **Subtítulo Hero** | `text-white max-w-4xl lg:text-2xl` |
| **Título de Seção (h2)** | `font-bebas font-regular text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl` |
| **Título Gradiente (OutrosFormatos h2)** | `font-bebas bg-gradient-to-r from-accent to-cyan bg-clip-text text-[48px] sm:text-[60px] md:text-[76px] font-bold uppercase tracking-wide text-transparent` |
| **Label GALERIA** | `font-bebas font-normal uppercase tracking-wide text-[35px] sm:text-[45px] md:text-[55px] text-white` + `rounded-lg bg-gradient-to-r from-accent to-cyan px-3 sm:px-4 py-2 shadow-lg leading-tight` |
| **Título Mapeamento (h1)** | `font-bebas font-regular text-[40px] sm:text-[55px] md:text-[70px] bg-gradient-to-r from-[#c3d33f] to-[#079c9e] bg-clip-text text-transparent uppercase` |
| **Parágrafo padrão** | `font-goldplay text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight tracking-[-0.025em]` |
| **Parágrafo Mapeamento** | `font-goldplay text-white text-[18px] sm:text-[22px] md:text-[28px] leading-relaxed` |
| **Span destaque (Mapeamento)** | `font-bebas text-[24px] sm:text-[30px] md:text-[38px] font-regular uppercase` |

### ❌ PROIBIDO
- `font-bold` em parágrafos de Description
- `md:text-[19.94px]` ou qualquer tamanho com casas decimais
- `style={{lineHeight: '24.55pt'}}` — usar `leading-tight` ou `leading-relaxed`
- `style={{letterSpacing: '-0.025em'}}` — usar `tracking-[-0.025em]`
- `h1` fora do componente Mapeamento
- `h3` fora dos cards de OutrosFormatos

---

## 🎭 ANIMAÇÕES FRAMER MOTION

| Contexto | initial | animate/whileInView | transition |
|---|---|---|---|
| Hero título | `{opacity:0, scale:0.8}` | `animate` | `duration:0.6, delay:0.4` |
| Hero subtítulo | `{opacity:0, y:30}` | `animate` | `duration:0.8, delay:0.8` |
| Título de seção (h2) | `{opacity:0, y:30}` | `whileInView` | `duration:0.8, delay:0.8` |
| Parágrafos (sequência) | `{opacity:0, y:30}` | `whileInView` | delays: 0.2, 0.6, 1.0, 1.4, 1.8, 2.0 |
| Container/Card | `{opacity:0, y:24}` | `whileInView` | `duration:0.6` |
| Item de Galeria | `{opacity:0, scale:0.9}` | `whileInView` | `duration:0.6, delay: index * 0.1` |
| Mapeamento container | `{opacity:0, y:40}` | `whileInView` | `duration:0.8, delay:0.2` |
| Mapeamento h1 | `{opacity:0, scale:0.8}` | `whileInView` | `duration:0.6, delay:0.4` |
| Mapeamento p1 | `{opacity:0, x:-30}` | `whileInView` | `duration:0.6, delay:0.6` |
| Mapeamento p2 | `{opacity:0, x:30}` | `whileInView` | `duration:0.6, delay:0.8` |
| Mapeamento botão | `{opacity:0, y:20, scale:0.8}` | `whileInView` | `duration:0.6, delay:1.0` |

### Regras obrigatórias
```tsx
// SEMPRE em todos os whileInView
viewport={{ once: true, amount: 0.3 }}

// Hero usa animate (não whileInView) — sem viewport
animate={{ opacity: 1, scale: 1 }}

// Todo o resto usa whileInView
whileInView={{ opacity: 1, y: 0 }}
```

---

## 🎨 CORES, GRADIENTES E EFEITOS

```css
/* Gradiente principal */
from-[#c3d33f] via-[#079c9e] to-[#c3d33f]
from-accent to-cyan   /* equivalente Tailwind */

/* Overlays de imagem */
bg-black/40   /* Hero e OutrosFormatos — padrão */
bg-black/60   /* Galeria — estado normal */
bg-black/20   /* Galeria e OutrosFormatos — hover */

/* Sombra glow (hover do Card3D / Mapeamento) */
group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]

/* Borda gradient SVG do Mapeamento */
from #c3d33f (0%) → #079c9e (100%)
strokeDasharray="2 8" strokeWidth="3"
```

---

## 📏 ESPAÇAMENTOS

```css
py-16           /* Padding vertical padrão de todas as seções */
pb-16           /* Banner2 */
pt-40           /* Título Hero (dentro do GradientText via prop size) */
mt-6            /* h2 de subcategoria em Description */
mt-8            /* h2 secundário em Description */
mb-32           /* Seção Galeria inteira */
-mb-3           /* Label GALERIA (overlap no grid) */
-bottom-5       /* Botão do Mapeamento (overlap no card) */

/* Margens laterais — padrão responsivo */
px-4 sm:px-8 md:px-16 lg:px-[60px]

/* Mapeamento — margens laterais */
mx-4 sm:mx-8 md:mx-16 lg:mx-[200px]
```

---

## ⚡ PERFORMANCE — IMAGENS

| Componente | Padrão | `sizes` | `priority` |
|---|---|---|---|
| Hero | `fill` | `100vw` | ✅ `true` |
| Banner2 | `fill` | `100vw` | ❌ |
| Galeria (grid) | `fill` | `(max-width: 768px) 100vw, 50vw` | ❌ |
| Galeria (lightbox) | `width={1200} height={800}` | — | ❌ |
| OutroFormatos | `fill` + container `relative h-[300px] md:h-[400px]` | `(max-width: 768px) 100vw, 50vw` | ❌ |
| Ícones/logos | `width` e `height` fixos | — | ❌ |

### Alt text — Padrão obrigatório
```
Hero:           alt="[Nome real da página]"         ex: "Front Light"
Banner2:        alt="[Nome real da página]"         ex: "Front Light"
Galeria:        alt="Galeria [rota] [n]"            ex: "Galeria front-light 1"
OutroFormatos:  alt="[Título do formato]"           ex: "Painel Front Light"
Ícones:         alt="[Nome do serviço]"             ex: "WhatsApp" / "LinkedIn"
Decorativo:     alt="" aria-hidden="true"           (triangulos.png)
```

---

## 🚫 PÁGINAS DE EXCEÇÃO

### `/outdoor`
Usa componentes em `/src/components/Outdoor/`. Estrutura legada, não alterar.
Padronizar apenas: alt texts e substituir `<img>` por `<Image>` onde encontrar.

### `/imidia-litoral`
Estrutura própria com componentes: `Hero`, `RegioesAtendidas`, `MidiaFormats`, `EscolhaCerto`, `BannerMeio`, `Galeria`.
Padronizar: tipografia dos parágrafos, alt texts da Galeria, `'use client'` em todos os componentes.

### `/imidia-live-led`
Estrutura própria com componentes: `Banner`, `MarcaEmMovimento`, `LiveLedDestaque`, `Cobertura`, `NossosFormatos`, `PorqueEscolher`, `Galeria`.
Padronizar: tipografia, alt texts da Galeria, `'use client'` em todos os componentes.

### `/formatos-de-midia`
Página de conteúdo longo. Para seções únicas desta página usar:
```tsx
// Título de seção especial
<h2 className="font-bebas text-white text-3xl md:text-5xl mt-8 mb-4">
  Como funciona?
</h2>

// Parágrafo de conteúdo — mesmo padrão de Description
<p className="font-goldplay text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight tracking-[-0.025em]">
  [conteúdo]
</p>
```
Padronizar: remover h2 simples sem `font-bebas`, remover bullet `•` soltos, alt texts únicos.

---

## ✅ CHECKLIST DE PADRONIZAÇÃO POR PÁGINA

Use este checklist ao terminar cada página:

```
HERO
[ ] 'use client' ausente? (Hero não precisa — sem motion)
[ ] GradientText tem "md:text-[60px] lg:text-[80px] xl:text-[100px]"
[ ] alt da imagem é o nome real da página (não "banner")
[ ] priority={true} na imagem

DESCRIPTION
[ ] 'use client' presente no topo
[ ] Sem font-bold nos parágrafos
[ ] Sem md:text-[19.94px] ou tamanhos com decimais
[ ] Sem style={{}} inline de lineHeight ou letterSpacing
[ ] Usa leading-tight e tracking-[-0.025em] via Tailwind

BANNER2
[ ] Imagem com fill e object-cover
[ ] alt é o nome real da página

MAPEAMENTO
[ ] 'use client' presente no topo
[ ] Card3D e SVG border gradient presentes
[ ] Botão com variant="gradient"
[ ] Animações com viewport: { once: true }

OUTROFORMATOS
[ ] 'use client' presente no topo
[ ] Usa <Image fill> (não <img>)
[ ] Container tem height definida (h-[300px] md:h-[400px])
[ ] Links mostram formatos diferentes da página atual

GALERIA
[ ] PAGE_NAME tem o nome correto da página
[ ] alt text é "Galeria [pagina] N" (não "Galeria outdoor N")
[ ] Lightbox modal presente e funcionando
[ ] mb-32 na seção

GERAL
[ ] Nenhuma seção sem py-16
[ ] Nenhum <img> sem ser o triangulos.png decorativo
[ ] Nenhum estilo inline de tipografia
```

---

**Versão:** 2.0 — Baseada em análise do código-fonte real  
**Data:** 11/03/2026  
**Referência de código:** `src/app/mobiliario-urbano/` (página mais próxima do padrão correto)