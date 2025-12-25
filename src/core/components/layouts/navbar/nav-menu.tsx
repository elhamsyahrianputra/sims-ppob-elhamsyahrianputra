import { NavLink } from "./nav-link";

export function NavMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-6 lg:gap-12">
        <li>
          <NavLink to="/topup">Top Up</NavLink>
        </li>
        <li>
          <NavLink to="/transaction">Transaction</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Akun</NavLink>
        </li>
      </ul>
    </nav>
  );
}
