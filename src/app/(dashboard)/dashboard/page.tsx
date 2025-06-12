"use client";
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Clock, Phone, User } from "lucide-react";

const MetricCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  children,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon size={20} className="text-gray-600" />
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        </div>
        {trend && (
          <span className="text-xs text-green-600 font-medium">{trend}</span>
        )}
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
      </div>

      {children}
    </div>
  );
};

// Call Volume Chart Component
const CallVolumeChart = () => {
  const data = [
    { week: "Week 1", calls: 800 },
    { week: "Week 2", calls: 1200 },
    { week: "Week 3", calls: 600 },
    { week: "Week 4", calls: 1100 },
  ];

  return (
    <MetricCard
      title="Call Volume Over Time"
      value="1200 calls"
      subtitle="Last 30 Days +15%"
      icon={Phone}
      trend="+15%"
    >
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <YAxis hide />
            <Line
              type="monotone"
              dataKey="calls"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </MetricCard>
  );
};

// Call Duration Distribution Component
const CallDurationChart = () => {
  const data = [
    { range: "0-2\nmin", value: 20, color: "#E5E7EB" },
    { range: "2-5\nmin", value: 35, color: "#9CA3AF" },
    { range: "5-10\nmin", value: 80, color: "#6B7280" },
    { range: "10+\nmin", value: 45, color: "#374151" },
  ];

  return (
    <MetricCard
      title="Call Duration Distribution"
      value="Average: 5 min"
      subtitle="Last 30 Days -5%"
      icon={Clock}
    >
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="range"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#6B7280" }}
            />
            <YAxis hide />
            <Bar dataKey="value" radius={[2, 2, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </MetricCard>
  );
};

// Agent Performance Component
const AgentPerformanceChart = () => {
  const agents = [
    { name: "Agent 1", performance: 95 },
    { name: "Agent 2", performance: 80 },
    { name: "Agent 3", performance: 70 },
    { name: "Agent 4", performance: 60 },
  ];

  return (
    <MetricCard
      title="Agent Performance"
      value="Top Agent: Alex"
      subtitle="Last 30 Days +10%"
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

// Recent Calls Table Component
const RecentCallsTable = () => {
  const calls = [
    {
      id: "Call 12345",
      agent: "Alex",
      customer: "Customer A",
      duration: "4 min 30 sec",
      status: "Completed",
      timestamp: "2024-07-26 10:00 AM",
    },
    {
      id: "Call 12346",
      agent: "Jordan",
      customer: "Customer B",
      duration: "2 min 15 sec",
      status: "Completed",
      timestamp: "2024-07-26 10:15 AM",
    },
    {
      id: "Call 12347",
      agent: "Taylor",
      customer: "Customer C",
      duration: "7 min 45 sec",
      status: "Completed",
      timestamp: "2024-07-26 10:30 AM",
    },
    {
      id: "Call 12348",
      agent: "Casey",
      customer: "Customer D",
      duration: "1 min 50 sec",
      status: "Missed",
      timestamp: "2024-07-26 10:45 AM",
    },
    {
      id: "Call 12349",
      agent: "Alex",
      customer: "Customer E",
      duration: "5 min 20 sec",
      status: "Completed",
      timestamp: "2024-07-26 11:00 AM",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Missed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Calls</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Call ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Agent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {calls.map((call) => (
              <tr key={call.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {call.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {call.agent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  {call.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {call.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(call.status)}`}
                  >
                    {call.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {call.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Dashboard Component
export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <CallVolumeChart />
        <CallDurationChart />
        <AgentPerformanceChart />
      </div>

      {/* Recent Calls Table */}
      <RecentCallsTable />
      <RecentCallsTable />
    </div>
  );
}
