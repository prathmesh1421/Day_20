function Sidebar({
  activeTab,
  setActiveTab,
  setIsLoggedIn,
}) {
  const menus = ["Dashboard", "Appointments"];

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={styles.sidebar}>
      <div>
        <h2>Hospital</h2>

        {menus.map((item) => (
          <div
            key={item}
            onClick={() => setActiveTab(item)}
            style={{
              ...styles.menu,
              background:
                activeTab === item
                  ? "#ff7e5f"
                  : "transparent",
              color:
                activeTab === item
                  ? "white"
                  : "black",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={handleLogout}
        style={styles.logoutBtn}
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
    background: "#f3f4f6",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  menu: {
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  logoutBtn: {
    width: "100%",
    padding: "12px",
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Sidebar;
