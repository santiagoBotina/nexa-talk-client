import { User } from "lucide-react";
import { MetricCard } from "@/app/components/Charts/MetricCard";
import { memo } from "react";

const Component = () => {
  const agents = [
    { name: "Victor", performance: 95 },
    { name: "Oswaldo", performance: 80 },
    { name: "Carla", performance: 70 },
    { name: "Camila", performance: 60 },
  ];

  return (
    <MetricCard
      title="Rendimiento de Agentes"
      value="Agente Top: Victor"
      subtitle="Últimos 30 días +10%"
      icon={User}
      trend="+10%"
    >
      <div className="space-y-3">
        {agents.map((agent, index) => (
          <div key={agent.name} className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{agent.name}</span>
            <div className="flex items-center gap-2 flex-1 ml-4">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${agent.performance}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 w-8">
                {agent.performance}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </MetricCard>
  );
};

const AgentPerformanceChart = memo(Component);

export { AgentPerformanceChart };
