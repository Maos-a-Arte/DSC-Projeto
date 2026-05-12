# DSC-Projeto
# 🎨 Projeto Mãos à Arte

Sistema de marketplace para artesãos brasileiros desenvolvido com **Node.js**, **TypeORM** e **PostgreSQL**.

## 🚀 Status do Projeto: Infraestrutura Concluída
O projeto já conta com persistência real de dados e arquitetura seguindo os princípios de **Clean Architecture**.

### 🛠️ Tecnologias e Ferramentas
- **Runtime:** Node.js v24+
- **ORM:** TypeORM (com suporte a transações ACID)
- **Banco de Dados:** PostgreSQL 15 (via Docker)
- **Infraestrutura:** Docker Desktop + WSL2

### 🏗️ Estrutura de Pastas
- `src/domain`: Entidades de negócio (Ex: Regra de Split de 15%).
- `src/application`: Casos de uso (Serviços).
- `src/presentation`: Controladores da API.
- `src/infrastructure`: Configuração de banco, rotas e TypeORM.

### 🔌 Como rodar o ambiente
1. Certifique-se de que o **Docker Desktop** está aberto.
2. Na raiz, suba o banco: `docker-compose up -d`.
3. Instale as dependências: `npm install`.
4. Inicie a aplicação: `node src/index.js`.

## ⚖️ Governança e Papéis
| Frente / Módulo | Owner (Maintain) | Revisor de Issues (Triage) |

| Backend | Gabriel Tadeu Costa Sanmartin | Kauan Da Silva Lopes |

| Base de Dados | Gabriel Tadeu Costa Sanmartin | Kauan Da Silva Lopes |

## 📝 Descrição dos Casos de Uso (Backlog Principal)

Nesta seção, detalhamos os Casos de Uso (UC) que compõem o escopo do projeto "Mãos à Arte". Cada UC é tratado como uma unidade de trabalho real, com objetivos claros e critérios de aceite que devem ser validados pelo **Issue Reviewer** antes do fechamento da tarefa.

### 1. UC01 - Cadastro de Artesão e Loja
* **Descrição:** Permite que novos artesãos criem um perfil e configurem sua loja virtual para expor produtos no marketplace.
* **História de Usuário:** "Como artesão, quero criar minha loja para começar a vender meus produtos artesanais."
* **Critérios de Aceite:**
    * O sistema deve validar CPF/CNPJ e garantir que o e-mail seja único.
    * Deve permitir a configuração inicial do nome da loja e biografia do artesão.
    * O status inicial da loja deve ser definido como "Aguardando Validação".

### 2. UC03 - Gestão de Catálogo de Produtos
* **Descrição:** O artesão gerencia seus produtos, definindo preços, descrições e categorias.
* **História de Usuário:** "Como artesão, quero cadastrar meus produtos com fotos e preços para que os clientes possam comprá-los."
* **Critérios de Aceite:**
    * Cada produto deve possuir nome, preço base e quantidade disponível em estoque.
    * O sistema deve permitir a atualização de estoque e a desativação de produtos.

### 3. UC05 - Cadastro de Pedido (Checkout)
* **Descrição:** Registra a intenção de compra do cliente e reserva os itens no estoque.
* **História de Usuário:** "Como cliente, quero finalizar minha seleção de itens para gerar um pedido de compra."
* **Critérios de Aceite:**
    * A rota `POST /api/v1/orders` deve receber os dados do cliente e o total do pedido.
    * O status inicial do pedido deve ser obrigatoriamente "PENDENTE".
    * Os dados devem ser persistidos via TypeORM no PostgreSQL.

### 4. UC07 - Confirmação de Pedido e Split de Pagamento
* **Descrição:** Processa a confirmação do pedido após o pagamento, aplicando a regra de negócio de comissão da plataforma.
* **História de Usuário:** "Como artesão, quero confirmar um pedido pago para iniciar a produção e garantir o recebimento do valor com o desconto da taxa."
* **Critérios de Aceite:**
    * **Regra de Split:** Calcular automaticamente 15% de comissão sobre o valor total do pedido.
    * Atualizar o status do pedido para "CONFIRMADO" no banco de dados.
    * Registrar o valor da comissão da plataforma na coluna correspondente da tabela `orders`.

### 5. UC10 - Avaliação de Pedido e Feedback
* **Descrição:** Permite que o comprador avalie a experiência de compra após o recebimento do produto.
* **História de Usuário:** "Como cliente, quero avaliar o produto recebido para ajudar outros compradores e dar feedback ao artesão."
* **Critérios de Aceite:**
    * O sistema só deve permitir avaliações de pedidos com status "ENTREGUE".
    * A nota deve ser obrigatória (1 a 5 estrelas).
    * O comentário deve ser validado para não exceder o limite de caracteres

