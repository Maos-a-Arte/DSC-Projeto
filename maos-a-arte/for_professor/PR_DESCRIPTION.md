Title: Feature: GET /api/v1/products (testable stub)

Summary:
Adds a minimal, testable implementation of `GET /api/v1/products` using an in-memory repository so the endpoint can be reviewed without a running database.

Files included:
- src/presentation/controllers/ProductController.js  (adds handleGetAll)
- src/application/services/ProductService.js      (adds getAllProducts)
- src/infrastructure/routes/productRoutes.js      (registers GET / and POST /, in-memory repo)
- src/index.js                                    (bootstrap: starts server even if DB fails)
- package.json                                    (scripts: start, test; dev deps for jest/supertest)
- jest.config.js
- tests/product.routes.test.js                    (verifies GET returns 200 and JSON)
- README.md                                       (how to run & test)

How to test (from project root):
1. cd for_professor
2. npm install
3. npm test

Note: Persistence is in-memory for this slice; DB integration will be provided by owners of related issues.
