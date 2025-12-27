import { Outlet } from "react-router";
import { ProfileCard } from "../../features/profile/components/profile-card";
import { BalanceCard } from "../../features/transaction/components/balance-card";
import { Navbar } from "../components/layouts/navbar/navbar";

export default function DashboardLayout() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container mx-auto px-4 pt-8 pb-16 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:gap-6 lg:gap-8">
            <ProfileCard />
            <BalanceCard />
          </div>

          <Outlet />
        </div>
      </main>
    </>
  );
}
