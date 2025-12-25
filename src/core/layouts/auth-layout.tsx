import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex lg:min-h-screen">
      {/* left Section */}
      <section className="container mx-auto flex flex-1 items-center justify-center px-4 py-6">
        <Outlet />
      </section>

      {/* Right Section */}
      <section className="hidden flex-1 justify-center lg:flex">
        <img
          alt="Login Illustration"
          className="h-screen object-cover"
          src="/assets/illustration/Illustrasi Login.png"
        />
      </section>
    </div>
  );
}
