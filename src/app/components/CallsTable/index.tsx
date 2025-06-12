export default function CallsTable() {
  const callsData = [
    {
      id: "Call 1",
      agent: "Agent A",
      client: "Client X",
      duration: "15 min",
      time: "10:00 AM",
      creationDate: "2024-01-15",
      status: "Completed",
    },
    {
      id: "Call 2",
      agent: "Agent B",
      client: "Client Y",
      duration: "20 min",
      time: "11:30 AM",
      creationDate: "2024-01-16",
      status: "In Progress",
    },
    {
      id: "Call 3",
      agent: "Agent C",
      client: "Client Z",
      duration: "10 min",
      time: "09:00 AM",
      creationDate: "2024-01-17",
      status: "Completed",
    },
    {
      id: "Call 4",
      agent: "Agent A",
      client: "Client W",
      duration: "25 min",
      time: "14:00 PM",
      creationDate: "2024-01-18",
      status: "Completed",
    },
    {
      id: "Call 5",
      agent: "Agent B",
      client: "Client V",
      duration: "12 min",
      time: "16:30 PM",
      creationDate: "2024-01-19",
      status: "In Progress",
    },
    {
      id: "Call 6",
      agent: "Agent D",
      client: "Client M",
      duration: "8 min",
      time: "08:45 AM",
      creationDate: "2024-01-20",
      status: "Failed",
    },
    {
      id: "Call 7",
      agent: "Agent C",
      client: "Client N",
      duration: "35 min",
      time: "13:15 PM",
      creationDate: "2024-01-21",
      status: "Completed",
    },
    {
      id: "Call 8",
      agent: "Agent E",
      client: "Client P",
      duration: "18 min",
      time: "15:45 PM",
      creationDate: "2024-01-22",
      status: "In Progress",
    },
  ];

  const getStatusBadge = (status: string) => {
    const baseClasses =
      "inline-flex px-2 py-1 text-xs font-semibold rounded-full";

    switch (status) {
      case "Completed":
        return `${baseClasses} text-green-800 bg-green-100`;
      case "In Progress":
        return `${baseClasses} text-blue-800 bg-blue-100`;
      case "Failed":
        return `${baseClasses} text-red-800 bg-red-100`;
      default:
        return `${baseClasses} text-gray-800 bg-gray-100`;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Creation Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {callsData.map((call, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {call.id}
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
                    <span className={getStatusBadge(call.status)}>
                      {call.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </table>
    </div>
  );
}
