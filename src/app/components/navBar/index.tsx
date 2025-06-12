import { Icon } from "@/app/components/Icon";
import { memo } from "react";

const Component = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon iconName="nexa-talk-logo" />
          <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
        </div>

        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center"></div>
        </div>
      </div>
    </header>
  );
};

const NavBar = memo(Component);

export { NavBar };
