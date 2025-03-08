import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userEmail] = useState("usuario@ejemplo.com");
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Perfil de Usuario</h1>
      <p style={styles.email}>Email: {userEmail}</p>
      <button onClick={handleLogout} style={styles.logoutButton}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;