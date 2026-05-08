import { useState } from "react";
import Sidebar from "./Sidebar";
import StatusMessage from "./StatusMessage";

function Appointment({
  setActivePage,
  setIsLoggedIn,
}) {
  const [patient, setPatient] = useState("");
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleBook = () => {
    setLoading(true);
    setError("");
    setMessage("");

    setTimeout(() => {
      if (patient === "") {
        setError("Patient name required");
      } else {
        setMessage(
          "Appointment booked successfully"
        );
      }

      setLoading(false);
      setPatient("");
    }, 1500);
  };

  return (
    <div style={styles.layout}>
      <Sidebar
        setActivePage={setActivePage}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div style={styles.page}>
        <h1>Appointment Page</h1>

        <input
          type="text"
          placeholder="Patient Name"
          value={patient}
          onChange={(e) =>
            setPatient(e.target.value)
          }
          style={styles.input}
        />

        <button
          onClick={handleBook}
          style={styles.button}
        >
          {loading
            ? "Loading..."
            : "Book Appointment"}
        </button>

        <StatusMessage
          message={message}
          error={error}
        />
      </div>
    </div>
  );
}

const styles = {
  layout: {
    display: "flex",
  },

  page: {
    flex: 1,
    padding: "30px",
  },

  input: {
    padding: "12px",
    width: "300px",
    marginBottom: "15px",
    display: "block",
  },

  button: {
    padding: "12px 20px",
    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
    color: "white",
    border: "none",
  },
};

export default Appointment;
