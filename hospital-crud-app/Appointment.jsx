import { useState } from "react";
import Sidebar from "./Sidebar";

function Appointment({ activeTab, setActiveTab }) {
  const [patientName, setPatientName] = useState("");
  const [doctor, setDoctor] = useState("");

  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => {
    if (!patientName || !doctor) {
      alert("Fill all fields");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      patientName,
      doctor,
    };

    setAppointments([newAppointment, ...appointments]);

    setPatientName("");
    setDoctor("");
  };

  const handleDelete = (id) => {
    setAppointments(
      appointments.filter((item) => item.id !== id)
    );
  };

  return (
    <div style={styles.layout}>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div style={styles.page}>
        <h1>Appointments</h1>

        <input
          style={styles.input}
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) =>
            setPatientName(e.target.value)
          }
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) =>
            setDoctor(e.target.value)
          }
        />

        <button
          style={styles.button}
          onClick={handleBooking}
        >
          Book Appointment
        </button>

        <div style={{ marginTop: "30px" }}>
          {appointments.map((item) => (
            <div key={item.id} style={styles.card}>
              <h3>{item.patientName}</h3>

              <p>{item.doctor}</p>

              <button
                style={styles.deleteBtn}
                onClick={() =>
                  handleDelete(item.id)
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
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
    display: "block",
    padding: "12px",
    marginBottom: "15px",
    width: "300px",
  },

  button: {
    padding: "12px 20px",
    background: "#ff7e5f",
    color: "white",
    border: "none",
  },

  card: {
    background: "#f3f4f6",
    padding: "20px",
    marginBottom: "15px",
    borderRadius: "10px",
  },

  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 15px",
  },
};

export default Appointment;
