import { faker } from '@faker-js/faker';
import {
  addProduct,
  findProducts,
  products,
  updateProduct,
} from './prroducts/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    price: +faker.commerce.price(),
    isNew: faker.datatype.boolean(),
    tags: Array.from({ length: 5 }, () => faker.lorem.word()),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    categoryId: faker.string.uuid(),
  });
}
console.log(products);

const product = products[0];

console.log(updateProduct(product.id, { title: 'New Title', stock: 80 }));

findProducts({ stock: 10, color: 'red' });
