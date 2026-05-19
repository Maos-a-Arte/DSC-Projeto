import { ProductsService } from './products.service'; // Ajuste o import se necessário

describe('ProductsService (Etapa RED)', () => {
  let productsService: ProductsService;

  beforeEach(() => {
    // Inicializa o serviço (pode ser um mock ou instância simples)
    productsService = new ProductsService();
  });

  it('should create a product with valid data', async () => {
    // 1. Dados de entrada simulados (Cenário a Representar)
    const productData = {
      name: 'Vaso de Cerâmica Artesanal',
      description: 'Vaso feito à mão com argila local e pintura vitrificada.',
      price: 85.00,
      partnerId: 'partner-uuid-123'
    };

    // 2. Execução do método que queremos testar
    const result = await productsService.create(productData);

    // 3. Validações exigidas pelo manual (Campos que o teste deverá validar)
    expect(result).toBeDefined();
    expect(result.name).toBe(productData.name);
    expect(result.description).toBe(productData.description);
    expect(result.price).toBe(productData.price);
    expect(result.partnerId).toBe(productData.partnerId);
    
    // O sistema deve gerar o ID automaticamente e definir o status inicial como 'available'
    expect(result.id).toBeDefined(); 
    expect(result.status).toBe('available');
  });
});