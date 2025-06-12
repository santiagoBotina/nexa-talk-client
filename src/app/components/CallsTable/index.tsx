import { TableHeader } from "@/app/components/CallsTable/header";
import { TableRow } from "@/app/components/CallsTable/row";

export default function CallsTable() {
  const callsData = [
    {
      id: "1",
      agent: "Agent A",
      client: "Client X",
      duration: "15 min",
      time: "10:00 AM",
      creationDate: "2024-01-15",
      status: "Completed",
    },
    {
      id: "2",
      agent: "Agent B",
      client: "Client Y",
      duration: "20 min",
      time: "11:30 AM",
      creationDate: "2024-01-16",
      status: "In Progress",
    },
    {
      id: "3",
      agent: "Agent C",
      client: "Client Z",
      duration: "10 min",
      time: "09:00 AM",
      creationDate: "2024-01-17",
      status: "Completed",
    },
    {
      id: "4",
      agent: "Agent A",
      client: "Client W",
      duration: "25 min",
      time: "14:00 PM",
      creationDate: "2024-01-18",
      status: "Completed",
    },
    {
      id: "5",
      agent: "Agent B",
      client: "Client V",
      duration: "12 min",
      time: "16:30 PM",
      creationDate: "2024-01-19",
      status: "In Progress",
    },
    {
      id: "6",
      agent: "Agent D",
      client: "Client M",
      duration: "8 min",
      time: "08:45 AM",
      creationDate: "2024-01-20",
      status: "Failed",
    },
    {
      id: "7",
      agent: "Agent C",
      client: "Client N",
      duration: "35 min",
      time: "13:15 PM",
      creationDate: "2024-01-21",
      status: "Completed",
    },
    {
      id: "8",
      agent: "Agent E",
      client: "Client P",
      duration: "18 min",
      time: "15:45 PM",
      creationDate: "2024-01-22",
      status: "In Progress",
    },
  ];

  const tableHeaders = [
    "ID",
    "Agente",
    "Cliente",
    "Duración",
    "Tiempo",
    "Fecha de Creación",
    "Estado",
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return `text-green-800 bg-green-100`;
      case "In Progress":
        return `text-blue-800 bg-blue-100`;
      case "Failed":
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
