import { Play, User } from "lucide-react";

const CallHeader = ({ agent, duration, date }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Call Details</h1>
      <p className="text-sm text-gray-600 mb-4">
        View detailed information about this call.
      </p>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-900">
            Call with Agent {agent}
          </h2>
          <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full"></div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span>Agent: {agent}</span>
          <span>Duration: {duration}</span>
          <span>Date: {date}</span>
        </div>

        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
          <Play size={16} />
          <span className="text-sm font-medium">Listen</span>
        </button>
      </div>
    </div>
  );
};

// Call Transcription Component
const CallTranscription = ({ transcription }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Call Transcription
      </h2>
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <p className="text-sm text-gray-700 leading-relaxed">{transcription}</p>
      </div>
    </div>
  );
};

// Agent Information Component
const AgentInformation = ({ agent }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Agent Information
      </h2>
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={20} className="text-gray-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{agent.name}</h3>
            <p className="text-sm text-gray-600">{agent.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Additional Information Component
const AdditionalInformation = ({ callDetails }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Additional Information
      </h2>
      <div className="bg-white rounded-lg border border-gray-200">
        {Object.entries(callDetails).map(([key, value], index) => (
          <div
            key={key}
            className={`flex justify-between items-center p-4 ${
              index !== Object.entries(callDetails).length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            <span className="text-sm text-gray-600">{key}</span>
            <span className="text-sm font-medium text-gray-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CallDetailsPage() {
  const callData = {
    agent: "Sarah Miller",
    duration: "15 minutes",
    date: "July 26, 2024",
    transcription:
      "Customer: Hi, I'm calling about my recent order. I haven't received it yet. Agent Sarah: I can help with that. Can I have your order number? Customer: It's #123456. Agent Sarah: Thank you. Let me check the status.... It looks like your order is delayed. It should arrive within 2-3 business days. Customer: Okay, thank you for the update. Agent Sarah: You're welcome. Is there anything else I can assist you with? Customer: No, that's all. Have a great day. Agent Sarah: You too. Goodbye.",
    agentInfo: {
      name: "Sarah Miller",
      email: "sarah.miller@example.com",
    },
    additionalInfo: {
      "Call ID": "#789012",
      "Call Type": "Inbound",
      "Call Status": "Completed",
      Department: "Customer Support",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <CallHeader
          agent={callData.agent}
          duration={callData.duration}
          date={callData.date}
        />

        <CallTranscription transcription={callData.transcription} />

        <AgentInformation agent={callData.agentInfo} />

        <AdditionalInformation callDetails={callData.additionalInfo} />
      </div>
    </div>
  );
}
