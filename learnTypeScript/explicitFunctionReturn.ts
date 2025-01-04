import { UserRole } from "./unions";

type User = {
  id: number,
  username: string,
  role: UserRole
};

type UpdatedUser = Partial<User>;

const users: User[] = [
  { id: 1, username: "eugene_yeboah", role: "admin" },
  { id: 2, username: "jane_doe", role: "member" },
  { id: 3, username: "guest_user", role: "guest" },
  { id: 4, username: "charlie_brown", role: "guest" }
];

function updateUser(id: number, update: UpdatedUser) {
  const foundUser: User | undefined = users.find((userObject) => userObject.id === id);
  if (!foundUser) {
    return console.error(`User with id ${id} not found`);
  }
  Object.assign(foundUser, update)
}

updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log('users', users);

function fetchUserDetails(username: string): User {
  const user = users.find((user) => { user.username === username });

  if (!user) {
    throw new Error(`User with username: ${username} not found`);
  }

  return user;

}