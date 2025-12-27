import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import { ProtectedRoute, PublicRoute } from "./core/components/guards";
import AuthLayout from "./core/layouts/auth-layout";
import DashboardLayout from "./core/layouts/dashboard-layout";
import ProfileLayout from "./core/layouts/profile-layout";
import { queryClient } from "./core/libs/tanstack/query-client";
import { store } from "./core/store";
import LoginPage from "./features/auth/pages/login-page";
import RegisterPage from "./features/auth/pages/register-page";
import HomePage from "./features/information/pages/home-page";
import ProfilePage from "./features/profile/pages/profile-page";
import HistoryPage from "./features/transaction/pages/history-page";
import TopUpPage from "./features/transaction/pages/topup-page";
import TransactionPage from "./features/transaction/pages/transaction-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Toaster duration={2000} position="top-right" richColors />
          <Routes>
            <Route element={<PublicRoute />}>
              <Route element={<AuthLayout />}>
                <Route element={<LoginPage />} path="login" />
                <Route element={<RegisterPage />} path="register" />
              </Route>
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route element={<HomePage />} path="/" />
                <Route element={<TopUpPage />} path="/topup" />
                <Route
                  element={<TransactionPage />}
                  path="/service/:serviceCode"
                />
                <Route element={<HistoryPage />} path="/transaction" />
              </Route>

              <Route element={<ProfileLayout />}>
                <Route element={<ProfilePage />} path="/profile" />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
