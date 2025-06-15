import { TableHeader } from "@/app/components/CallsTable/header";
import { TableRow } from "@/app/components/CallsTable/row";
import { CallData, CallStatus } from "@/app/components/CallsTable/types";

interface Props {
  callsData: CallData[];
  tableHeaders: string[];
}

export default function CallsTable({ callsData, tableHeaders }: Props) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case CallStatus.COMPLETED:
        return `text-green-800 bg-green-100`;
      case CallStatus.IN_PROGRESS:
        return `text-blue-800 bg-blue-100`;
      case CallStatus.FAILED:
        return `text-red-800 bg-red-100`;
      default:
        return `text-gray-800 bg-gray-100`;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {tableHeaders.map((header) => (
              <TableHeader key={header} label={header} />
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {callsData.map((call) => (
            <TableRow
              key={call.id}
              call={call}
              badgeClass={getStatusBadge(call.status)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
