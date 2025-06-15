// Call Transcription Component
import { Headphones, Play, User } from "lucide-react";
import { CallSummary } from "@/app/components/CallSummary";

const CallHeader = ({ agent, duration, date }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Detalles de la llamada
      </h1>
      <p className="text-sm text-gray-600 mb-4">
        Revisa información detallada de esta llamada.
      </p>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-900">
            Llamada con el/la agente {agent}
          </h2>
          <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full"></div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span>Agente: {agent}</span>
          <span>Duración: {duration}</span>
          <span>Fecha: {date}</span>
        </div>

        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
          <Play size={16} />
          <span className="text-sm font-medium">Escuchar</span>
        </button>
      </div>
    </div>
  );
};

const CallTranscription = ({ transcription }: { transcription: string }) => {
  const parseTranscription = (text: string) => {
    if (!text) return [];

    const lines = text.split(/(?=(?:Agent|Agente|Cliente|Customer)[\s\w]*:)/i);

    return lines
      .filter((line) => line.trim())
      .map((line) => {
        const trimmedLine = line.trim();

        const isAgent = /^(Agent|Agente)/i.test(trimmedLine);
        const isCustomer = /^(Cliente|Customer)/i.test(trimmedLine);

        const colonIndex = trimmedLine.indexOf(":");
        if (colonIndex === -1) {
          return { speaker: "Unknown", message: trimmedLine, type: "unknown" };
        }

        const speaker = trimmedLine.substring(0, colonIndex).trim();
        const message = trimmedLine.substring(colonIndex + 1).trim();

        return {
          speaker,
          message,
          type: isAgent ? "agent" : isCustomer ? "customer" : "unknown",
        };
      });
  };

  const parsedLines = parseTranscription(transcription);

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Transcripción de la llamada
      </h2>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {parsedLines.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No hay transcripción disponible
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {parsedLines.map((line, index) => (
              <div
                key={index}
                className={`p-4 flex items-start space-x-3 ${
                  line.type === "agent"
                    ? "bg-blue-50"
                    : line.type === "customer"
                      ? "bg-gray-50"
                      : "bg-white"
                }`}
              >
                {/* Speaker Icon */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    line.type === "agent"
                      ? "bg-blue-100 text-blue-600"
                      : line.type === "customer"
                        ? "bg-gray-200 text-gray-600"
                        : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {line.type === "agent" ? (
                    <Headphones className="w-4 h-4" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>

                {/* Speaker Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span
                      className={`text-sm font-medium ${
                        line.type === "agent"
                          ? "text-blue-700"
                          : line.type === "customer"
                            ? "text-gray-700"
                            : "text-gray-600"
                      }`}
                    >
                      {line.speaker}
                    </span>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        line.type === "agent"
                          ? "bg-blue-100 text-blue-800"
                          : line.type === "customer"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {line.type === "agent"
                        ? "Agente"
                        : line.type === "customer"
                          ? "Cliente"
                          : "Desconocido"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {line.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Transcription Stats */}
      {parsedLines.length > 0 && (
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>Total intervenciones: {parsedLines.length}</span>
          <span>
            Agente: {parsedLines.filter((l) => l.type === "agent").length} |
            Cliente: {parsedLines.filter((l) => l.type === "customer").length}
          </span>
        </div>
      )}
    </div>
  );
};

// Agent Information Component
const AgentInformation = ({ agent }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Información del Agente
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
        Información Adicional
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
    duration: "15 min",
    date: "Julio 26, 2024",
    transcription:
      "Cliente: Hola, recibí su llamada. Sé que tengo pagos atrasados. Agente Sarah: Gracias por contestar, Sr. García. Entiendo su situación y estoy aquí para ayudarle a encontrar una solución. Su cuenta tiene un saldo pendiente de $2,500. ¿Podemos hablar sobre sus opciones de pago? Cliente: La verdad es que he tenido dificultades financieras este mes, pero puedo pagar algo. Agente Sarah: Aprecio su honestidad. ¿Qué cantidad podría pagar hoy para comenzar? Cliente: Podría hacer un pago de $500 ahora y el resto en dos pagos mensuales. Agente Sarah: Perfecto. Puedo ofrecerle un plan de $500 hoy, y luego $1,000 cada uno los próximos dos meses. ¿Le parece razonable? Cliente: Sí, eso sí puedo manejarlo. Agente Sarah: Excelente. Voy a preparar el acuerdo de pago. ¿Prefiere débito automático o pagos manuales? Cliente: Prefiero hacer los pagos manualmente. Agente Sarah: Perfecto. Le enviaré la confirmación por correo. Gracias por trabajar conmigo en esta solución.",
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

        <CallSummary transcription={callData.transcription} />

        <AgentInformation agent={callData.agentInfo} />

        <AdditionalInformation callDetails={callData.additionalInfo} />
      </div>
    </div>
  );
}
