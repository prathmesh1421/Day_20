import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Appointment from "./components/Appointment";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState("Dashboard");

  // Login Page
  if (!isLoggedIn) {
    return (
      <Login
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  }

  // Main Pages
  return (
    <>
      {activeTab === "Dashboard" && (
        <Dashboard
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      {activeTab === "Appointments" && (
        <Appointment
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
}
