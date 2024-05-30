import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../Pages/Auth/auth";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../Pages/DashBoard/Dashboard";
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
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Add more public routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
