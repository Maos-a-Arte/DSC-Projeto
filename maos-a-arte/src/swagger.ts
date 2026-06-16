import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mãos à Arte API',
      description: 'API para gerenciamento de produtos e pedidos da plataforma Mãos à Arte',
      version: '1.0.0',
      contact: {
        name: 'Suporte Mãos à Arte',
        email: 'suporte@maosaarte.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desenvolvimento'
      }
    ],
    components: {
      securitySchemes: {
        basicAuth: {
          type: 'http',
          scheme: 'basic',
          description: 'Autenticação básica para acessar os endpoints via Try it out.'
        }
      },
      schemas: {
        CreateProductDto: {
          type: 'object',
          required: ['name', 'description', 'price', 'category'],
          properties: {
            name: {
              type: 'string',
              example: 'Quadro Abstrato',
              description: 'Nome do produto'
            },
            description: {
              type: 'string',
              example: 'Quadro feito à mão com técnica de acrílico',
              description: 'Descrição detalhada do produto'
            },
            price: {
              type: 'number',
              format: 'float',
              example: 150.5,
              description: 'Preço do produto'
            },
            category: {
              type: 'string',
              example: 'Quadros',
              description: 'Categoria do produto'
            }
          }
        },
        CreateCategoryDto: {
          type: 'object',
          required: ['name'],
          properties: {
            name: {
              type: 'string',
              example: 'Quadros personalizados',
              description: 'Nome da categoria'
            },
            description: {
              type: 'string',
              example: 'Categoria para quadros feitos à mão e obras de arte',
              description: 'Descrição opcional da categoria'
            }
          }
        },
        ProductResponse: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '123e4567-e89b-12d3-a456-426614174000',
              description: 'ID único do produto'
            },
            name: {
              type: 'string',
              example: 'Quadro Abstrato'
            },
            description: {
              type: 'string',
              example: 'Quadro feito à mão com técnica de acrílico'
            },
            price: {
              type: 'number',
              format: 'float',
              example: 150.5
            },
            category: {
              type: 'string',
              example: 'Quadros'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2024-01-15T10:30:00Z'
            }
          }
        },
        CreateOrderDto: {
          type: 'object',
          required: ['productId', 'quantity', 'customerName', 'customerEmail'],
          properties: {
            productId: {
              type: 'string',
              example: '123e4567-e89b-12d3-a456-426614174000',
              description: 'ID do produto a ser pedido'
            },
            quantity: {
              type: 'integer',
              example: 2,
              description: 'Quantidade de itens'
            },
            customerName: {
              type: 'string',
              example: 'João Silva',
              description: 'Nome do cliente'
            },
            customerEmail: {
              type: 'string',
              format: 'email',
              example: 'joao@email.com',
              description: 'Email do cliente'
            }
          }
        },
        OrderResponse: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: '456f5678-f90c-34e4-b567-537725285111',
              description: 'ID único do pedido'
            },
            productId: {
              type: 'string',
              example: '123e4567-e89b-12d3-a456-426614174000'
            },
            quantity: {
              type: 'integer',
              example: 2
            },
            customerName: {
              type: 'string',
              example: 'João Silva'
            },
            customerEmail: {
              type: 'string',
              format: 'email',
              example: 'joao@email.com'
            },
            status: {
              type: 'string',
              enum: ['PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED'],
              example: 'PENDING',
              description: 'Status do pedido'
            },
            totalPrice: {
              type: 'number',
              format: 'float',
              example: 301.0
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2024-01-15T10:30:00Z'
            }
          }
        },
        ConfirmOrderDto: {
          type: 'object',
          required: ['paymentMethod'],
          properties: {
            paymentMethod: {
              type: 'string',
              enum: ['CREDIT_CARD', 'DEBIT_CARD', 'PIX', 'BOLETO'],
              example: 'PIX',
              description: 'Método de pagamento utilizado'
            }
          }
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            statusCode: {
              type: 'integer',
              example: 400
            },
            message: {
              type: 'string',
              example: 'Dados inválidos'
            },
            error: {
              type: 'string',
              example: 'Bad Request'
            },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: {
                    type: 'string',
                    example: 'name'
                  },
                  message: {
                    type: 'string',
                    example: 'O campo name é obrigatório.'
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  security: [
    {
      basicAuth: []
    }
  ],
  apis: ['./src/infrastructure/routes/*.ts', './src/presentation/controllers/*.ts']
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
