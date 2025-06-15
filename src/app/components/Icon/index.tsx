import { memo } from "react";

const Component = ({ iconName }: { iconName: string }) => {
  return (
    <img
      src={`/icons/${iconName}.svg`}
      alt={`${iconName} Icon`}
      width={20}
      height={20}
      className="mr-2"
      loading="lazy"
    />
  );
};

const Icon = memo(Component);

export { Icon };
