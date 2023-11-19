import { faker } from '@faker-js/faker';
import { addProduct } from './prroducts/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({ min: 10, max: 100 }),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    price: +faker.commerce.price(),
    isNew: faker.datatype.boolean(),
    tags: Array.from({ length: 5 }, () => faker.lorem.word()),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
}
