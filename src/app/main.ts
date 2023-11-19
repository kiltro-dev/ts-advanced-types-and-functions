import { addProduct } from './prroducts/product.service';

addProduct({
  id: 1,
  title: 'dasdas',
  stock: 90,
  createdAt: new Date(),
  category: { id: 11, name: 'c1' },
});
