import { memo } from "react";

interface Props {
  label: string;
  size?: "small" | "medium" | "large";
  classname?: string;
}

const Component = ({ label, classname, size }: Props) => {
  const sizeClasses = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-3 py-1.5",
    large: "text-base px-4 py-2",
  };

  return (
    <span
      className={`inline-flex ${size ? sizeClasses[size] : sizeClasses["small"]} font-semibold rounded-full ${classname}`}
    >
      {label}
    </span>
  );
};

const Badge = memo(Component);

export { Badge };
