import { useState } from "react";
import UserTable from "../components/UserTable";
import AddUserForm from "../components/AddUserForm";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User Management Dashboard</h1>
      <p className="text-gray-600">
        This dashboard will be used to manage users.
      </p>

      <AddUserForm addUser={addUser} />
      <UserTable users={users} />
    </div>
  );
}
