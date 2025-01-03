import { UserRole } from "./unions";

type User = {
  username: string,
  role: UserRole
}

const users: User[] = [
  { username: "eugene_yeboah", role: "admin" },
  { username: "jane_doe", role: "member" },
  { username: "guest_user", role: "guest" }
];

function fetchUserDetails(username: string): User {
  const user = users.find((user) => { user.username === username });

  if (!user) {
    throw new Error(`User with username: ${username} not found`);
  }

  return user;

}