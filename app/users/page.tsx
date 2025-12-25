import UserExplorer from "./UserExplorer";
import { getUsers } from "./data";
import UserDetailCard from "./[userId]/page";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <UserExplorer users={users}>
      <UserDetailCard />
    </UserExplorer>
  );
}
