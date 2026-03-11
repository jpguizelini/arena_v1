---
description: Sistema de Design Padrão - I'mídia Arena v1
---

# 🎨 SISTEMA DE DESIGN PADRÃO - I'MÍDIA ARENA V1

## 📋 VISÃO GERAL
Este documento define os padrões de design, tipografia, imagens, animações e espaçamentos para todas as páginas do projeto I'mídia Arena v1.

---

## 🖼️ PADRÕES DE IMAGENS

### 🚀 Banner Hero (Seção inteira)
**Uso:** Primeira seção de todas as páginas
```html
<section className="relative w-full min-h-[600px] overflow-hidden py-16">
  <div className="absolute inset-0">
    <Image
      src="/images/[pagina]/banner.jpg"
      alt="[Nome Página]"
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
      [TÍTULO PÁGINA]
    </GradientText>
    <p className="text-white max-w-4xl lg:text-2xl">
      [Descrição página]
    </p>
  </div>
</section>
```

### 📸 Banner Secundário (Seção inteira)
**Uso:** Seções que ocupam altura total da tela
```html
<section className="pb-16">
  <div className="relative h-screen max-h-screen w-auto mx-auto mt-16">
    <Image
      src="/images/[pagina]/banner2.jpg"
      alt="[Nome Página]"
      fill
      className="object-cover"
      sizes="100vw"
    />
  </div>
</section>
```

### 🎯 Imagens em Grid (Galeria)
**Uso:** Galerias de imagens com 2 colunas
```html
<div className="grid w-full grid-cols-1 md:grid-cols-2 overflow-hidden">
  <div className="group relative overflow-hidden cursor-pointer w-full h-[400px] md:h-[500px]">
    <Image
      src="/images/[pagina]/galeria[n].jpg"
      alt="Galeria [página] [n]"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      style={{ objectPosition: "[center|top|bottom|left|right]" }}
    />
    <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/20" />
  </div>
</div>
```

### 🔗 Cards de Formatos (Grid)
**Uso:** Seção "Outros Formatos" com links
```html
<div className="grid w-full grid-cols-1 gap-0 md:grid-cols-2">
  <Link href="/[rota]" className="group relative overflow-hidden transition-all duration-300 ease-in-out">
    <Image
      src="/images/[categoria]/[formato].png"
      alt="[Título Formato]"
      fill
      sizes="50vw"
      className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
      style={{ objectPosition: "[personalizado]" }}
    />
    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out group-hover:bg-black/20" />
    <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-300 ease-in-out group-hover:translate-y-[-100%]">
      <div className="border-2 border-white/80 px-6 py-3 text-center md:px-8 md:py-4 transition-all duration-300 ease-in-out group-hover:scale-95 group-hover:opacity-0">
        <h3 className="text-lg font-bold uppercase tracking-wide text-white md:text-3xl">
          [TÍTULO FORMATO]
        </h3>
      </div>
    </div>
  </Link>
</div>
```

---

## 📝 TIPOGRAFIA

### 🎯 Títulos Principais (Hero)
**Uso:** Título principal do banner hero
```html
<GradientText size="md:text-[60px] lg:text-[80px] xl:text-[100px] pt-40">
  [TÍTULO PÁGINA]
</GradientText>
```

### 📢 Títulos de Seção (h2)
**Uso:** Títulos de seções como Description, OutrosFormatos, etc.
```html
<h2 className="font-bebas font-regular text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center px-4 sm:px-8 md:px-16 lg:px-[60px] mt-6">
  [TÍTULO SEÇÃO]
</h2>
```

### ✨ Títulos com Gradiente (OutrosFormatos)
**Uso:** Seção "Outros Formatos"
```html
<h2 className="font-bebas bg-gradient-to-r from-accent to-cyan bg-clip-text text-[48px] sm:text-[60px] md:text-[76px] font-bold uppercase tracking-wide text-transparent">
  Outros formatos
</h2>
```

### 📄 Títulos em Box (Galeria)
**Uso:** Título da galeria com background
```html
<div className="rounded-lg bg-gradient-to-r from-accent to-cyan px-3 sm:px-4 py-2 font-bebas font-normal uppercase tracking-wide text-[35px] sm:text-[45px] md:text-[55px] text-white shadow-lg leading-tight">
  GALERIA
</div>
```

### 📝 Parágrafos Padrão
**Uso:** Textos descritivos em todas as seções
```html
<p className="font-goldplay text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center wrap-break-word px-4 sm:px-8 md:px-16 lg:px-[60px] leading-tight tracking-[-0.025em]">
  [Texto descritivo]
</p>
```

### 🌟 Textos Gradiente (Description)
**Uso:** Textos destacados com gradiente
```html
<GradientText from="#c3d33f" via="#079c9e" to="#c3d33f" className="text-center">
  [TEXTO DESTACADO]
</GradientText>
```

---

## 🎭 ANIMAÇÕES FRAMER MOTION

### 📝 Animação Padrão (Parágrafos)
**Uso:** Textos descritivos e conteúdo
```javascript
motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, delay: [0.2, 1.0, 1.4, 1.8, 2.0] }}
```

### 🎯 Animação Títulos (h2)
**Uso:** Títulos de seção
```javascript
motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, delay: 0.8 }}
```

### 📦 Animação Container
**Uso:** Seções inteiras
```javascript
motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.6 }}
```

### 🎪 Animação Título Hero
**Uso:** Títulos principais com escala
```javascript
motion.h1
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, delay: 0.4 }}
```

### 🖼️ Animação Galeria
**Uso:** Items da galeria
```javascript
motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
```

---

## 🎨 EFEITOS HOVER

### 🖼️ Imagens (Galeria & Formatos)
```css
group-hover:scale-110           /* Zoom 110% */
group-hover:bg-black/20         /* Overlay mais claro */
transition-all duration-300     /* Transição suave */
```

### 📦 Cards 3D (Mapeamento)
```css
group-hover:shadow-[0_0_28px_rgba(195,211,63,0.28),0_0_28px_rgba(7,156,158,0.22)]
```

### 🔗 Links (OutrosFormatos)
```css
group-hover:translate-y-[-100%]  /* Título sobe */
group-hover:scale-95             /* Reduz 95% */
group-hover:opacity-0           /* Some */
```

---

## 📏 ESPAÇAMENTOS

### 📦 Seções Padrão
```css
py-16                           /* Padding vertical 64px */
```

### 📱 Margens Laterais Responsivas
```css
px-4                            /* Mobile: 16px */
px-6                            /* Small: 24px */
px-8                            /* Medium: 32px */
px-16                           /* Large: 64px */
px-[60px]                       /* XL: 60px */
```

### 🎯 Margens Específicas
```css
pt-40                           /* Título hero: 160px */
mt-6                            /* Títulos: 24px */
mt-8                            /* Títulos secundários: 32px */
mb-32                           /* Footer galeria: 128px */
```

---

## 🎨 CORES E GRADIENTES

### 🌈 Gradientes Padrão
```css
from-[#c3d33f] via-[#079c9e] to-[#c3d33f]    /* Verde para ciano */
from-accent to-cyan                           /* Padrão Tailwind */
```

### 🌑 Overlays
```css
bg-black/40                    /* 40% opacidade */
bg-black/60                    /* 60% opacidade */
bg-black/20                    /* 20% opacidade (hover) */
```

### 📝 Textos
```css
text-white                     /* Branco padrão */
text-transparent               /* Com gradiente */
```

---

## 🏗️ ESTRUTURA DE PÁGINA PADRÃO

### 📋 Componentes Obrigatórios
```tsx
import Hero from "./components/Hero"
import Description from "./components/Description"
import Banner2 from "./components/Banner2"
import OutrosFormatos from "./components/OutroFormatos"
import Mapeamento from "./components/Mapeamento"
import Galeria from "./components/Galeria"

export default function NomePagina() {
    return (
        <>
            <Hero />
            <Description />
            <Banner2 />
            <OutrosFormatos />
            <Mapeamento />
            <Galeria />
        </>
    )
}
```

### 📁 Estrutura de Arquivos
```
src/app/[pagina]/
├── page.tsx
└── components/
    ├── Hero.tsx
    ├── Description.tsx
    ├── Banner2.tsx
    ├── OutroFormatos.tsx
    ├── Mapeamento.tsx
    └── Galeria.tsx
```

---

## ⚡ PERFORMANCE

### 🖼️ Otimização de Imagens
- **Hero**: `priority={true}`
- **Banner2**: `sizes="100vw"`
- **Galeria**: `sizes="(max-width: 768px) 100vw, 50vw"`
- **Formatos**: `sizes="50vw"`

### 🎭 Animações
- **Viewport**: `once: true` (não repetir)
- **Amount**: `0.3` a `0.5` (trigger quando 30-50% visível)
- **Duration**: `0.6s` a `0.8s` (rápidas e suaves)

---

## 🚀 REGRAS DE IMPLEMENTAÇÃO

### ✅ OBRIGATÓRIO
1. Usar `fill` em todas as imagens de seção inteira
2. Aplicar animações Framer Motion padrão
3. Seguir escala de tipografia responsiva
4. Manter `py-16` em todas as seções
5. Usar `object-cover` em todas as imagens
6. Aplicar `group-hover:scale-110` em imagens clicáveis

### ❌ PROIBIDO
1. Usar `width` e `height` fixos em imagens responsivas
2. Criar novas escalas de tipografia
3. Usar cores fora do padrão de gradiente
4. Ignorar breakpoints responsivos
5. Criar animações sem `viewport: { once: true }`

### ⚠️ ATENÇÃO
1. Sempre testar em mobile, tablet e desktop
2. Verificar performance das imagens
3. Manter consistência nas durações de animação
4. Usar `alt` descritivo em todas as imagens

---

## 🔧 FERRAMENTAS E UTILITÁRIOS

### 🎨 Componentes UI
- `GradientText`: Para textos com gradiente
- `Card3D`: Para seções com efeito 3D
- `Button`: Para CTAs

### 📱 Breakpoints
- **Mobile**: padrão (até 640px)
- **Small**: `sm:` (640px+)
- **Medium**: `md:` (768px+)
- **Large**: `lg:` (1024px+)
- **XL**: `xl:` (1280px+)

---

## 📚 EXEMPLOS DE USO

### 🏠 Página Completa
Veja: `/src/app/mobiliario-urbano/page.tsx`

### 📝 Componente Description
Veja: `/src/app/mobiliario-urbano/components/Description.tsx`

### 🖼️ Componente Galeria
Veja: `/src/app/mobiliario-urbano/components/Galeria.tsx`

---

## 🔄 ATUALIZAÇÕES

Este documento deve ser atualizado sempre que novos padrões forem definidos ou modificados.

**Versão:** 1.0  
**Data:** 11/03/2026  
**Responsável:** Design System Team
