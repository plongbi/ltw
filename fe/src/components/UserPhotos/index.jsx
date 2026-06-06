import React, { useState, useEffect } from "react";

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@material-ui/core";

import { useParams, Link } from "react-router-dom";

import fetchModel, { BASE_URL } from "../../lib/fetchModelData";

function UserPhotos() {
  const { userId } = useParams();

  const [photos, setPhotos] = useState(null);

  const fetchPhotos = async () => {
    try {
      const data = await fetchModel(`/photosOfUser/${userId}`);
      setPhotos(data);
    } catch {
      setPhotos([]);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [userId]);

  if (photos === null) {
    return <Typography>Loading...</Typography>;
  }

  if (photos.length === 0) {
    return <Typography>No photos.</Typography>;
  }

  const renderPhoto = (photo) => (
    <Card key={photo._id} style={{ marginBottom: 30 }}>
      <CardMedia
        component="img"
        image={`${BASE_URL}/images/${photo.file_name}`}
        alt="photo"
        style={{
          maxHeight: 500,
          objectFit: "contain",
        }}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Posted: {photo.date_time}
        </Typography>

        <Typography variant="subtitle1" style={{ marginTop: 10 }}>
          Comments:
        </Typography>

        {photo.comments?.length > 0 ? (
          photo.comments.map((c) => (
            <Box key={c._id} my={1}>
              <Typography
                variant="body2"
                color="primary"
                component={Link}
                to={`/users/${c.user._id}`}
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                {c.user.first_name} {c.user.last_name}:
              </Typography>

              <Typography variant="body2" component="span">
                {" "}
                {c.comment}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No comments.</Typography>
        )}
      </CardContent>
    </Card>
  );

  return <div>{photos.map(renderPhoto)}</div>;
}

export default UserPhotos;
