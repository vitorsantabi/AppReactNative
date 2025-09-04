# PrimadonnaWiki

Um aplicativo móvel interativo que explora os arquétipos do icônico álbum **Electra Heart** da artista Marina and the Diamonds (agora Marina). O app oferece uma experiência imersiva para descobrir e entender os diferentes personagens que compõem a narrativa visual e conceitual deste álbum revolucionário.

## 🎭 Sobre o Projeto

**PrimadonnaWiki** é uma aplicação React Native desenvolvida com Expo que serve como uma enciclopédia interativa dos arquétipos femininos apresentados no álbum Electra Heart. O app permite aos usuários explorar cada personagem através de uma interface elegante e responsiva, com vídeos de fundo e elementos visuais que capturam a essência estética do álbum.

## 🎨 Arquétipos Disponíveis

O aplicativo apresenta os quatro principais arquétipos do álbum Electra Heart:

- **The Beauty Queen** - A rainha da beleza, representando a obsessão pela perfeição estética
- **The Homewrecker** - A destruidora de lares, simbolizando a sedução e o poder feminino
- **The Housewife** - A dona de casa, representando os papéis tradicionais femininos
- **The Starlet** - A estrela em ascensão, simbolizando a fama e o glamour

## ✨ Características

- **Interface Responsiva**: Adapta-se perfeitamente a diferentes tamanhos de tela
- **Vídeo de Fundo**: Experiência visual imersiva com vídeo de fundo em loop
- **Design Moderno**: Interface elegante com efeitos de blur e sombras
- **Navegação Intuitiva**: Scroll horizontal para navegar entre os arquétipos
- **Cross-Platform**: Funciona em iOS, Android e Web

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **TypeScript** - Tipagem estática para JavaScript
- **Expo Router** - Navegação baseada em arquivos
- **Expo Video** - Reprodução de vídeos
- **Expo Blur** - Efeitos de desfoque
- **React Native Reanimated** - Animações fluidas
- **Moti** - Biblioteca de animações

## 📱 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app no seu dispositivo móvel (para teste)

### Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd PrimadonnaWiki
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Escaneie o QR code com o Expo Go app ou execute em um emulador:
```bash
# Para Android
npm run android

# Para iOS
npm run ios

# Para Web
npm run web
```

## 📁 Estrutura do Projeto

```
PrimadonnaWiki/
├── app/                    # Páginas da aplicação
│   ├── _layout.tsx        # Layout principal
│   ├── index.tsx          # Página inicial
│   └── thebq.tsx          # Página do arquétipo
├── assets/                # Recursos estáticos
│   ├── images/           # Imagens e ícones
│   ├── photos/           # Fotos dos arquétipos
│   └── bg.mp4            # Vídeo de fundo
├── components/           # Componentes reutilizáveis
│   ├── content.tsx       # Componente de conteúdo
│   ├── icon.tsx          # Componente de ícone
│   └── link.tsx          # Componente de link
├── hooks/                # Hooks customizados
│   └── useResponsive.ts  # Hook para responsividade
├── utils/                # Utilitários
│   └── responsive.ts     # Funções de responsividade
└── examples/             # Exemplos de uso
```

## 🎯 Funcionalidades Principais

- **Exploração de Arquétipos**: Navegue pelos diferentes personagens do álbum
- **Galeria de Imagens**: Visualize fotos exclusivas de cada arquétipo
- **Experiência Imersiva**: Vídeo de fundo e efeitos visuais
- **Design Responsivo**: Interface adaptável para todos os dispositivos
- **Navegação Fluida**: Transições suaves entre seções

## 🎨 Design e UX

O aplicativo foi desenvolvido com foco na experiência do usuário, incorporando:

- **Estética Visual**: Design que reflete a identidade visual do álbum Electra Heart
- **Responsividade**: Interface que se adapta a diferentes tamanhos de tela
- **Performance**: Otimizado para uma experiência fluida
- **Acessibilidade**: Elementos de interface acessíveis

## 📄 Licença

Este projeto é desenvolvido para fins educacionais e de fã. Todas as imagens e referências ao álbum Electra Heart pertencem à Marina and the Diamonds e suas respectivas gravadoras.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Adicionar novos arquétipos ou conteúdo

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através dos issues do repositório.

---

*"Welcome to the life of Electra Heart"* 💖
