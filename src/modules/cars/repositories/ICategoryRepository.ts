import { Category } from "../entities/Category";

export interface ICategoryDTO {
  name: string;
  description: string;
}

export interface ICategoryRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({name, description}: ICategoryDTO): Promise<void>;
}