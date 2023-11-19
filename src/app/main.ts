import { addProduct } from './prroducts/product.service';

addProduct({
  id: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'dasdas',
  stock: 90,
  category: {
    id: 11,
    name: 'c1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});
