import { Link } from "react-router";
import { useMenus } from "../hooks/user-menu";

export default function ServiceMenu() {
  const { data: menus } = useMenus();
  return (
    <div className="mt-8 md:mt-10 lg:mt-12">
      <ul className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 lg:gap-6 xl:grid-cols-12">
        {menus?.data?.map((menu) => (
          <li key={menu.service_code}>
            <Link className="flex flex-col items-center gap-y-2 transition-al duration-300 ease-in-out hover:scale-105 hover:opacity-75" to={`service/${menu.service_code.toLowerCase()}`}>
              <img alt={menu.service_code} className="size-10 md:size-12 xl:size-16" src={menu.service_icon} />
              <span className="text-center font-medium text-xs leading-4">{menu.service_name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
