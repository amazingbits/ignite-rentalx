import { ICategoryRepository } from "../../repositories/ICategoryRepository"

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryalreadyExists = await this.categoryRepository.findByName(name);
    if(categoryalreadyExists) {
      throw new Error("Category already exists.");
    }

    await this.categoryRepository.create({name, description});
  }
}

export { CreateCategoryUseCase }