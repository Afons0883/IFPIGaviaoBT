# 🦅 IFPI Gavião - Cardápio Digital (Versão Big Tripe)

> **Atividade Prática de Programação para Dispositivos Móveis (PDM) - IFPI**  
> **Professor:** Iallen Gábio de Sousa Santos

---

## 📱 Sobre o Projeto

O **IFPI Gavião** é um aplicativo de cardápio digital desenvolvido com **React Native**, **Expo (v57)** e **TypeScript** para uma lanchonete fictícia institucional.

O sufixo **"BT"** no nome do projeto refere-se ao padrão **"Big Tripe"** — uma referência bem-humorada à **ausência de padrão de projeto**, onde o desenvolvedor implementa tudo em um único arquivo (ou, no caso do Expo Router, tudo concentrado em um único arquivo por tela):
- Acesso a dados e simulação de banco de dados diretamente na tela;
- Regras de negócio e cálculos de apresentação misturados com a interface;
- Gerenciamento direto de estado e controle de loading na própria View;
- Ausência de separação arquitetural e estilização monolítica com `StyleSheet`.

O banco de dados da aplicação é local, mas foi construído para simular um pequeno atraso assíncrono para entregar os dados, comportando-se como um banco de dados ou API de verdade.

---

## 🎯 Atividade Prática: Refatoração para o MVVM Simplificado

Esta aplicação serve como base para a atividade prática da disciplina.

A atividade consiste em:
1. Fazer um **fork** deste repositório;
2. Realizar uma **refatoração completa** do projeto para adequá-lo ao **MVVM Simplificado**, seguindo rigorosamente as recomendações, padrões e convenções apresentados nas aulas e no material didático (livro da disciplina de PDM);
3. Garantir que a aplicação mantenha a mesma identidade visual, comportamento e simulação assíncrona do banco de dados após a refatoração.

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

1. Faça o **Fork** deste repositório para o seu perfil pessoal no GitHub.
2. Clone o seu fork na sua máquina de desenvolvimento.
3. Crie uma branch para o seu trabalho:
   ```bash
   git checkout -b feature/refactor-mvvm
   ```
4. Realize a refatoração completa para o **MVVM Simplificado**.
5. Faça commits frequentes e bem descritos.
6. Envie suas alterações para o seu GitHub e submeta o link do repositório conforme as orientações do professor no Google Classroom / SIGAA.

---

*IFPI - Campus Pedro II / Campus Teresina Central*  
*Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)*
