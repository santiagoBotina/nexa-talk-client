import { memo } from "react";

interface Props {
  label: string;
  classname?: string;
}

const Component = ({ label, classname }: Props) => {
  return (
    <th
      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${classname}`}
    >
      {label}
    </th>
  );
};

const TableHeader = memo(Component);

export { TableHeader };
