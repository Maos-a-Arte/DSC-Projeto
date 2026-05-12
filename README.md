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

| Backend | Gabriel Tadeu Costa Sanmartin |  |

| Base de Dados | Gabriel Tadeu Costa Sanmartin | |

📝 Descrição dos Casos de Uso (UC)Nesta seção, detalhamos as funcionalidades implementadas, relacionando os requisitos de negócio com a implementação técnica.UC07 - Confirmar PedidoObjetivo: Permitir que o artesão confirme um pedido cujo pagamento já foi aprovado, iniciando o processo de produção e calculando a taxa de serviço da plataforma.  História de Usuário: "Como artesão, quero confirmar um pedido recebido para que eu possa iniciar a produção e garantir o recebimento do valor, já descontada a comissão da plataforma."Critérios de Aceite (Definition of Done):O sistema deve localizar o pedido pelo ID na base de dados PostgreSQL.  Deve validar se o status atual do pedido permite a confirmação (ex: status 'PENDENTE' ou 'PAGO').  Regra de Split: O sistema deve calcular automaticamente 15% do valor total do pedido como comissão da plataforma.  O status do pedido deve ser atualizado para 'CONFIRMADO'.  Os dados (novo status e valor da comissão) devem ser persistidos via TypeORM.  Implementação Técnica:Controller: OrderController.confirm()Service: OrderService.calculateSplit() e OrderService.confirmOrder()Entity: Order (Mapeada com as colunas status e comissao_plataforma).
