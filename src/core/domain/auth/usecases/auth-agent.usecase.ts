import {
  AuthAgentCommand,
  IAgentsClient,
} from "@/core/adapters/out/agents/agents-client.interface";
import { agentsClient } from "@/core/adapters/out/agents/agents.client";
import { createSession } from "@/app/_lib/sessions";

class AuthAgentUseCase {
  constructor(private readonly client: IAgentsClient) {}

  async execute(command: AuthAgentCommand): Promise<void> {
    const agent = await this.client.authAgent(command);

    if (!agent) {
      throw new Error("Authentication failed");
    }

    await createSession({
      agentID: 12343455,
      legalID: "123456789",
      email: "random@email.com",
    });
  }
}

export const authAgentUseCase = new AuthAgentUseCase(agentsClient);
