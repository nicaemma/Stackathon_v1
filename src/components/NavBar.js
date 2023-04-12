import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { logOut } = useAuth();

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "black",
  };

  async function handleLogout() {
    setError("");
    try {
      await logOut();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <Navbar className="navbar">
        <Container>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/my-self-care" style={linkStyle}>
            My Self Care
          </Link>
          <Link to="/memory-game" style={linkStyle}>
            Memory Game
          </Link>
          <NavDropdown
            title="Resources"
            id="basic-nav-dropdown"
            style={linkStyle}
          >
            <NavDropdown.Item onClick={() => navigate("/meditation")}>
              Meditation
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/exercise")}>
              Exercise
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate("/exercise")}>
              Journaling
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Account"
            id="basic-nav-dropdown"
            style={linkStyle}
          >
            <NavDropdown.Item onClick={() => navigate("/dashboard")}>
              Account Profile
            </NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
