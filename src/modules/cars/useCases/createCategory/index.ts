import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

export default (): CreateCategoryController => {
  const categoryRepository = new CategoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
  const createCategoryController = new CreateCategoryController(createCategoryUseCase);

  return createCategoryController;
}