import { IHTTPClient } from "@/core/adapters/out/client.interface";

class HTTPClient implements IHTTPClient {
  private readonly baseURL: string;

  constructor() {
    this.baseURL =
      process.env.NEXA_TALK_API_URL || "http://localhost:3001/api/v1";
  }

  public async get<T>(endpoint: string): Promise<T | null> {
    try {
      const response = await fetch(`${this.baseURL}/${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return null;
      }

      return response.json();
    } catch (error) {
      console.error(`HTTPClient::get - Error fetching ${endpoint}:`, error);

      return null;
    }
  }

  public async post<T, D>(endpoint: string, data: D): Promise<T> {
    const response = await fetch(`${this.baseURL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error posting to ${endpoint}: ${response.statusText}`);
    }

    return response.json();
  }
}

export const nexaTalkClient = new HTTPClient();
