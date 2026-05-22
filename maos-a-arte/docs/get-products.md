# Documentação: GET /api/v1/products

Este documento descreve como executar e testar o endpoint `GET /api/v1/products` do projeto "Mãos à Arte". Contém passos claros para executar localmente, o que o endpoint faz, exemplos de requests/responses e onde estão os arquivos relacionados.

---

## Resumo

- Endpoint: `GET /api/v1/products`
- Rota completa no servidor em execução: `http://localhost:3000/api/v1/products`
- Implementação: stub testável usando repositório em memória (sem dependência de banco de dados).

## Arquivos relevantes (caminhos no repositório)

- Controlador: `maos-a-arte/src/presentation/controllers/ProductController.js` (contém `handleGetAll` e `handleCreate`).
- Serviço: `maos-a-arte/src/application/services/ProductService.js` (contém `getAllProducts()` e `createProduct()`).
- Rotas: `maos-a-arte/src/infrastructure/routes/productRoutes.js` (registra `GET /` e `POST /` e expõe um mock repo em memória).
- Bootstrap: `maos-a-arte/src/index.js` (inicia servidor; foi ajustado para iniciar mesmo se o DB falhar).
- Pacote de entrega de testes: `maos-a-arte/for_professor/` contém uma versão enxuta do serviço e testes com Jest/Supertest.

---

## Pré-requisitos

- Node.js (v16+ recomendado) e npm instalados.
- Acesso à internet para instalar dependências via `npm install`.

---

## Passo a passo para rodar o endpoint (projeto principal)

1. Abra um terminal e vá para a pasta do app:

```bash
cd maos-a-arte
```

2. Instale dependências (se ainda não instalou):

```bash
npm install
```

3. Inicie a aplicação:

```bash
npm start
```

4. Verifique o endpoint (GET):

- Pelo navegador: acesse `http://localhost:3000/api/v1/products`.
- Pelo terminal (curl):

```bash
curl -i http://localhost:3000/api/v1/products
```

Resposta esperada (quando não há produtos):

```json
{"data":[]}
```

Para criar um produto (exemplo) e depois verificar o GET:

```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Vaso de Ceramica Artesanal","description":"Vaso pintado a mao","price":120.5,"weight":0.8,"dimensions":{"a":15,"l":10,"p":8}}' \
  http://localhost:3000/api/v1/products

curl -i http://localhost:3000/api/v1/products
```

---

## Como funciona (técnico)

- O `productRoutes.js` expõe uma implementação de repositório em memória (`mockRepo`) com métodos `save()` e `findAll()`.
- `POST /api/v1/products` usa `ProductService.createProduct()` que instancia a entidade `Product` e valida regras de domínio (ex.: `isValidForShipping()` exige `weight > 0` e `dimensions.a > 0`).
- `GET /api/v1/products` delega para `ProductService.getAllProducts()` que chama `mockRepo.findAll()` e retorna os itens em JSON sob a chave `data`.
- O `src/index.js` foi ajustado para tentar conectar ao DB via `AppDataSource.initialize()` mas sempre chamar `app.listen()` no `.finally()` — isso permite testar mesmo sem PostgreSQL.

---

## Testes automatizados (opcional / entrega)

Na pasta `maos-a-arte/for_professor` incluí uma suíte de teste com Jest + Supertest que valida apenas o comportamento de `GET /api/v1/products` em ambiente de teste (sem servidor externo):

1. Vá para a pasta:

```bash
cd maos-a-arte/for_professor
```

2. Instale deps e rode os testes:

```bash
npm install
npm test
```

Saída esperada (exemplo):

```
> jest

 PASS  tests/product.routes.test.js
  GET /api/v1/products
    ✓ should return 200 and a JSON body with data array

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```

---

## Notas para o revisor / professor

- Esta entrega é um slice de teste: a persistência está em memória e foi feita assim propositalmente para que a revisão seja simples e independente do banco.
- Se for necessário integrar com TypeORM/Postgres, os donos das issues relacionadas podem substituir `mockRepo` por uma implementação real do repositório sem quebrar as assinaturas das funções.

---

## Links rápidos (branch atual)

- Branch com a entrega: `feature/uc01-04-get-products`
- Pasta com o pacote para o professor: `maos-a-arte/for_professor`

GitHub (arquivo desta documentação):

https://github.com/Maos-a-Arte/DSC-Projeto/blob/feature/uc01-04-get-products/maos-a-arte/docs/get-products.md

---

Se quiser, eu adiciono também um README.md resumido na raiz ou um arquivo `docs/index.md` com outras rotas — quer que eu adicione mais alguma coisa nesta documentação? 
