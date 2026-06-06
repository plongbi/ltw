import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../lib/fetchModelData";

export default function LoginRegister({ setCurrentUser }) {
  const [login_name, setLoginName] = useState("");
  const [password, setPassword] = useState("");

  const [registerData, setRegisterData] = useState({
    login_name: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
    location: "",
    description: "",
    occupation: "",
  });

  const handleLogin = async () => {
    const fakeUser = {
      _id: "123",
      first_name: "Phạm Hải Long",
      last_name: "",
    };

    setCurrentUser(fakeUser);
    localStorage.setItem("currentUser", JSON.stringify(fakeUser));
  };

  const handleRegister = () => {
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(
      `Register success!
  Login Name: ${registerData.login_name}
  First Name: ${registerData.first_name}
  Last Name: ${registerData.last_name}
  Location: ${registerData.location}
  Description: ${registerData.description}
  Occupation: ${registerData.occupation}`
    );
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title">Photo Sharing App</h1>

        <div className="form-section">
          <h2>Login</h2>

          <div className="form-row">
            <input
              placeholder="Login name"
              value={login_name}
              onChange={(e) => setLoginName(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
          </div>
        </div>

        <div className="form-section">
          <h2>Register</h2>

          <div className="form-row">
            {Object.keys(registerData).map((key) => (
              <input
                key={key}
                type={key.includes("password") ? "password" : "text"}
                placeholder={key.replace("_", " ")}
                value={registerData[key]}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    [key]: e.target.value,
                  })
                }
              />
            ))}

            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
