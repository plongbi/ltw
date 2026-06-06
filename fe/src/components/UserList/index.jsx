import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchModel("/user/list")
      .then((data) => setUsers(data))
      .catch((err) => console.error("Lỗi:", err));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user._id}>
            <Link
              to={`/users/${user._id}`}
              style={{ textDecoration: "none", color: "blue" }}
            >
              {user.first_name} {user.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
