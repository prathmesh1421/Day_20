import { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Enter email & password");
      return;
    }

    setIsLoggedIn(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>Hospital Login</h1>

        <input
          style={styles.input}
          type="email"
          placeholder="Enter Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          style={styles.button}
          onClick={handleLogin}
        >
          Login
        </button>
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
    background: "#f3f4f6",
  },

  box: {
    background: "white",
    padding: "40px",
    borderRadius: "10px",
    width: "300px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#ff7e5f",
    color: "white",
    border: "none",
  },
};

export default Login;
