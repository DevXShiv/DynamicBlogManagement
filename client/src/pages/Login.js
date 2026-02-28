import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // show validation error
  const handleLogin = () => { 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&])[A-Za-z\d!@#$%^&]{8,}$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format!");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters, with letters and numbers!"
      );
      return;
    } 
    setError("");
    navigate("/author");
  };

  return (
    <div className="container">
      
      <div className="login-card">
        <h2>Welcome Back Blogger</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;