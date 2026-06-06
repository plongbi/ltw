import "./App.css";
import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";
import LoginRegister from "./components/LoginRegister/LoginRegister";

const App = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  // if (!currentUser) {
  //   return <LoginRegister setCurrentUser={setCurrentUser} />;
  // }

  return (
    <Router>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TopBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Grid>

          <div className="main-topbar-buffer" />

          <Grid item sm={3}>
            <Paper className="main-grid-item">
              <UserList />
            </Paper>
          </Grid>

          <Grid item sm={9}>
            <Paper className="main-grid-item">
              <Routes>
                {/* HOME */}
                <Route path="/" element={<Navigate to="/users" replace />} />

                <Route path="/users/:userId" element={<UserDetail />} />

                {/* USER PHOTOS */}
                <Route path="/photos/:userId" element={<UserPhotos />} />

                {/* USER LISTS */}
                <Route path="/users" element={<UserList />} />

                <Route path="*" element={<Navigate to="/users" />} />
              </Routes>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
};

export default App;
