import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';

describe('CategoryService (Etapa GREEN)', () => {
  let categoryService: CategoryService;
  let categoryRepository: CategoryRepository;

  beforeEach(() => {
    categoryRepository = new CategoryRepository();
    categoryService = new CategoryService(categoryRepository);
  });

  it('should create a category with valid data', async () => {
    const categoryData = {
      name: 'Cerâmica',
      description: 'Peças artesanais de cerâmica.',
    };

    const result = await categoryService.create(categoryData);

    expect(result).toBeDefined();
    expect(result.name).toBe(categoryData.name);
    expect(result.description).toBe(categoryData.description);
    expect(result.id).toBeDefined();
  });
});
