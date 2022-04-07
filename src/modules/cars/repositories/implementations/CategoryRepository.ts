import { Category } from "../../entities/Category";
import { ICategoryRepository, ICategoryDTO } from "../ICategoryRepository";
import { Repository, getRepository } from "typeorm";

class CategoryRepository implements ICategoryRepository {
  
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICategoryDTO): Promise<void> {
    const category = this.repository.create({description, name});
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name }); // where name = name limit 1
    return category === undefined ? new Category : category;
  }
}

export { CategoryRepository }