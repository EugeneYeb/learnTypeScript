import { UserRole } from "./unions";

type User = {
  id: number,
  username: string,
  role: UserRole
};

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "eugene_yeboah", role: "admin" },
  { id: nextUserId++, username: "jane_doe", role: "member" },
  { id: nextUserId++, username: "guest_user", role: "guest" },
  { id: nextUserId++, username: "charlie_brown", role: "guest" }
];

function updateUser(id: number, update: UpdatedUser) {
  const foundUser: User | undefined = users.find((userObject) => userObject.id === id);
  if (!foundUser) {
    return console.error(`User with id ${id} not found`);
  }
  Object.assign(foundUser, update);
};

function addNewUser(newUser: Omit<User, 'id'>): User {
  const user: User = {
    id: nextUserId++,
    ...newUser
  };
  users.push(user);
  return user;
};

updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

addNewUser({ username: 'eugene_yeboah', role: 'admin' });

console.log('users', users);

function fetchUserDetails(username: string): User {
  const user = users.find((user) => { user.username === username });

  if (!user) {
    throw new Error(`User with username: ${username} not found`);
  }

  return user;

};