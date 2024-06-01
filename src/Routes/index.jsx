import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "../Pages/Auth/auth";
import PrivateRoute from "./PrivateRoutes";
import DashbordLayout from "../Pages/DashBoardLayout/DashBoardLayout";
import QuizContainer from "../Pages/QuizQuestionsContainer/QuizQuestionsContainer";

const Routing = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={token ? <Navigate to="/dashboard" /> : <Auth />}
        />
        <Route path="/quiz/:id" element={<QuizContainer />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashbordLayout />
            </PrivateRoute>
          }
        />
        {/* Default route based on token presence */}
        <Route
          path="/"
          element={
            token ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />
          }
        />
        {/* Add more public routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
