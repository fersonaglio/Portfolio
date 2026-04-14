# 📘 Manual Completo: Como Adicionar Projetos ao Portfólio

Este manual foi criado para que qualquer pessoa, mesmo sem experiência em programação, consiga adicionar novos projetos ao portfólio.

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Passo 1: Preparar a Imagem do Projeto](#passo-1-preparar-a-imagem-do-projeto)
3. [Passo 2: Adicionar o Projeto ao Código](#passo-2-adicionar-o-projeto-ao-código)
4. [Passo 3: Fazer o Deploy](#passo-3-fazer-o-deploy)
5. [Exemplo Completo](#exemplo-completo)
6. [Dicas e Boas Práticas](#dicas-e-boas-práticas)
7. [Resolução de Problemas](#resolução-de-problemas)

---

## 🎯 Visão Geral

Para adicionar um novo projeto, você precisa fazer **3 coisas simples**:

1. **Colocar a imagem** do projeto na pasta correta
2. **Adicionar as informações** do projeto no arquivo de código
3. **Publicar** as alterações

---

## 📸 Passo 1: Preparar a Imagem do Projeto

### O que você precisa:
- Uma imagem do seu projeto (screenshot/tela)
- A imagem deve ser no formato **PNG** ou **JPG**
- Tamanho recomendado: **800x600 pixels** ou maior

### Como fazer:

1. **Tire um screenshot** do seu projeto:
   - No Windows: Pressione `Windows + Shift + S` e selecione a área
   - No Mac: Pressione `Cmd + Shift + 4` e selecione a área
   - Ou use qualquer ferramenta de screenshot

2. **Salve a imagem** com um nome simples e descritivo:
   - ✅ Bom: `meu-projeto.png`, `calculadora-react.png`
   - ❌ Evite: `IMG_12345.png`, `foto (1).png`

3. **Renomeie se necessário** para não ter espaços ou caracteres especiais

---

## 💻 Passo 2: Adicionar o Projeto ao Código

### 2.1 Localize o arquivo correto

O arquivo que você precisa editar está em:
```
/src/sections/Projects.tsx
```

### 2.2 Encontre a seção de projetos

Dentro do arquivo, procure por esta parte (está no início):

```typescript
// ============================================
// ARRAY DE PROJETOS - ADICIONE SEUS PROJETOS AQUI
// ============================================
const projects: Project[] = [
```

### 2.3 Adicione seu novo projeto

**Copie este modelo** e cole após o último projeto (antes do `]`):

```typescript
  {
    id: 5,  // ← MUDE PARA O PRÓXIMO NÚMERO SEQUENCIAL
    title: 'Nome do Seu Projeto',
    description: 'Descrição curta do que o projeto faz. Máximo 2 linhas.',
    image: '/nome-da-sua-imagem.png',  // ← NOME EXATO DA IMAGEM
    technologies: ['React', 'Node.js', 'MongoDB'],  // ← TECNOLOGIAS USADAS
    githubUrl: 'https://github.com/seu-usuario/nome-do-repo',
    bgColor: 'bg-pastel-blue',  // ← ESCOLHA UMA COR
  },
```

### 🎨 Cores Disponíveis

Escolha uma cor para o fundo do card:

| Cor | Código | Quando usar |
|-----|--------|-------------|
| **Azul** | `bg-pastel-blue` | Projetos com React, APIs, backend |
| **Rosa** | `bg-pastel-pink` | Projetos criativos, design, UI/UX |
| **Verde** | `bg-pastel-green` | Projetos de dados, banco de dados |
| **Amarelo** | `bg-pastel-yellow` | Projetos diversos, ferramentas |

### 📝 Exemplo Real

Veja como ficaria um projeto real:

```typescript
  {
    id: 5,
    title: 'E-commerce Dashboard',
    description: 'Dashboard administrativo para gerenciamento de produtos, pedidos e relatórios de vendas.',
    image: '/dashboard-ecommerce.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    githubUrl: 'https://github.com/fersonaglio/dashboard-ecommerce',
    bgColor: 'bg-pastel-blue',
  },
```

### ⚠️ Pontos de Atenção

1. **ID**: Deve ser único e sequencial (1, 2, 3, 4, 5...)
2. **Vírgula**: Todo projeto deve terminar com vírgula `,` exceto o último
3. **Aspas**: Use aspas simples `'` para textos
4. **Caminho da imagem**: Sempre comece com `/` (barra)

---

## 🚀 Passo 3: Fazer o Deploy

Após adicionar o projeto, você precisa publicar as alterações.

### 3.1 Salvar o arquivo

Pressione `Ctrl + S` (Windows) ou `Cmd + S` (Mac)

### 3.2 Fazer o build

No terminal, execute:

```bash
npm run build
```

Aguarde o processo terminar. Se aparecer "build completed" ou similar, deu certo!

### 3.3 Fazer o deploy

Execute o comando de deploy:

```bash
npm run deploy
```

Ou se estiver usando outra plataforma, siga o processo específico.

---

## ✅ Exemplo Completo

### Situação:
Você criou uma calculadora em React e quer adicionar ao portfólio.

### Passo a passo:

**1. Screenshot:**
- Tire uma foto da calculadora funcionando
- Salve como `calculadora-react.png`

**2. Coloque na pasta:**
- Mova a imagem para a pasta `/public/`

**3. Edite o arquivo Projects.tsx:**

```typescript
const projects: Project[] = [
  // ... projetos existentes ...
  
  {
    id: 5,
    title: 'Calculator App',
    description: 'A fully functional calculator built with React featuring basic operations and history tracking.',
    image: '/calculadora-react.png',
    technologies: ['React', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/fersonaglio/calculadora-react',
    bgColor: 'bg-pastel-pink',
  },
];
```

**4. Salve e deploy:**
```bash
npm run build
npm run deploy
```

**5. Pronto!** 🎉

---

## 💡 Dicas e Boas Práticas

### Para a imagem:
- ✅ Use screenshots de boa qualidade
- ✅ Mostre a interface principal do projeto
- ✅ Evite mostrar dados pessoais ou sensíveis
- ✅ Tamanho ideal: 1200x800 pixels

### Para a descrição:
- ✅ Seja claro e objetivo
- ✅ Máximo de 2 linhas (cerca de 100 caracteres)
- ✅ Explique o que o projeto faz, não como foi feito
- ✅ Use inglês para manter consistência

### Exemplos de boas descrições:
- ✅ "Weather forecast app with real-time data and location search"
- ✅ "Task management tool with drag-and-drop functionality"
- ✅ "Portfolio website with dark mode and smooth animations"

### Exemplos de descrições ruins:
- ❌ "Fiz esse projeto para aprender React"
- ❌ "Projeto de faculdade, não está 100%"
- ❌ "Sistema complexo com muitas funcionalidades..."

---

## 🔧 Resolução de Problemas

### Problema: A imagem não aparece

**Soluções:**
1. Verifique se o nome da imagem está EXATAMENTE igual no código
2. Confirme que a imagem está na pasta `/public/`
3. Certifique-se de que a extensão está correta (.png ou .jpg)

### Problema: O site quebrou/dá erro

**Soluções:**
1. Verifique se você esqueceu alguma vírgula `,`
2. Confirme que todas as aspas estão fechadas
3. Verifique se o ID é único (não repetido)
4. Certifique-se de que o último projeto NÃO tem vírgula no final

### Problema: A cor de fundo não aparece

**Soluções:**
1. Use exatamente um destes valores:
   - `bg-pastel-blue`
   - `bg-pastel-pink`
   - `bg-pastel-green`
   - `bg-pastel-yellow`

### Problema: As tecnologias não aparecem coloridas

**Soluções:**
1. Use os nomes exatos das tecnologias:
   - React, JavaScript, HTML, CSS, Node.js, MongoDB, etc.
2. Se uma tecnologia não estiver na lista, ela aparecerá em cinza

---

## 📞 Precisa de Ajuda?

Se você encontrar algum problema que não conseguiu resolver:

1. Verifique se seguiu todos os passos corretamente
2. Compare seu código com os projetos existentes
3. Peça ajuda a um desenvolvedor mais experiente

---

## 🎨 Template Rápido

Copie e cole este template, preenchendo apenas os campos indicados:

```typescript
  {
    id: [PRÓXIMO NÚMERO],
    title: '[NOME DO PROJETO]',
    description: '[DESCRIÇÃO CURTA]',
    image: '/[NOME-DA-IMAGEM].png',
    technologies: ['[TECH1]', '[TECH2]', '[TECH3]'],
    githubUrl: 'https://github.com/fersonaglio/[NOME-DO-REPO]',
    bgColor: 'bg-pastel-[COR]',
  },
```

---

**Última atualização:** 2025
**Versão:** 1.0
