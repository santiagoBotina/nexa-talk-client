import { memo } from "react";
import { Badge } from "@/app/components/Badge";
import { Call } from "@/core/domain/calls/call.entity";
import Link from "next/link";

interface Props {
  call: Call;
  badgeClass?: string;
}

const Component = ({ call, badgeClass }: Props) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <Link href={`/calls/${call.id}`}>{call.id}</Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 cursor-pointer font-medium">
        {call.agent}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 cursor-pointer font-medium">
        {call.client}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {call.duration}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {call.time}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {call.creationDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Badge classname={badgeClass} label={call.status} />
      </td>
    </tr>
  );
};

const TableRow = memo(Component);

export { TableRow };
