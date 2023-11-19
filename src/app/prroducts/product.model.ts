import { faker } from '@faker-js/faker';

import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

type Size = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  color: string;
  price: number;
  stock: number;
  isNew: boolean;
  tags: string[];
  size?: Size;
  category: Category;
}
