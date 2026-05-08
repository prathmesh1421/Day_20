import Sidebar from "./Sidebar";

function Dashboard({
  setActivePage,
  setIsLoggedIn,
}) {
  return (
    <div style={styles.layout}>
      <Sidebar
        setActivePage={setActivePage}
        setIsLoggedIn={setIsLoggedIn}
      />

      <div style={styles.page}>
        <h1>Hospital Dashboard</h1>

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
            <h2>20</h2>
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
  },

  page: {
    flex: 1,
    padding: "30px",
  },

  grid: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    background: "#f3f4f6",
    padding: "25px",
    borderRadius: "10px",
    width: "200px",
  },
};

export default Dashboard;
