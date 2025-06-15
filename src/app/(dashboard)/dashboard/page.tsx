"use client";
import { CallVolumeChart } from "@/app/components/Charts/CallVolume";
import { CallDurationChart } from "@/app/components/Charts/CallDuration";
import { AgentPerformanceChart } from "@/app/components/Charts/AgentPerformance";
import { CallStatus } from "@/app/components/CallsTable/types";
import CallsTable from "@/app/components/CallsTable";

const callsData = [
  {
    id: "1",
    agent: "Agent A",
    client: "Client X",
    duration: "15 min",
    time: "10:00 AM",
    creationDate: "2024-01-15",
    status: CallStatus.COMPLETED,
  },
  {
    id: "2",
    agent: "Agent B",
    client: "Client Y",
    duration: "20 min",
    time: "11:30 AM",
    creationDate: "2024-01-16",
    status: CallStatus.IN_PROGRESS,
  },
  {
    id: "3",
    agent: "Agent C",
    client: "Client Z",
    duration: "10 min",
    time: "09:00 AM",
    creationDate: "2024-01-17",
    status: CallStatus.COMPLETED,
  },
  {
    id: "4",
    agent: "Agent A",
    client: "Client W",
    duration: "25 min",
    time: "14:00 PM",
    creationDate: "2024-01-18",
    status: CallStatus.COMPLETED,
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

export default function DashboardPage() {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <CallVolumeChart />
        <CallDurationChart />
        <AgentPerformanceChart />
      </div>

      <CallsTable callsData={callsData} tableHeaders={tableHeaders} />
    </div>
  );
}
