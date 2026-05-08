import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Appointment from "./components/Appointment";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] =
    useState("dashboard");

  if (!isLoggedIn) {
    return (
      <Login setIsLoggedIn={setIsLoggedIn} />
    );
  }

  return (
    <>
      {activePage === "dashboard" && (
        <Dashboard
          setActivePage={setActivePage}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      {activePage === "appointment" && (
        <Appointment
          setActivePage={setActivePage}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
}

export default App;
