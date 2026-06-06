import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useLocation } from "react-router-dom";
// import { BASE_URL } from "../../lib/fetchModelData"; // Có thể comment nếu không dùng
// import axios from "axios"; // Có thể comment nếu không dùng

function TopBar({ currentUser, setCurrentUser }) {
  const location = useLocation();
  const path = location.pathname;

  let contextText = "Welcome to Photo App";

  if (path.startsWith("/users/")) {
    contextText = "User Detail";
  } else if (path.startsWith("/photos/")) {
    contextText = "User Photos";
  }

  // const handleLogout = () => {
  //   setCurrentUser(null);

  //   localStorage.removeItem("currentUser");
  // };

  // const handleLogout = async () => {
  //   try {
  //     await axios.post(
  //       `${BASE_URL}/admin/logout`,
  //       {},
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     setCurrentUser(null);
  //     localStorage.removeItem("currentUser");
  //   } catch (err) {
  //     alert("Logout failed");
  //   }
  // };

  return (
    <AppBar position="static" className="topbar-appBar">
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* LEFT */}
        <Typography variant="h6">Phạm Hải Long - B23DCVT258</Typography>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {/* USER */}
          {/* <Typography variant="h6">Hi {currentUser?.first_name} </Typography> */}

          <Typography variant="h6">{contextText}</Typography>

          {/* LOGOUT */}
          {/* <Button style={{ color: "red" }} onClick={handleLogout}>
            Logout
          </Button> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
