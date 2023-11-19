import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

type Size = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Size;
  category: Category;
}
