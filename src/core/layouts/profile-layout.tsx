import { Outlet } from "react-router";
import { Navbar } from "../components/layouts/navbar/navbar";

export default function ProfileLayout() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container mx-auto px-4 pt-8 pb-16 md:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </>
  );
}
