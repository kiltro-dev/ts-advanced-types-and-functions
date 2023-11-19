import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = 'dadasdas';
  // data.createdAt = new Date();
  products.push(data);
};
