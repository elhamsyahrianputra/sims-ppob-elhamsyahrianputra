import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import AuthLayout from "./core/layouts/auth-layout";
import { queryClient } from "./core/libs/tanstack/query-client";
import LoginPage from "./features/auth/pages/login-page";
import RegisterPage from "./features/auth/pages/register-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster position="top-right" richColors />
        <Routes>
          <Route element={<AuthLayout />}>
            <Route element={<LoginPage />} path="login" />
            <Route element={<RegisterPage />} path="register" />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
