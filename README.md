# 🦅 IFPI Gavião - Cardápio Digital (Versão Big Tripe)

> **Atividade Prática de Programação para Dispositivos Móveis (PDM) - IFPI**  
> **Professor:** Iallen Gábio de Sousa Santos

---

## 📱 Sobre o Projeto

O **IFPI Gavião** é um aplicativo de cardápio digital desenvolvido com **React Native**, **Expo (v57)** e **TypeScript** para uma lanchonete fictícia institucional.

O sufixo **"BT"** no nome do projeto refere-se ao padrão **"Big Tripe"** — um termo bem-humorado para designar a **ausência de padrão de projeto**, onde o desenvolvedor aglutina em um único arquivo (ou um arquivo por tela):
- Dados mockados e chamadas diretas de banco de dados;
- Regras de negócio e cálculos de apresentação;
- Gerenciamento de estado e controle de loading;
- Componentes visuais repetidos e estilização monolítica com `StyleSheet`.

Este projeto foi construído propositalmente nesse formato para servir como **base de estudo e atividade prática de refatoração arquitetural**.

---

## 🎯 Objetivo da Atividade: Refatoração para o MVVM Simplificado

Sua missão nesta atividade é realizar um **fork** deste repositório e executar uma **refatoração arquitetural completa**, transformando o código "Big Tripe" em uma solução elegante, escalável e desacoplada, utilizando o **MVVM Simplificado** apresentado nas aulas.

### 📐 O que é o MVVM Simplificado?

O padrão **Model-View-ViewModel (MVVM) Simplificado** divide a aplicação em camadas bem delimitadas, garantindo que a interface com o usuário (View) fique completamente livre de regras de negócio ou de acesso a dados:

```
┌─────────────────────────────────────────────────────────────┐
│                            VIEW                             │
│     (Telas Expo Router em src/app/ e Componentes Visuais)   │
└──────────────────────────────┬──────────────────────────────┘
                               │ Observa estado / Notifica eventos
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                          VIEWMODEL                          │
│        (Custom Hooks / Controladores de Apresentação)       │
└──────────────────────────────┬──────────────────────────────┘
                               │ Solicita dados
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                     REPOSITORY / SERVICE                    │
│      (Acesso a dados, API ou Banco com Atraso Assíncrono)   │
└──────────────────────────────┬──────────────────────────────┘
                               │ Mapeia entidades
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                            MODEL                            │
│              (Entidades e Tipagens TypeScript)              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 Checklist de Refatoração

Para completar a atividade, você deve reorganizar o projeto nas seguintes camadas:

### 1. Camada Model (`src/models/`)
- [ ] Criar as interfaces/tipos formais do domínio:
  - `Product` (id, nome, preco, categoriaId, categoriaNome, descricao, proteinas, carboidratos, gorduras, imagens).
  - `Category` (id, nome, corBorda, corSeta, imagem).
  - Tipagens auxiliares necessárias (ex: `NutritionalInfo`).

### 2. Camada Repository / Service (`src/services/` ou `src/repositories/`)
- [ ] Isolar as operações de dados que hoje estão no arquivo mockado.
- [ ] Manter e encapsular a simulação de **atraso assíncrono (I/O)**, demonstrando como a aplicação lidaria com um banco local (SQLite/WatermelonDB) ou API REST remota.
- [ ] Assegurar que os métodos retornem tipagens estritas baseadas nos Models (`Promise<Product[]>`, `Promise<Product | null>`, etc.).

### 3. Camada ViewModel (`src/viewmodels/` ou `src/hooks/`)
- [ ] Implementar ViewModels (por meio de Custom Hooks no React) para cada uma das telas:
  - **`useHomeViewModel`**: gerencia carregamento das categorias e navegação.
  - **`useCategoryViewModel`**: recebe a categoria selecionada, gerencia a listagem, o estado de loading e a navegação para o detalhe.
  - **`useItemDetailViewModel`**: busca os detalhes do produto, gerencia o estado de loading e toda a regra de negócio do seletor de quantidade (incremento, decremento com limite mínimo).
- [ ] A View **NÃO** deve conter `useEffect` para chamadas diretas de dados nem regras de cálculo.

### 4. Camada View e Componentização (`src/components/` e `src/app/`)
- [ ] Limpar as telas em `src/app/`, tornando-as componentes de apresentação que apenas consomem seus respectivos ViewModels.
- [ ] Extrair componentes visuais reutilizáveis:
  - `Header`: cabeçalho roxo padronizado (com suporte a título, subtítulo ou botão de retorno).
  - `CategoryCard`: card da tela inicial com imagem e borda colorida.
  - `ProductCard`: item da lista com miniatura, título, preço e seta.
  - `QuantitySelector`: controle de quantidade com botões de diminuir (`-`) e aumentar (`+`).
  - `PriceBadge`: etiqueta verde de preço.

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório (ou o seu Fork):**
   ```bash
   git clone https://github.com/SEU_USUARIO/IFPIGaviaoBT.git
   cd IFPIGaviaoBT
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento do Expo:**
   ```bash
   npx expo start
   ```

4. **Abra o aplicativo:**
   - No celular físico usando o app **Expo Go** (leitura do QR Code).
   - No emulador Android (`a`) ou simulador iOS (`i`).
   - No navegador (`w`).

---

## 📤 Instruções para Envio da Atividade

1. Faça um **Fork** deste repositório oficial para a sua conta do GitHub.
2. Crie uma branch para o seu desenvolvimento:
   ```bash
   git checkout -b feature/refactor-mvvm
   ```
3. Implemente a refatoração mantendo a mesma identidade visual e as funcionalidades originais.
4. Faça commits frequentes e bem descritos:
   ```bash
   git commit -m "feat(model): cria entidades Product e Category"
   ```
5. Envie para o seu GitHub e submeta o link do repositório conforme orientado no Google Classroom / SIGAA.

---

## 💡 Critérios de Avaliação

| Critério | Descrição |
| :--- | :--- |
| **Separação de Camadas** | As camadas Model, View, ViewModel e Service/Repository estão claramente separadas em diretórios próprios? |
| **Integridade do ViewModel** | As telas estão livres de chamadas diretas de dados e de regras de estado de negócio? |
| **Componentização** | Componentes comuns (Header, Cards, Seletor) foram extraídos e reutilizados adequadamente? |
| **Fidelidade Visual e UX** | O aplicativo manteve a estética, cores, fluxo de navegação e tratamento de loading originais? |
| **Boas Práticas & Tipagem** | O TypeScript está sendo utilizado de forma consistente sem uso indiscriminado de `any`? |

---

*IFPI - Campus Pedro II / Campus Teresina Central*  
*Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)*
