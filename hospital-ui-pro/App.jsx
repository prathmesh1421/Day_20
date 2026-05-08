import { useState } from "react";
import {
  Users,
  Calendar,
  Stethoscope,
  LogOut,
  Activity,
  Lock,
  Mail,
} from "lucide-react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [appointments, setAppointments] = useState([]);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
  });

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleAddAppointment = () => {
    if (!form.patient || !form.doctor || !form.date) {
      alert("Fill all fields");
      return;
    }

    setAppointments([...appointments, form]);

    setForm({
      patient: "",
      doctor: "",
      date: "",
    });
  };

  // LOGIN UI
  if (!isLoggedIn) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginCard}>
          <h1 style={styles.logo}>CarePlus</h1>

          <div style={styles.inputBox}>
            <Mail size={18} />

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              style={styles.input}
            />
          </div>

          <div style={styles.inputBox}>
            <Lock size={18} />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              style={styles.input}
            />
          </div>

          <button
            style={styles.loginBtn}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // DASHBOARD
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={{ color: "white" }}>
          🏥 CarePlus
        </h2>

        <div style={styles.menu}>Dashboard</div>
        <div style={styles.menu}>Doctors</div>
        <div style={styles.menu}>Patients</div>
        <div style={styles.menu}>Appointments</div>

        <button
          style={styles.logoutBtn}
          onClick={() => setIsLoggedIn(false)}
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Main */}
      <div style={styles.main}>
        <h1>Hospital Dashboard</h1>

        {/* Cards */}
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <Users size={28} />
            <h2>1,240</h2>
            <p>Patients</p>
          </div>

          <div style={styles.card}>
            <Stethoscope size={28} />
            <h2>54</h2>
            <p>Doctors</p>
          </div>

          <div style={styles.card}>
            <Calendar size={28} />
            <h2>{appointments.length}</h2>
            <p>Appointments</p>
          </div>

          <div style={styles.card}>
            <Activity size={28} />
            <h2>18</h2>
            <p>Emergency</p>
          </div>
        </div>

        {/* Appointment Form */}
        <div style={styles.formCard}>
          <h2>Book Appointment</h2>

          <input
            style={styles.formInput}
            type="text"
            placeholder="Patient Name"
            value={form.patient}
            onChange={(e) =>
              setForm({
                ...form,
                patient: e.target.value,
              })
            }
          />

          <input
            style={styles.formInput}
            type="text"
            placeholder="Doctor Name"
            value={form.doctor}
            onChange={(e) =>
              setForm({
                ...form,
                doctor: e.target.value,
              })
            }
          />

          <input
            style={styles.formInput}
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({
                ...form,
                date: e.target.value,
              })
            }
          />

          <button
            style={styles.bookBtn}
            onClick={handleAddAppointment}
          >
            Add Appointment
          </button>
        </div>

        {/* Appointment List */}
        <div style={styles.listCard}>
          <h2>Appointments</h2>

          {appointments.map((item, index) => (
            <div key={index} style={styles.appointment}>
              <h3>{item.patient}</h3>

              <p>{item.doctor}</p>

              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  loginPage: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
       "linear-gradient(135deg, #ff7e5f, #feb47b)",
  },

  loginCard: {
    width: "350px",
    background: "white",
    padding: "40px",
    borderRadius: "20px",
  },

  logo: {
    textAlign: "center",
    marginBottom: "30px",
  },

  inputBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1px solid #ddd",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "20px",
  },

  input: {
    border: "none",
    outline: "none",
    width: "100%",
  },

  loginBtn: {
    width: "100%",
    padding: "14px",
    border: "none",
    background:  "linear-gradient(135deg, #ff7e5f, #feb47b)",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
  },

  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f1f5f9",
  },

  sidebar: {
    width: "240px",
    background: "#0f172a",
    padding: "30px 20px",
  },

  menu: {
    color: "white",
    padding: "14px",
    marginTop: "10px",
    borderRadius: "10px",
    background:  "linear-gradient(135deg, #ff7e5f, #feb47b)",
    cursor: "pointer",
  },

  logoutBtn: {
    marginTop: "30px",
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#dc2626",
    color: "white",
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
  },

  main: {
    flex: 1,
    padding: "30px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },

  formCard: {
    background: "white",
    marginTop: "30px",
    padding: "25px",
    borderRadius: "18px",
  },

  formInput: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },

  bookBtn: {
    marginTop: "20px",
    padding: "12px 20px",
    border: "none",
    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
  },

  listCard: {
    background: "white",
    marginTop: "30px",
    padding: "25px",
    borderRadius: "18px",
  },

  appointment: {
    padding: "15px",
    background: "#f8fafc",
    borderRadius: "10px",
    marginTop: "15px",
  },
};
