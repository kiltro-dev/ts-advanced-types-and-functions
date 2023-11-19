enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
};

const user1: User = { username: 'Ignacio', role: ROLES.ADMIN };
