import { Icon } from "@/app/components/Icon";
import { memo } from "react";

interface Props {
  icon: string;
  path: string;
  label: string;
  isItemSelected?: boolean;
  onClick?: () => void;
}

const Component = ({ isItemSelected, icon, path, label, onClick }: Props) => {
  const selectedRouteStyle =
    "text-gray-900 bg-blue-50 rounded-lg border border-blue-100";
  const unselectedRouteStyle =
    "text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer";

  return (
    <div
      className={`flex items-center px-4 py-3 text-sm font-medium ${isItemSelected ? selectedRouteStyle : unselectedRouteStyle}`}
      onClick={onClick}
    >
      <Icon iconName={icon} />
      <a href={path}>{label}</a>
    </div>
  );
};

const SideBarItem = memo(Component);

export { SideBarItem };
