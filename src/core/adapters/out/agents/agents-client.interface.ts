import { Agent } from "@/core/domain/agents/agent.entity";

export type AuthAgentCommand = {
  legalID: string;
  password: string;
};

export interface IAgentsClient {
  authAgent(command: AuthAgentCommand): Promise<boolean>;

  getAgentByEmail(email: string): Promise<Agent | null>;
}
