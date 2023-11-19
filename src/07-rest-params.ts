import { ROLES, User } from './01-enum';

const currentUser: User = {
  username: 'ignacio',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = (user: User) => {
  if (user.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) return true;
  if (currentUser.role === role2) return true;
  return false;
};

const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) return true;
  return false;
};

const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) return true;
  return false;
};

console.log(checkAdminRole(currentUser));
console.log(checkRole(ROLES.ADMIN, ROLES.SELLER));
console.log(checkRoleV2([ROLES.ADMIN, ROLES.SELLER]));
console.log(checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER));
