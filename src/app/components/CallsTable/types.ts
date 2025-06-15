export enum CallStatus {
  COMPLETED = "Completa",
  IN_PROGRESS = "Procesando",
  FAILED = "Error",
}

export type CallData = {
  id: string;
  agent: string;
  client: string;
  duration: string;
  time: string;
  creationDate: string;
  status: "Completa" | "Procesando" | "Error";
};
