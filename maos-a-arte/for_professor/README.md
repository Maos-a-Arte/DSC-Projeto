Deliverable: GET /api/v1/products (testable stub)

Files included:
- src/presentation/controllers/ProductController.js
- src/application/services/ProductService.js
- src/infrastructure/routes/productRoutes.js
- src/index.js
- package.json
- jest.config.js
- tests/product.routes.test.js

How to run locally:

1) From the `for_professor` folder, install dependencies:

```bash
npm install
```

2) Start the server (optional):

```bash
npm start
```

3) Run tests:

```bash
npm test
```

Notes:
- Tests use an in-memory mock repository. No database required.
- The server bootstrap in `src/index.js` handles DB unavailability gracefully for testing.
