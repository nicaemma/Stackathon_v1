import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./user-auth/Signup";
import Dashboard from "./user-auth/Dashboard";
import Login from "./user-auth/Login";
import ForgotPassword from "./user-auth/ForgotPassword";
import PrivateRoute from "./user-auth/PrivateRoute";
import UpdateProfile from "./user-auth/UpdateProfile";
import MemoryGame from "./memory-game/MemoryGame";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import MySelfCare from "./my-self-care/MySelfCare";
import Quiz from "./my-self-care/Quiz";
import CopingSkills from "./my-self-care/CopingSkills";
import AddCopingSkill from "./my-self-care/AddSkill";

function App() {
  return (
    <>
      <div>{<NavBar />}</div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/my-self-care" element={<MySelfCare />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/my-coping-skills" element={<CopingSkills />} />
        <Route path="/my-coping-skills/add" element={<AddCopingSkill />} />
      </Routes>
    </>
  );
}

export default App;

// RETURN STATEMENT FROM INITAL REACT WITH SIGNUP COMPONENT
