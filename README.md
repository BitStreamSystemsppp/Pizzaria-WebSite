# 🍕 Lombardia Delivery

Website de **pizzaria delivery** desenvolvido com **HTML, CSS e JavaScript puro (vanilla)**, focado em experiência visual, simplicidade e conversão via **WhatsApp**, sem uso de backend.

Este projeto simula um sistema completo de pedidos online, incluindo carrinho, customização de produtos, cupons de desconto e cálculo de taxa de entrega — tudo rodando apenas no navegador.

---

## 🚀 Visão Geral

- 💻 **Frontend puro** (sem frameworks)
- 📱 **Totalmente responsivo** (mobile, tablet e desktop)
- 🛒 Carrinho persistente com `localStorage`
- 📦 Checkout envia o pedido diretamente para **WhatsApp**
- 🎨 Design visual premium inspirado em layouts modernos de delivery
- ⚡ Ideal como projeto de estudo ou portfólio

---

## 🧱 Tecnologias Utilizadas

- **HTML5**
- **CSS3** (layout responsivo, grid, flexbox)
- **JavaScript (Vanilla)**  
  - Manipulação do DOM  
  - Eventos  
  - `localStorage`  
  - Lógica de carrinho  
  - Geração dinâmica de mensagem para WhatsApp  

❌ Sem frameworks  
❌ Sem bibliotecas externas  
❌ Sem backend  

---

## 📂 Estrutura do Projeto

/
├── index.html # Home
├── pizzas.html # Página de pizzas
├── burgers.html # Página de hambúrgueres
├── drinks.html # Bebidas (sucos e refrigerantes)
├── checkout.html # Carrinho e finalização do pedido
├── css/
│ └── styles.css # Estilos globais
├── js/
│ └── main.js # Lógica completa da aplicação
└── assets/ # Imagens (opcional)

markdown
Copiar código

---

## 🧭 Funcionalidades Principais

### 🛍️ Produtos
- Pizzas (com tamanhos: Small / Medium / Large)
- Hambúrgueres
- Bebidas (sucos e refrigerantes)
- Filtros por categoria
- Destaque “Chef’s Choice”

### 🧩 Customização
- Extras para pizzas (queijo, bacon, borda recheada, etc.)
- Add-ons para hambúrgueres
- Preço atualizado em tempo real

### 🛒 Carrinho
- Adicionar/remover itens
- Alterar quantidade
- Persistência com `localStorage`
- Badge com quantidade no header

### 💸 Cupons de Desconto
- `WELCOME10` → 10% de desconto
- `FREESHIP` → frete grátis

### 🚚 Taxa de Entrega por Postcode
- Valor calculado automaticamente com base no prefixo do postcode
- Exemplo:
  - SW / W / NW → £2.99
  - E / N → £3.99
  - Outros → £4.99

### ⏱️ Tempo Estimado
- Horário normal: **35–50 min**
- Horário de pico (18h–21h): **50–70 min**

### 💳 Pagamento
- Cartão
- Dinheiro
  - Opção “Need change?” quando selecionado

---

## 📲 Finalização via WhatsApp

Ao clicar em **“Finalize order on WhatsApp”**, o sistema:

- Gera uma mensagem automática contendo:
  - Itens do pedido
  - Quantidades e opções
  - Subtotal, taxa, desconto e total
  - Endereço e telefone
  - Forma de pagamento
  - Tempo estimado de entrega
- Abre o WhatsApp usando:
https://wa.me/<NUMERO>?text=<MENSAGEM_ENCODED>

Copiar código

📌 **Sem backend, sem banco de dados, sem API externa.**

---

## 📱 Responsividade

- Mobile-first
- Menu hamburger
- Cards adaptáveis
- Layout fluido em todas as telas
- Botões grandes e acessíveis para toque

---

## ♿ Acessibilidade

- Labels em formulários
- Estados de foco visíveis
- Estrutura semântica
- Navegação clara

---

## 🧪 Como Rodar o Projeto

1. Clone o repositório:
 ```bash
 git clone https://github.com/seu-usuario/lombardia-delivery.git
Abra o arquivo index.html no navegador
(não é necessário servidor)

🔧 Customização Rápida
📞 Número do WhatsApp → main.js

🍕 Produtos e preços → main.js

🎨 Cores e layout → styles.css

🏷️ Nome da pizzaria → arquivos .html

📌 Objetivo do Projeto
Este projeto foi criado para:

Estudo prático de JavaScript puro

Treinar lógica de frontend real

Simular um fluxo completo de pedido delivery

Servir como projeto de portfólio

📄 Licença
Projeto para fins educacionais e de portfólio.
Sinta-se livre para estudar, modificar e adaptar.

✨ Desenvolvido como parte de um processo de aprendizado contínuo em desenvolvimento web.

Copiar código

---







