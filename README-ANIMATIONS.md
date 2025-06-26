# Equipe UVA - Maratona de Programação 2025 🏆

Um site moderno e animado para captação de patrocínio para a equipe da UVA na Maratona de Programação 2025.

## ✨ Funcionalidades

### 🎬 Animações com Framer Motion
- **Header animado** com entrada suave do topo
- **Hero Section** com texto sequencial e botões interativos
- **Cards da equipe** com animação stagger (sequencial)
- **Estatísticas** com entrada lateral e efeito flutuante
- **Benefícios** com animações escalonadas
- **Botão flutuante** do WhatsApp com movimento contínuo
- **Scroll suave** entre seções

### 🎨 Design Responsivo
- Layout totalmente responsivo
- Gradientes modernos
- Efeitos hover interativos
- Animações de entrada baseadas no scroll

### 📱 Componentes Organizados
```
src/
├── components/
│   ├── sections/           # Seções principais
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── MarathonSection.tsx
│   │   ├── WhySponsorSection.tsx
│   │   ├── CostsSection.tsx
│   │   ├── SponsorshipSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Componentes reutilizáveis
│       ├── AnimationComponents.tsx
│       ├── FloatingActionButton.tsx
│       └── SmoothScrolling.tsx
```

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações avançadas
- **Font Awesome** - Ícones

## 🎯 Componentes de Animação

### AnimationComponents.tsx
Componentes reutilizáveis para animações:

- `AnimatedSection` - Animação de entrada com scroll
- `FadeIn` - Fade in simples
- `SlideIn` - Entrada lateral
- `ScaleIn` - Entrada com escala
- `Floating` - Efeito flutuante
- `StaggerContainer` - Container para animações sequenciais
- `StaggerItem` - Item com delay automático

## 💻 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🎨 Personalizações Realizadas

### Remoção dos Planos de Patrocínio
- Removido o conceito de Bronze, Prata e Ouro
- Implementada abordagem mais flexível
- Foco na conversa direta com patrocinadores

### Animações Implementadas
- **Header**: Entrada do topo com delay
- **Hero**: Texto sequencial e botões com hover
- **Team**: Cards com stagger effect
- **Marathon**: Slides laterais e estatísticas flutuantes
- **Benefits**: Grid com animação sequencial
- **Sponsorship**: Cards de benefícios animados
- **FloatingButton**: Movimento contínuo de flutuação

## 📧 Contato
- Email: equipe@uva.br
- WhatsApp: (88) 99999-9999

---

Desenvolvido com ❤️ para a Equipe UVA
