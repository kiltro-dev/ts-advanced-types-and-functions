type Size = 'S' | 'M' | 'L' | 'XL';
export type UserId = string | number;
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Size;
// };
interface Product {
  id: UserId;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Size;
}

const products: Product[] = [];

products.push({ id: 1, title: 'dasdas', stock: 90, createdAt: new Date() });

const addProduct = (data: Product) => {
  products.push(data);
};
