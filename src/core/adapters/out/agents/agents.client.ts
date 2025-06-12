import {
  AuthAgentCommand,
  IAgentsClient,
} from "@/core/adapters/out/agents/agents-client.interface";
import { IHTTPClient } from "@/core/adapters/out/client.interface";
import { Agent } from "@/core/domain/agents/agent.entity";
import { nexaTalkClient } from "@/core/adapters/out/http.client";
import { HTTPMessages, HTTPResponse } from "@/core/adapters/out/http-response";

export class AgentsClient implements IAgentsClient {
  constructor(private httpClient: IHTTPClient) {
    this.httpClient = httpClient;
  }

  async authAgent(command: AuthAgentCommand): Promise<boolean> {
    const response = await this.httpClient.post<HTTPResponse, AuthAgentCommand>(
      "agents/auth",
      command,
    );

    return response.code == HTTPMessages.SUCCESS;
  }

  async getAgentByEmail(email: string): Promise<Agent | null> {
    return this.httpClient.get<Agent>(`agents/${email}`);
  }
}

export const agentsClient = new AgentsClient(nexaTalkClient);
