function Sidebar({
  setActivePage,
  setIsLoggedIn,
}) {
  return (
    <div style={styles.sidebar}>
      <h2>Hospital</h2>

      <div
        style={styles.menu}
        onClick={() =>
          setActivePage("dashboard")
        }
      >
        Dashboard
      </div>

      <div
        style={styles.menu}
        onClick={() =>
          setActivePage("appointment")
        }
      >
        Appointment
      </div>

      <button
        style={styles.logout}
        onClick={() => setIsLoggedIn(false)}
      >
        Logout
      </button>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
    color: "white",
    padding: "20px",
  },

  menu: {
    padding: "12px",
    background: "#334155",
    marginTop: "10px",
    cursor: "pointer",
    borderRadius: "8px",
  },

  logout: {
    marginTop: "20px",
    padding: "12px",
    width: "100%",
    border: "none",
    background: "#dc2626",
    color: "white",
  },
};

export default Sidebar;
