import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import AuthLayout from "./core/layouts/auth-layout";
import DashboardLayout from "./core/layouts/dashboard-layout";
import { queryClient } from "./core/libs/tanstack/query-client";
import LoginPage from "./features/auth/pages/login-page";
import RegisterPage from "./features/auth/pages/register-page";
import HomePage from "./features/information/pages/home-page";
import HistoryPage from "./features/transaction/pages/history-page";
import TopUpPage from "./features/transaction/pages/topup-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster position="top-right" richColors />
        <Routes>
          {/* Auth Route */}
          <Route element={<AuthLayout />}>
            <Route element={<LoginPage />} path="login" />
            <Route element={<RegisterPage />} path="register" />
          </Route>

          {/* Dashboard Route */}
          <Route element={<DashboardLayout />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<TopUpPage />} path="/topup" />
            <Route element={<HistoryPage />} path="/transaction" />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
