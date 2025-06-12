import { Icon } from "@/app/components/Icon";
import { memo } from "react";
import { H2 } from "@/app/components/Title/h2";
import { Badge } from "@/app/components/Badge";

const Component = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon iconName="nexa-talk-logo" />
          <H2 title="Dashboard" />
        </div>

        <div className="flex items-center mr-12">
          <Badge
            label="cc. 1005892055"
            classname="bg-gray-100 mr-3"
            size="medium"
          />
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center"></div>
        </div>
      </div>
    </header>
  );
};

const NavBar = memo(Component);

export { NavBar };
