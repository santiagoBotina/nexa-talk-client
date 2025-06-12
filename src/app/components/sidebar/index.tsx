import { Icon } from "@/app/components/Icon";
import { memo } from "react";

const Component = () => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-7">
        <h1 className="text-xl font-semibold text-gray-900">Nexa-Talk</h1>
      </div>

      <div className="flex-1 p-4">
        <nav className="space-y-2">
          <div className="flex items-center px-4 py-3 text-sm font-medium text-gray-900 bg-blue-50 rounded-lg border border-blue-100">
            <Icon iconName="phone" />
            <a href={"/calls"}>Llamadas</a>
          </div>

          <div className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Icon iconName="upload" />
            <a href={"/upload"}>Subir archivos</a>
          </div>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer">
          <Icon iconName="logout" />
          Logout
        </div>
      </div>
    </div>
  );
};

const SideBar = memo(Component);

export { SideBar };
