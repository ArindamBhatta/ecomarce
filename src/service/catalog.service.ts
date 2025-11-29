import { Product } from "../models/product.model";
import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogService {
  private _repository: ICatalogRepository;
  constructor(repository: ICatalogRepository) {
    this._repository = repository;
  }

  createProduct(input: any) {
    throw new Error("Method not implemented.");
  }

  updateProduct(input: any) {
    throw new Error("Method not implemented.");
  }

  deleteProduct(id: string) {
    throw new Error("Method not implemented.");
  }

  getProducts(limit: number) {}

  getProductById(id: string) {}
}
