import { Link } from "react-router";
import { NavMenu } from "./nav-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 border-gray-300 border-b bg-white/60 backdrop-blur-md">
      <div className="container mx-auto flex h-18 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link className="flex items-center gap-x-2 py-2" to="/">
          <img alt="SIMS PPOB Logo" className="size-6 md:size-7" src="/assets/logo/Logo.png" />
          <span className="font-semibold text-base md:text-lg">SIMS PPOB</span>
        </Link>
        <NavMenu />
      </div>
    </header>
  );
}
