import { useState } from "react";
import StatusMessage from "./StatusMessage";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  // Multiple users
  const users = [
    {
      email: "prathmesh@gmail.com",
      password: "1234",
    },
    
    //   email: "doctor@gmail.com",
    //   password: "doctor123",
    // },
    // {
    //   email: "nurse@gmail.com",
    //   password: "nurse123",
    // },
    // {
    //   email: "staff@gmail.com",
    //   password: "staff123",
    // },
  ];


  const handleLogin = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      // Check user exists
      const validUser = users.find(
        (user) =>
          user.email === email &&
          user.password === password
      );

      if (validUser) {
        setIsLoggedIn(true);
      } else {
        setError("Invalid email or password");
      }

      setLoading(false);
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>Hospital Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={styles.input}
        />

        <button
          onClick={handleLogin}
          style={styles.button}
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <StatusMessage error={error} />

        {/* Demo Login Details */}
        {/* <div style={styles.demoBox}>
          <p><b>Demo Users:</b></p>
          <p>admin@gmail.com / 1234</p>
          <p>doctor@gmail.com / doctor123</p>
          <p>nurse@gmail.com / nurse123</p>
          <p>staff@gmail.com / staff123</p>
        </div> */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e0f2fe",
  },

  box: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    width: "320px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  demoBox: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#444",
    background: "#f1f5f9",
    padding: "10px",
    borderRadius: "6px",
  },
};

export default Login;
