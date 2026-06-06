import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchModel(`/user/${userId}`)
      .then((data) => setUser(data))
      .catch((err) => console.error("Lỗi:", err));
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>
        {user.first_name} {user.last_name}
      </h2>

      <p>
        <strong>Location:</strong> {user.location}
      </p>
      <p>
        <strong>Description:</strong> {user.description}
      </p>
      <p>
        <strong>Occupation:</strong> {user.occupation}
      </p>

      <Link to={`/photos/${user._id}`} style={{ textDecoration: "none" }}>
        View Photos
      </Link>
    </div>
  );
}

export default UserDetail;
