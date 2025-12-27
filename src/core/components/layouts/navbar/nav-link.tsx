import { Link, useLocation } from "react-router";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function NavLink({ to, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link className={`font-semibold text-sm transition-colors duration-300 lg:text-base ${isActive ? "text-primary" : "text-gray-700 hover:text-primary/80"}`} to={to}>
      {children}
    </Link>
  );
}
