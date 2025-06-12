import Image from "next/image";
import { memo } from "react";

export const Component = ({ iconName }: { iconName: string }) => {
  return (
    <Image
      src={`icons/${iconName}.svg`}
      alt={`${iconName} Icon`}
      width={20}
      height={20}
      className="mr-2"
    />
  );
};

const Icon = memo(Component);

export { Icon };
