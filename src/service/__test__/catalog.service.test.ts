import { ICatalogRepository } from "../../interface/catalogRepository.interface";
import { MockCatalogRepository } from "../../repository/mockCatalogRepository";
import { CatalogService } from "../catalog.service";

describe("categoryService", () => {
  let repository: ICatalogRepository;
  //setup
  beforeEach(() => {
    repository = new MockCatalogRepository();
  });

  describe("createProduct", () => {
    test("should create product", async () => {
      const service = new CatalogService(repository);
      const result = await service.createProduct({});
      expect(result).toMatchObject({
        id: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        price: expect.any(Number),
        stock: expect.any(Number),
      });
    });
  });

  //cleanup
  afterEach(() => {
    repository = {} as ICatalogRepository;
  });
});
