export type UserName = string;
export type User = {
  id: UniqueId;
  firstName: UserName;
  lastName: UserName;
  email: Email;
};

export function getFullName(user: User): string {
  return user.firstName + " " + user.lastName;
}
