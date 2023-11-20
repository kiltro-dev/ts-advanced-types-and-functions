import { faker } from '@faker-js/faker';
import {
  CreateProductDto,
  FindProductDto,
  UpdateProductDto,
} from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: string,
  changes: UpdateProductDto,
): Product => {
  const index = products.findIndex((product) => product.id === id);
  const prevData = products[index];
  products[index] = { ...prevData, ...changes };
  return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
  // dto.tags = []
  // dto.tags?.push('1');
  return products;
};
