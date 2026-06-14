import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';

describe('ProductService (Etapa GREEN)', () => {
  let productService: ProductService;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = new ProductRepository();
    productService = new ProductService(productRepository);
  });

  it('should create a product with valid data', async () => {
    const productData = {
      name: 'Vaso de Cerâmica Artesanal',
      description: 'Vaso feito à mão com argila local.',
      price: 85.00,
      partnerId: 'partner-uuid-123'
    };

    const result = await productService.create(productData);

    expect(result).toBeDefined();
    expect(result.name).toBe(productData.name);
    expect(result.description).toBe(productData.description);
    expect(result.price).toBe(productData.price);
    expect(result.partnerId).toBe(productData.partnerId);
    expect(result.id).toBeDefined(); 
    expect(result.status).toBe('available');
  });
});