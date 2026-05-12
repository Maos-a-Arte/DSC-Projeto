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
