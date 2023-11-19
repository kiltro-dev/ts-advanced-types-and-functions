import { Product } from './product.model';

type ProductOmit = 'id' | 'createdAt' | 'updatedAt' | 'category';
// type ProductPick = 'id' | 'createdAt' | 'updatedAt' | 'category';

export interface CreateProductDto extends Omit<Product, ProductOmit> {
  categoryId: string;
}
// type example = Pick<Product, ProductPick>;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

// type example2 = Required<Product>;
