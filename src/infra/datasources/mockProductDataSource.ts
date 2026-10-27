import { IProductDataSource } from "../../model/datasources/iProductDataSource";
import { Produto } from "../../model/entities/product";
import { DataSourceError } from "../../model/errors";

const PRODUCTS: Produto[] = [
  // Coloque aqui os produtos que você já possui.
];

const delay = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export class MockProductDataSource implements IProductDataSource {
  async getAll(): Promise<Produto[]> {
    try {
      await delay(500);
      return PRODUCTS;
    } catch {
      throw new DataSourceError("Falha ao carregar os produtos.");
    }
  }

  async getByCategory(categoriaId: string): Promise<Produto[]> {
    try {
      await delay(600);

      return PRODUCTS.filter(
        (produto) => produto.categoriaId === categoriaId
      );
    } catch {
      throw new DataSourceError(
        "Falha ao carregar os produtos da categoria."
      );
    }
  }

  async getById(id: string): Promise<Produto | null> {
    try {
      await delay(400);

      return PRODUCTS.find((produto) => produto.id === id) ?? null;
    } catch {
      throw new DataSourceError("Falha ao consultar o produto.");
    }
  }
}