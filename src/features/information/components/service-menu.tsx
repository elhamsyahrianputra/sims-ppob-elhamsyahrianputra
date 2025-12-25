import { useMenus } from "../hooks/user-menu";

export default function ServiceMenu() {
  const { data: menus } = useMenus();
  return (
    <div className="mt-8 md:mt-10 lg:mt-12">
      <ul className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 lg:gap-6 xl:grid-cols-12">
        {menus?.data?.map((menu) => (
          <li
            className="flex flex-col items-center gap-y-2"
            key={menu.service_code}
          >
            <img
              alt={menu.service_code}
              className="size-10 md:size-12 xl:size-16"
              src={menu.service_icon}
            />
            <span className="text-center font-medium text-xs leading-4">
              {menu.service_name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
