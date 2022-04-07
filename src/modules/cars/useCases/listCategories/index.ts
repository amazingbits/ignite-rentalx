import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./ListCategoriesController";

export default (): ListCategoriesController => {
  const categoryRepository = new CategoryRepository();
  const listCategoryUseCase = new ListCategoriesUseCase(categoryRepository);
  const listCategoryController = new ListCategoriesController(listCategoryUseCase);
  return listCategoryController;
}