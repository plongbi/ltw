import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import fetchModel, { BASE_URL } from "../../lib/fetchModelData";

function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetchModel(`/photosOfUser/${userId}`)
      .then((data) => setPhotos(data))
      .catch(() => setPhotos([]));
  }, [userId]);

  if (photos === null) return <div>Loading...</div>;
  if (photos.length === 0) return <div>No photos.</div>;

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo._id}>
          <img src={`${BASE_URL}/images/${photo.file_name}`} alt="photo" />
          <p>Posted: {photo.date_time}</p>
          <h4>Comments:</h4>
          {photo.comments?.length > 0 ? (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {photo.comments.map((c) => (
                <li key={c._id}>
                  <Link
                    to={`/users/${c.user._id}`}
                    style={{
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "blue",
                    }}
                  >
                    {c.user.first_name} {c.user.last_name}:
                  </Link>
                  {" " + c.comment}
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserPhotos;
