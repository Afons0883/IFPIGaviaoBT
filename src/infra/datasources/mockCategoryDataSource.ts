
import type { ICategoryDataSource } from "../../model/datasources/iCategoryDataSource";
import type { Categoria } from "../../model/entities/category";
import { DataSourceError } from "../../model/errors";

const CATEGORIES: Categoria[] = [
  // Adicione aqui suas categorias reais.
];

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export class MockCategoryDataSource implements ICategoryDataSource {
  async getAll(): Promise<Categoria[]> {
    try {
      await delay(500);
      return CATEGORIES;
    } catch {
      throw new DataSourceError("Falha ao carregar as categorias.");
    }
  }

  async getById(id: string): Promise<Categoria | null> {
    try {
      await delay(300);
      return CATEGORIES.find((categoria) => categoria.id === id) ?? null;
    } catch {
      throw new DataSourceError("Falha ao consultar a categoria.");
    }
  }
}
