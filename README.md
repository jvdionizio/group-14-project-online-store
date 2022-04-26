# group-14-project-online-store

Este projeto é um projeto realizado por estudantes da USP, o intuito do projeto é fazer um e-commerce, com objetivo de promover os conhecimentos adquiridos em aula.

Tivemos a ideia de fazer uma loja de roupas em que a pessoa usuária possa ter uma experiência de pré visualização de combinações de roupas diferentes;

Aqui você vai encontrar os detalhes sobre o desenvolvimento do projeto, habilidades envolvidas no desenvolvimento e lições aprendidas durante o processo.

---

<p align="center"><img src="./working.gif" alt="web site working"></p>

---

## SUMÁRIO

- [Habilidades](#habilidades)
  - [Hard Skills](#hard-skills)
  - [Soft Skills](#soft-skills)
- [Objetivos](#objetivos)
- [Desenvolvimento](#desenvolvimento)
  - [Escolha da API's](#escolha-das-apis)
  - [Etapas](#etapas)
  - [Requisitos](#requisitos)
- [Lições Aprendidas](#lições-aprendidas)

---

## Habilidades

### Hard Skills

- Fazer requisições a uma API *(Application Programming Interface)*;
- Utilizar conhecimentos sobre JavaScript, CSS e HTML;
- Trabalhar com funções assíncronas;
- Utilizar Formulários;

### Soft Skills

- Negociação
- Escuta Ativa
- Comunicação Assertiva
- Criatividade

---

## Objetivos

- Fazer uma interface dentro dos padrões de mercado.
- Entregar uma pré visualização de combinação de roupas
- Fácil interação do usuário com o sistema de busca.
- Design único, responsivo e bonito.

---

# Desenvolvimento

### Escolha das API's

Escolhemos as API's e plataformas procurando dar uma melhor experiência ao usuário então escolhemos:

- Google Maps Platform : Disponibiliza um mapa na tela, dando a pessoa usuária noções mais claras de organização.

### Etapas

- Fazer exemplos gráficos das principais paginas da aplicação no figma
- Ler a documentação das API's
- Fazer as funções responsáveis pela requisição nas API's
- Fazer a páginas em html.
- Manipular o DOM.
- Design da página pelo CSS

---
# Requisitos

Além dos requisitos pré estabelecidos pelo professor definimos alguns outros requisitos baseados em nossos objetivos e em nosso exemplo gráfico

### Tela de Inicio

#### 1. Criar um header

**Observações técnicas**

  * O header deve conter uma imagem com o logo da loja com a classe `logo`
  * Deve conter uma barra de navegação entre as páginas
  * Um link para o carrinho de compras
  * Uma foto de perfil do usuário, para que ele possa editar seu perfil
  
#### 2. Criar um botão para página de pré visualização das roupas

**Observações técnicas**

  * Deve estar sempre visível na página inicial
  * Deve ter a classe `dresser`
  * Deve estar posicionado fixo e a direita da tela

#### 3. Criar uma sessão de categorias

**Observações técnicas**

  * As categorias devem ser disponibilizadas em imagens
  * As categorias devem estar dispostas em uma lista não ordenada `ul`
  * A lista deve ter a classe `categorias`

#### 4. Criar sessão de vistos recentemente

**Observações técnicas**

  * Os itens devem ser disponibilizadas em imagens
  * Os itens devem estar dispostas em uma lista não ordenada `ul`
  * A lista deve ter a classe `vistos-recentemente`

### Tela de Contato

#### 5. Criar um título

**Observações técnicas**

  * Deve estar uma tag `h1`
  * Deve ter o id `title`
  * Deve conter o texto "Contato"

#### 6. Criar uma área para o endereço da empresa

**Observações técnicas**

  * Deve ter a classe `adress`

#### 7. Criar um mapa interativo

**Observações técnicas**

  * O mapa deve ser o retornado pela API do Google Maps Platform
  * Deve ser interativo
  * Não deve ter barra de busca

#### 8. Criar um formulário

**Observações técnicas**

  * O formulário deve conter uma `label` para cada um de seus inputs, selects ou textareas
  * Deve ter 2 inputs com os ids: `name` e `email` respetivamente
  * Deve conter um select com o id `about`, para que o usuário possa selecionar o motivo do contato
  * Deve conter uma textarea com o id `description` para que a pessoa usuária possa descrever o ocorrido

#### 9. Criar botão  de enviar o formulário

**Observações técnicas**

  * Deve ser da tag `button`
  * Deve conter o texto "Enviar"
### Tela do Produto

#### 10. Foto do Produto

**Observações técnicas**

  * Deve ter o id `product-img`

#### 11. Criar área de descrição do produto

**Observações técnicas**

  * Deve possuir a classe `description`

#### 12. Preço do produto

**Observações técnicas**

  * Deve possuir a classe `preco`

#### 13. Criar botão  de adicionar ao carrinho

**Observações técnicas**

  * Deve ser da tag `button`
  * Deve conter o texto "Adicionar ao Carrinho"
---
## Lições Aprendidas

- Manipular mapas e os elementos dentro de um mapa;
- Conseguir a localização do navegador da pessoa usuária;
- Fazer brainstorms;
- Organizar reuniões periódicas;
- Organizar melhor branch's e commits.
