import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { Category } from "../../entities/Category";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoriesUseCase }