import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './data-source';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';
import orderRoutes from './infrastructure/routes/OrderRoutes';
import productRoutes from './infrastructure/routes/ProductRoutes';

const app = express();
app.set('strict routing', true);
app.use(express.json());

const SWAGGER_USER = process.env.SWAGGER_USER || 'admin';
const SWAGGER_PASSWORD = process.env.SWAGGER_PASSWORD || 'admin123';

const swaggerAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Mãos à Arte API"');
    return res.status(401).send('Autenticação obrigatória');
  }

  const base64Credentials = authHeader.split(' ')[1] || '';
  const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
  const [username, password] = credentials.split(':');

  if (username === SWAGGER_USER && password === SWAGGER_PASSWORD) {
    return next();
  }

  res.setHeader('WWW-Authenticate', 'Basic realm="Mãos à Arte API"');
  return res.status(401).send('Usuário ou senha inválidos');
};

app.get('/api/docs', (req, res) => {
  res.redirect('/api/docs/');
});

// Swagger documentation
app.use(
  '/api/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customSiteTitle: 'Mãos à Arte API - Documentação'
  })
);

app.use('/api/v1', swaggerAuth);

app.get('/api/docs-json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(swaggerSpec);
});

app.get('/', (req, res) => {
  res.redirect('/api/docs/');
});

app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/products', productRoutes);

const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log('✅ BANCO DE DADOS CONECTADO!');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log('❌ Erro no banco:', error));
