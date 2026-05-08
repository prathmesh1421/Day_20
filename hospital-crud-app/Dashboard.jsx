import Sidebar from "./Sidebar";

function Dashboard({
  activeTab,
  setActiveTab,
  setIsLoggedIn,
}) {
  return (
    <div style={styles.layout}>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div style={styles.page}>
        <h1 style={styles.heading}>
          🏥 Hospital Dashboard
        </h1>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>120</h2>
            <p>Patients</p>
          </div>

          <div style={styles.card}>
            <h2>35</h2>
            <p>Doctors</p>
          </div>

          <div style={styles.card}>
            <h2>18</h2>
            <p>Appointments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  layout: {
    display: "flex",
    background: "#f8fafc",
    minHeight: "100vh",
  },

  page: {
    flex: 1,
    padding: "30px",
  },

  heading: {
    color: "#1e293b",
    marginBottom: "20px",
  },

  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  card: {
    background:
      "linear-gradient(to right, #ff7e5f, #feb47b)",
    color: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "220px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Dashboard;
