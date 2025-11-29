import { v4 as uuidv4 } from "uuid";
import { Product } from "../models/product.model";
import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class MockCatalogRepository implements ICatalogRepository {
  private products: Product[] = [];

  async create(data: Product): Promise<Product> {
    const newProduct = new Product(uuidv4(), data.name, data.price, data.stock);
    this.products.push(newProduct);
    return newProduct;
  }

  async update(data: Product): Promise<Product> {
    const index = this.products.findIndex((p) => p.id === data.id);
    if (index === -1) {
      throw new Error("Product not found");
    }

    const updatedProduct = new Product(
      data.id,
      data.name,
      data.price,
      data.stock
    );

    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  async delete(id: string): Promise<void> {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error("Product not found");
    }
    this.products.splice(index, 1);
  }

  async find(): Promise<Product[]> {
    return [...this.products];
  }

  async findOne(id: string): Promise<Product> {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return new Product(product.id, product.name, product.price, product.stock);
  }
}
