import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../Pages/Auth/auth";
import PrivateRoute from "./PrivateRoutes";
import DashbordLayout from "../Pages/DashBoardLayout/DashBoardLayout";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/dash" element={<Auth />} /> */}
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
