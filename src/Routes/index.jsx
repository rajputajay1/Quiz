import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../Pages/Auth/auth";
import PrivateRoute from "./PrivateRoutes";
import DashbordLayout from "../Pages/DashBoardLayout/DashBoardLayout";
import QuizContainer from "../Pages/QuizQuestionsContainer/QuizQuestionsContainer";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/quiz/:id" element={<QuizContainer />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashbordLayout />
            </PrivateRoute>
          }
        />

        {/* Add more public routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
