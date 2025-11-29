import { Product } from "../models/product.model";

export interface ICatalogRepository {
  create(product: Product): Promise<Product>;
  update(data: Product): Promise<Product>;
  delete(id: string): Promise<void>;
  find(): Promise<Product[]>;
  findOne(id: string): Promise<Product>;
}
